import React from 'react';
import { ALUMNI_DATA } from '@/data/alumniData';
import { useLanguage } from '@/context/LanguageContext';
import { Briefcase, MapPin, GraduationCap, Quote, User } from 'lucide-react';
import { PlaceholderImage } from '@/components/site/PlaceholderImage';

export const AlumniSpotlight: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="alumni" className="py-16 md:py-24 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <span className="text-xs md:text-sm font-bold font-mono tracking-widest text-[#EA580C] uppercase block">
            {t('alumni.eyebrow')}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-[#0B2F52] leading-tight">
            {t('alumni.title')}
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            {t('alumni.subtitle')}
          </p>
        </div>

        {/* 3-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {ALUMNI_DATA.map((alum) => {
            const role = t(`alumni.items.${alum.id}.role`, alum.role);
            const employer = t(`alumni.items.${alum.id}.employer`, alum.employer);
            const hometown = t(`alumni.items.${alum.id}.hometown`, alum.hometown);
            const branch = t(`alumni.items.${alum.id}.branch`, alum.branch);
            const batchYear = alum.batchYear;
            const tip = t(`alumni.items.${alum.id}.tip`, alum.tipForJuniors);

            return (
              <div
                key={alum.id}
                className="w-full bg-[#F8FAFC] rounded-xl border border-slate-200/90 p-4 sm:p-5 md:p-7 flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all duration-200 group"
              >
                <div className="space-y-3.5 sm:space-y-5">
                  {/* Top Profile Header */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    {alum.photoLabel ? (
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-xs">
                        <PlaceholderImage
                          label={alum.photoLabel}
                          aspectRatio="square"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0B2F52]/10 text-[#0B2F52] flex items-center justify-center shrink-0 border-2 border-white shadow-xs">
                        <User className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 truncate font-heading">
                          {alum.name}
                        </h3>
                        {hometown && (
                          <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-medium text-slate-500 bg-white border border-slate-200 px-1.5 sm:px-2 py-0.5 rounded-full">
                            <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#EA580C]" />
                            {hometown}
                          </span>
                        )}
                      </div>

                      {/* Branch & Batch Badges */}
                      <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                        <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-mono font-medium text-[#0B2F52] bg-[#EBF3FA] px-1.5 sm:px-2 py-0.5 rounded">
                          <GraduationCap className="w-3 h-3" />
                          <span className="truncate max-w-[130px] sm:max-w-none">{branch}</span>
                        </span>

                        <span className="text-[10px] sm:text-[11px] font-mono text-slate-500">
                          {t('alumni.batchLabel')} {batchYear}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Career & Role Block */}
                  <div className="bg-white rounded-lg p-3 sm:p-4 border border-slate-200/80 space-y-1 shadow-2xs">
                    <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-mono font-semibold text-[#EA580C] uppercase tracking-wider">
                      <Briefcase className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span>{t('alumni.currentRole')}</span>
                    </div>
                    <p className="text-sm sm:text-base font-bold text-[#0B2F52] leading-snug">
                      {role}
                    </p>
                    <p className="text-xs font-medium text-slate-600">
                      {employer}
                    </p>
                  </div>

                  {/* Tip For Juniors */}
                  <div className="pt-1">
                    <div className="flex items-start gap-2.5">
                      <Quote className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5 opacity-80" />
                      <div>
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
                          {t('alumni.tipHeading')}
                        </span>
                        <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                          "{tip}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Bottom Meta */}
                <div className="pt-4 mt-4 border-t border-slate-200/70 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>GMB Polytechnic Alumni</span>
                  <span className="text-[#0B2F52] font-semibold">Pipavav Industrial Belt</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
