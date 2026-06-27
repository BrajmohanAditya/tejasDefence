import React, { useEffect } from 'react';
import MainRoutes from './Routes/MainRoutes';
import { GetUserHook } from './hooks/User.hook';
import { useUserStore } from './store/user.store';

function App() {
  const { data, isLoading, isError } = GetUserHook();
  const setUser = useUserStore((state) => state.setUser);
  const clearUser = useUserStore((state) => state.clearUser);

  // Jab API se data aayega, ye usko permanently Zustand mein daal dega
  useEffect(() => {
    if (data?.user) {
      setUser(data.user);
    } else if (isError) {
      clearUser();
    }
  }, [data, isError, setUser, clearUser]);

  // Jab tak API call ho rahi hai, hum app ko aage load nahi hone denge
  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <h2>Loading your profile...</h2>
      </div>
    );
  }

  return (
    <>
      <div><MainRoutes /></div>
    </>
  );
}

export default App;
