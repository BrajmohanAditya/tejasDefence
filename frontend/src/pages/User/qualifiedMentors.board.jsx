import React from "react";
import { useGetQualifiedMentorsHook } from "../../hooks/qualifiedMentors.hook.js";
import { GraduationCap, Briefcase, BookOpen, User } from "lucide-react";

const QualifiedMentorsDisplay = () => {
  const { data: mentorsResp, isLoading } = useGetQualifiedMentorsHook();
  const mentors = mentorsResp?.mentors || [];

  if (isLoading) {
    return (
      <div className="py-12 flex justify-center">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (mentors.length === 0) return null;

  return (
    <div className="py-16 bg-slate-50 overflow-hidden font-sans relative">
      {/* Decorative Background Patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-purple-100 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Meet Our <span className="text-blue-600">Expert Mentors</span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-600 text-base md:text-lg leading-relaxed">
            Learn from the best. Our highly qualified and experienced faculty members are dedicated to guiding you towards your dream career.
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {mentors.map((mentor) => (
            <div 
              key={mentor._id} 
              className="group bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Image Header */}
              <div className="relative pt-6 pb-4 px-6 flex justify-center bg-gradient-to-b from-blue-50 to-white">
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
                <div className="w-28 h-28 rounded-full ring-4 ring-white shadow-lg overflow-hidden bg-slate-100 flex items-center justify-center">
                  {mentor.imageUrl ? (
                    <img 
                      src={mentor.imageUrl} 
                      alt={mentor.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <User className="w-12 h-12 text-slate-400" />
                  )}
                </div>
                
                {/* Subject Floating Badge */}
                <div className="absolute -bottom-3 bg-slate-900 text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-md border-2 border-white transform transition-transform group-hover:scale-105">
                  <BookOpen className="w-3 h-3 text-blue-400" />
                  {mentor.subject}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 pt-8 flex-1 flex flex-col text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{mentor.name}</h3>
                
                <div className="mt-5 space-y-3 flex-1">
                  {/* Qualifications */}
                  {mentor.qualifications && (
                    <div className="flex items-center gap-3 text-sm text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <div className="w-8 h-8 rounded-md bg-blue-100 flex items-center justify-center shrink-0">
                        <GraduationCap className="w-4 h-4 text-blue-700" />
                      </div>
                      <span className="font-medium text-left leading-tight line-clamp-2">
                        {mentor.qualifications}
                      </span>
                    </div>
                  )}

                  {/* Experience */}
                  {mentor.experience && (
                    <div className="flex items-center gap-3 text-sm text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <div className="w-8 h-8 rounded-md bg-yellow-100 flex items-center justify-center shrink-0">
                        <Briefcase className="w-4 h-4 text-yellow-700" />
                      </div>
                      <span className="font-medium text-left leading-tight">
                        {mentor.experience}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Bottom Decoration */}
              <div className="h-1.5 w-full bg-slate-50 group-hover:bg-blue-600 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default QualifiedMentorsDisplay;
