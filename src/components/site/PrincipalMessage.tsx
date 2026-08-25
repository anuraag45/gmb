import React, { useState } from 'react';
import { Quote, ChevronDown, ChevronUp } from 'lucide-react';
import { PlaceholderImage } from '@/components/site/PlaceholderImage';
import { useLanguage } from '@/context/LanguageContext';

export const PrincipalMessage: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t, getRaw } = useLanguage();

  const name = t('principal.name');
  const designation = t('principal.designation');
  const credentials = t('principal.credentials');
  const quote = t('principal.quote');
  const shortIntro = t('principal.shortIntro');
  const fullLetter = getRaw<string[]>('principal.fullLetter') || [];

  return (
    <section id="principal" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow & Title */}
        <div className="max-w-3xl mb-12 space-y-2">
          <span className="text-xs md:text-sm font-bold font-mono tracking-widest text-[#EA580C] uppercase block">
            {t('principal.eyebrow')}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-[#0B2F52] leading-tight">
            {t('principal.title')}
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left Column: Portrait & Credentials */}
          <div className="md:col-span-5 lg:col-span-4 space-y-4">
            <div className="max-w-xs sm:max-w-sm md:max-w-none rounded-lg overflow-hidden border border-slate-200 shadow-sm">
              <PlaceholderImage
                label="PRINCIPAL-PORTRAIT.JPG"
                aspectRatio="portrait"
                className="w-full h-56 xs:h-64 sm:h-80 md:h-96 object-cover"
              />
            </div>

            {/* Principal Name & Designation with Orange Left Accent */}
            <div className="pl-4 border-l-3 border-[#EA580C] space-y-1">
              <h4 className="text-lg font-bold text-[#0B2F52]">
                {name}
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 font-medium">
                {designation}
              </p>
              <p className="text-xs text-slate-500 font-normal">
                {credentials}
              </p>
            </div>
          </div>

          {/* Right Column: Quote, Background & Expandable Letter */}
          <div className="md:col-span-7 lg:col-span-8 space-y-6">
            
            {/* Featured Quote Box */}
            <div className="bg-[#F0F6FA] border-l-4 border-[#0B2F52] p-6 sm:p-8 rounded-r-lg shadow-2xs relative">
              <div className="text-[#EA580C] mb-3">
                <Quote className="w-8 h-8 rotate-180 opacity-90 fill-[#EA580C]/20" />
              </div>
              <blockquote className="text-lg sm:text-xl md:text-2xl font-serif font-medium text-slate-900 leading-relaxed">
                “{quote}”
              </blockquote>
            </div>

            {/* Introductory Context Paragraph */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              {shortIntro}
            </p>

            {/* Expandable Message Section */}
            {isExpanded && (
              <div className="space-y-4 pt-2 border-t border-slate-100 text-slate-600 text-base leading-relaxed animate-in fade-in-50 duration-300">
                {fullLetter.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            )}

            {/* Accordion Trigger */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B2F52] hover:text-[#EA580C] transition-colors cursor-pointer py-1"
            >
              <span>{isExpanded ? t('common.showLess') : t('common.readFullMessage')}</span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
