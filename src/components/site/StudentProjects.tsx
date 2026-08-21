import React from 'react';
import { STUDENT_PROJECTS } from '@/data/projectData';
import { useLanguage } from '@/context/LanguageContext';
import { Cpu, Users, GraduationCap, AlertCircle, Wrench } from 'lucide-react';
import { PlaceholderImage } from '@/components/site/PlaceholderImage';

export const StudentProjects: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="student-projects" className="py-16 md:py-24 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="text-xs md:text-sm font-bold font-mono tracking-widest text-[#EA580C] uppercase block">
            {t('projects.eyebrow')}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-[#0B2F52] leading-tight">
            {t('projects.title')}
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* 4-Card Photo-Forward Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STUDENT_PROJECTS.map((proj) => {
            const title = t(`projects.items.${proj.id}.title`, proj.title);
            const category = t(`projects.items.${proj.id}.category`, proj.category);
            const description = proj.description === 'NEEDS INPUT'
              ? null
              : t(`projects.items.${proj.id}.description`, proj.description);
            const branch = proj.branch === 'NEEDS INPUT'
              ? null
              : t(`projects.items.${proj.id}.branch`, proj.branch);
            const team = proj.teamMembers === 'NEEDS INPUT'
              ? null
              : t(`projects.items.${proj.id}.team`, proj.teamMembers);
            const batchYear = proj.batchYear === 'NEEDS INPUT' ? null : proj.batchYear;

            return (
              <div
                key={proj.id}
                className="bg-white rounded-xl border border-slate-200/90 overflow-hidden flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all duration-200 group"
              >
                <div>
                  {/* Photo Container / Prototype View */}
                  <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden border-b border-slate-200/80">
                    <PlaceholderImage
                      label={proj.prototypePhotoLabel || 'PROJECT-DEFAULT.JPG'}
                      aspectRatio="wide"
                      className="w-full h-full"
                    />

                    {/* Category Overlay Tag */}
                    <div className="absolute top-2.5 left-2.5 z-10">
                      <span className="inline-flex items-center gap-1 bg-[#0B2F52]/90 backdrop-blur-xs text-white text-[10.5px] font-mono font-medium px-2 py-0.5 rounded shadow-xs">
                        <Cpu className="w-3 h-3 text-orange-400" />
                        {category}
                      </span>
                    </div>

                    {/* Missing Photo Notice Badge */}
                    <div className="absolute bottom-2 right-2 z-10">
                      <span className="inline-flex items-center gap-1 bg-amber-500/90 text-slate-900 text-[9.5px] font-mono font-bold px-1.5 py-0.5 rounded shadow-xs">
                        <AlertCircle className="w-2.5 h-2.5" />
                        {t('projects.photoPending')}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 space-y-3">
                    <h3 className="text-base font-bold text-[#0B2F52] leading-snug font-heading group-hover:text-[#EA580C] transition-colors">
                      {title}
                    </h3>

                    {/* Description or Pending notice */}
                    {description ? (
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                        {description}
                      </p>
                    ) : (
                      <div className="flex items-center gap-1.5 text-xs text-amber-700 bg-amber-50 border border-amber-200/60 p-2 rounded-md">
                        <Wrench className="w-3.5 h-3.5 shrink-0" />
                        <span className="text-[11px] leading-tight">
                          {t('projects.descriptionPending')}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Metadata */}
                <div className="p-4 bg-slate-50 border-t border-slate-100 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-slate-600 flex-wrap gap-1">
                    <span className="flex items-center gap-1 text-[11px] font-medium text-slate-700">
                      <Users className="w-3 h-3 text-[#0B2F52]" />
                      {team || <span className="text-amber-700 font-mono text-[10px]">{t('projects.teamPending')}</span>}
                    </span>

                    {batchYear && (
                      <span className="text-[10px] font-mono text-slate-500">
                        {batchYear}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-1 border-t border-slate-200/60 text-[10.5px] font-mono">
                    <span className="text-slate-500 flex items-center gap-1">
                      <GraduationCap className="w-3 h-3 text-slate-400" />
                      {branch || <span className="text-amber-700">{t('projects.branchPending')}</span>}
                    </span>
                    <span className="text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.2 rounded">
                      GTU Capstone
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
