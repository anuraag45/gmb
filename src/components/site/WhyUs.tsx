import React from 'react';
import { GraduationCap, FlaskConical, Briefcase, Ship } from 'lucide-react';
import { WHY_US_CARDS } from '@/data/siteData';
import { useLanguage } from '@/context/LanguageContext';

const iconMap = {
  GraduationCap: GraduationCap,
  FlaskConical: FlaskConical,
  Briefcase: Briefcase,
  Ship: Ship
};

export const WhyUs: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="py-16 md:py-24 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <span className="text-xs md:text-sm font-bold font-mono tracking-widest text-[#EA580C] uppercase block">
            {t('whyUs.eyebrow')}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-[#0B2F52] leading-tight">
            {t('whyUs.title')}
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_US_CARDS.map((card, idx) => {
            const IconComponent = iconMap[card.icon as keyof typeof iconMap] || GraduationCap;
            const title = t(`whyUs.cards.${idx}.title`, card.title);
            const description = t(`whyUs.cards.${idx}.description`, card.description);

            return (
              <div
                key={card.id}
                className="bg-white rounded-xl border border-slate-200/90 p-5 sm:p-6 md:p-7 flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all duration-200 group"
              >
                <div>
                  {/* Icon Badge */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#EBF3FA] text-[#0B2F52] flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#0B2F52] group-hover:text-white transition-colors duration-200">
                    <IconComponent className="w-5 h-5 stroke-[1.8]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 sm:mb-3 tracking-tight font-sans">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
