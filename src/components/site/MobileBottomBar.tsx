import React from 'react';
import { Home, BookOpen, GraduationCap, Phone, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface MobileBottomBarProps {
  onApplyClick: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onApplyClick }) => {
  const { t } = useLanguage();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl px-1 sm:px-2 py-1.5 flex items-center justify-between text-slate-600 transition-all select-none pb-[calc(0.375rem+env(safe-area-inset-bottom,0px))] w-full max-w-full">
      {/* Home */}
      <a
        href="#hero"
        className="flex flex-col items-center justify-center p-1 flex-1 min-w-0 text-slate-600 hover:text-[#0B2F52] active:scale-95 transition-all cursor-pointer"
      >
        <Home className="w-5 h-5 shrink-0" />
        <span className="text-[10px] font-medium mt-0.5 truncate">{t('header.nav.home', 'Home')}</span>
      </a>

      {/* Departments */}
      <a
        href="#departments"
        className="flex flex-col items-center justify-center p-1 flex-1 min-w-0 text-slate-600 hover:text-[#0B2F52] active:scale-95 transition-all cursor-pointer"
      >
        <BookOpen className="w-5 h-5 shrink-0" />
        <span className="text-[10px] font-medium mt-0.5 truncate">{t('header.nav.departments', 'Courses')}</span>
      </a>

      {/* Center Primary Apply CTA Button */}
      <div className="flex-1 flex items-center justify-center min-w-0">
        <button
          onClick={onApplyClick}
          aria-label="Apply for Admission"
          className="flex flex-col items-center justify-center -mt-5 bg-[#EA580C] hover:bg-[#c2410c] text-white rounded-full p-3 shadow-lg shadow-orange-500/30 border-2 border-white active:scale-90 transition-all cursor-pointer shrink-0"
        >
          <Sparkles className="w-5 h-5 animate-pulse" />
          <span className="sr-only">Apply</span>
        </button>
      </div>

      {/* Eligibility Wizard */}
      <a
        href="#eligibility-wizard"
        className="flex flex-col items-center justify-center p-1 flex-1 min-w-0 text-slate-600 hover:text-[#0B2F52] active:scale-95 transition-all cursor-pointer"
      >
        <GraduationCap className="w-5 h-5 shrink-0" />
        <span className="text-[10px] font-medium mt-0.5 truncate">Merit</span>
      </a>

      {/* Call / Contact */}
      <a
        href="tel:+912794222222"
        className="flex flex-col items-center justify-center p-1 flex-1 min-w-0 text-slate-600 hover:text-[#0B2F52] active:scale-95 transition-all cursor-pointer"
      >
        <Phone className="w-5 h-5 shrink-0" />
        <span className="text-[10px] font-medium mt-0.5 truncate">Helpline</span>
      </a>
    </div>
  );
};
