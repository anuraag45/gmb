import React from 'react';
import { ALUMNI_DATA } from '@/data/alumniData';
import { useLanguage } from '@/context/LanguageContext';
import { Briefcase, MapPin, GraduationCap, Quote, AlertCircle, User } from 'lucide-react';
import { PlaceholderImage } from '@/components/site/PlaceholderImage';

export const AlumniSpotlight: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="alumni" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {ALUMNI_DATA.map((alum) => {
            const role = t(`alumni.items.${alum.id}.role`, alum.role);
            const employer = t(`alumni.items.${alum.id}.employer`, alum.employer);
            const hometown = alum.hometown === 'NEEDS INPUT'
              ? null
              : t(`alumni.items.${alum.id}.hometown`, alum.hometown);
            const branch = alum.branch === 'NEEDS INPUT'
              ? null
              : t(`alumni.items.${alum.id}.branch`, alum.branch);
            const batchYear = alum.batchYear === 'NEEDS INPUT' ? null : alum.batchYear;
            const tip = alum.tipForJuniors === 'NEEDS INPUT'
              ? null
              : t(`alumni.items.${alum.id}.tip`, alum.tipForJuniors);

            return (
              <div
                key={alum.id}
                className="bg-[#F8FAFC] rounded-xl border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all duration-200 group"
              >
                <div className="space-y-5">
                  {/* Top Profile Header */}
                  <div className="flex items-start gap-4">
                    {alum.photoLabel ? (
                      <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-xs">
                        <PlaceholderImage
                          label={alum.photoLabel}
                          aspectRatio="square"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-14 h-14 rounded-full bg-[#0B2F52]/10 text-[#0B2F52] flex items-center justify-center shrink-0 border-2 border-white shadow-xs">
                        <User className="w-6 h-6 stroke-[1.8]" />
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-base font-bold text-slate-900 truncate font-heading">
                          {alum.name.includes('NEEDS INPUT') ? (
                            <span className="text-slate-500 italic text-sm">{t('alumni.graduateProfile')}</span>
                          ) : (
                            alum.name
                          )}
                        </h3>
                        {hometown && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded-full">
                            <MapPin className="w-3 h-3 text-[#EA580C]" />
                            {hometown}
                          </span>
                        )}
                      </div>

                      {/* Branch & Batch Badges */}
                      <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                        {branch ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-[#0B2F52] bg-[#EBF3FA] px-2 py-0.5 rounded">
                            <GraduationCap className="w-3 h-3" />
                            {branch}
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono text-amber-700 bg-amber-50 border border-amber-200/80 px-1.5 py-0.5 rounded">
                            <AlertCircle className="w-2.5 h-2.5" />
                            {t('alumni.branchNeedsInput')}
                          </span>
                        )}

                        {batchYear && (
                          <span className="text-[11px] font-mono text-slate-500">
                            {t('alumni.batchLabel')} {batchYear}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Career & Role Block */}
                  <div className="bg-white rounded-lg p-4 border border-slate-200/80 space-y-1.5 shadow-2xs">
                    <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#EA580C] uppercase tracking-wider">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{t('alumni.currentRole')}</span>
                    </div>
                    <p className="text-base font-bold text-[#0B2F52] leading-snug">
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
                        {tip ? (
                          <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                            "{tip}"
                          </p>
                        ) : (
                          <div className="inline-flex items-center gap-1.5 text-xs text-amber-700 bg-amber-50/80 border border-amber-200/60 px-2.5 py-1.5 rounded-md">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{t('alumni.tipNeedsInput')}</span>
                          </div>
                        )}
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
