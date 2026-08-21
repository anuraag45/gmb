import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Languages } from 'lucide-react';

interface LanguageSwitcherProps {
  variant?: 'navbar' | 'topbar' | 'mobile';
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  variant = 'navbar',
  className = ''
}) => {
  const { language, setLanguage } = useLanguage();

  if (variant === 'topbar') {
    return (
      <div 
        role="group" 
        aria-label="Language Selection"
        className={`inline-flex items-center rounded-full bg-slate-800/80 p-0.5 border border-slate-700 text-[11px] ${className}`}
      >
        <button
          type="button"
          onClick={() => setLanguage('en')}
          aria-pressed={language === 'en'}
          className={`px-2.5 py-0.5 rounded-full font-medium transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-orange-400 ${
            language === 'en'
              ? 'bg-[#EA580C] text-white font-semibold shadow-xs'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          English
        </button>
        <button
          type="button"
          onClick={() => setLanguage('gu')}
          aria-pressed={language === 'gu'}
          className={`px-2.5 py-0.5 rounded-full font-medium transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-orange-400 ${
            language === 'gu'
              ? 'bg-[#EA580C] text-white font-semibold shadow-xs'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          ગુજરાતી
        </button>
      </div>
    );
  }

  if (variant === 'mobile') {
    return (
      <div 
        role="group" 
        aria-label="Language Selection"
        className={`w-full flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200 ${className}`}
      >
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
          <Languages className="w-4 h-4 text-[#EA580C]" />
          <span>Language / ભાષા:</span>
        </div>
        <div className="inline-flex rounded-md bg-slate-200 p-0.5">
          <button
            type="button"
            onClick={() => setLanguage('en')}
            aria-pressed={language === 'en'}
            className={`px-3 py-1 text-xs rounded font-medium transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2F52] ${
              language === 'en'
                ? 'bg-white text-[#0B2F52] font-bold shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            English
          </button>
          <button
            type="button"
            onClick={() => setLanguage('gu')}
            aria-pressed={language === 'gu'}
            className={`px-3 py-1 text-xs rounded font-medium transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2F52] ${
              language === 'gu'
                ? 'bg-[#0B2F52] text-white font-bold shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            ગુજરાતી
          </button>
        </div>
      </div>
    );
  }

  // Default: navbar segmented pill
  return (
    <div
      role="group"
      aria-label="Language Selection"
      className={`inline-flex items-center rounded-full bg-slate-100 p-1 border border-slate-200/80 shadow-2xs ${className}`}
    >
      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        className={`px-3 py-1 text-xs rounded-full font-medium transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2F52] ${
          language === 'en'
            ? 'bg-[#0B2F52] text-white font-semibold shadow-xs'
            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
        }`}
      >
        English
      </button>
      <button
        type="button"
        onClick={() => setLanguage('gu')}
        aria-pressed={language === 'gu'}
        className={`px-3 py-1 text-xs rounded-full font-medium transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2F52] ${
          language === 'gu'
            ? 'bg-[#0B2F52] text-white font-semibold shadow-xs'
            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
        }`}
      >
        ગુજરાતી
      </button>
    </div>
  );
};
