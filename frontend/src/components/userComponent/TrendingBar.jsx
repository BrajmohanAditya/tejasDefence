import React from "react";
import { Link } from "react-router-dom";

const TrendingBar = () => {
  const trendingLinks = [
    { text: "NDA I 2026 Written Result Declared", url: "#" },
    { text: "Agniveer Army Rally Schedule Out 2026", url: "#" },
    { text: "Air Force Group X & Y Exam Dates Announced", url: "#" },
    { text: "Navy SSR/MR Online Application Form 2026", url: "#" },
    { text: "CDS II Notification PDF Download", url: "#" },
    { text: "Weekly Current Affairs PDF Download", url: "#" },
    { text: "AFCAT 1 2026 Admit Card Out", url: "#" },
    { text: "MNS Exam Dates Announced", url: "#" },
  ];

  return (
    <div className="w-full bg-amber-50/80 dark:bg-slate-900 text-slate-800 dark:text-slate-200 border-b border-amber-100/50 dark:border-slate-800 flex items-center h-10 px-4 select-none overflow-hidden relative shadow-sm">
      {/* Label */}
      <div className="flex items-center gap-1.5 bg-amber-50/95 dark:bg-slate-900 pr-4 z-10 font-extrabold text-xs tracking-wider uppercase shrink-0 border-r border-amber-200/60 dark:border-slate-800 h-full text-red-600 dark:text-red-400">
        <span role="img" aria-label="fire" className="animate-pulse">🔥</span>
        <span>Trending Links:</span>
      </div>

      {/* Marquee Area */}
      <div className="flex-1 overflow-hidden relative flex items-center h-full group">
        <div className="animate-marquee group-hover:[animation-play-state:paused] flex items-center gap-8 pl-4">
          {trendingLinks.map((link, idx) => (
            <React.Fragment key={idx}>
              <Link
                to={link.url}
                className="text-xs md:text-sm font-semibold hover:text-[#d4af37] text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-200 whitespace-nowrap"
              >
                {link.text}
              </Link>
              {idx < trendingLinks.length - 1 && (
                <span className="text-slate-300 dark:text-slate-700 font-bold mx-2">|</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Duplicate Content for seamless scrolling */}
        <div className="animate-marquee group-hover:[animation-play-state:paused] flex items-center gap-8 pl-4" aria-hidden="true">
          {trendingLinks.map((link, idx) => (
            <React.Fragment key={idx + trendingLinks.length}>
              <Link
                to={link.url}
                className="text-xs md:text-sm font-semibold hover:text-[#d4af37] text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-200 whitespace-nowrap"
              >
                {link.text}
              </Link>
              {idx < trendingLinks.length - 1 && (
                <span className="text-slate-300 dark:text-slate-700 font-bold mx-2">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingBar;
