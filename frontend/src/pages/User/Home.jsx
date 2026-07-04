import React, { useState } from "react";
import { X } from "lucide-react";

import CourseSection from "@/components/userComponent/courseSection";
import HeroSection from "@/components/userComponent/heroSection";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import StudyMaterial from "./study.material";
import SuccessBoardDisplay from "./success.board";
import Footer from "@/components/userComponent/footer";
import QualifiedMentorsDisplay from "./qualifiedMentors.board";

const Home = () => {
  const [showPopup, setShowPopup] = useState(() => {
    const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");
    return !hasSeenPopup; // Returns true (show popup) if not seen yet, false otherwise
  });

  const handleClose = () => {
    sessionStorage.setItem("hasSeenPopup", "true");
    setShowPopup(false);
  };

  return (
    <div className="min-h-[88vh] bg-slate-50">
      <HeroSection />
      <StudyMaterial />
      <CourseSection />
      <QualifiedMentorsDisplay />
      <SuccessBoardDisplay />
      <Footer />

      <FloatingWhatsApp />

      {/* Image Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
          <div className="relative max-w-lg w-full bg-transparent shadow-2xl transition-all transform scale-100">
            {/* Close Button */}
            <button
            onClick={handleClose}
              className="absolute -top-3 -right-3 z-10 p-2 rounded-full bg-black/70 hover:bg-black/90 text-white transition-all cursor-pointer border border-white/20"
              aria-label="Close popup"
            >
              <X size={20} />
            </button>
            {/* Popup Image */}
            <img
              src="/adv.png"
              alt="Announcement"
              className="w-full h-auto max-h-[85vh] rounded-2xl object-contain block"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
