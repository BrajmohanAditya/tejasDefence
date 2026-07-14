import Navbar from "../components/userComponent/Navbar";
import TrendingBar from "../components/userComponent/TrendingBar";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      <Navbar />
      <TrendingBar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default UserLayout;
