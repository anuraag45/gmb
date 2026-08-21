import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export const Stats: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    {
      value: '82%',
      label: t('stats.placementRate')
    },
    {
      value: '45+',
      label: t('stats.recruiters')
    },
    {
      value: '40',
      label: t('stats.legacy')
    },
    {
      value: '240',
      label: t('stats.intake')
    }
  ];

  return (
    <section id="stats" className="py-12 md:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 border border-slate-200 rounded-lg bg-white shadow-2xs overflow-hidden">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 flex flex-col items-center justify-center text-center group hover:bg-slate-50/70 transition-colors"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans text-[#0B2F52] tracking-tight mb-2 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-xs font-mono font-semibold tracking-wider text-slate-500 uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
