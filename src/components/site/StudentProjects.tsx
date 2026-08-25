import React from 'react';
import { STUDENT_PROJECTS } from '@/data/projectData';
import { useLanguage } from '@/context/LanguageContext';
import { Cpu, Users, GraduationCap } from 'lucide-react';
import { PlaceholderImage } from '@/components/site/PlaceholderImage';

export const StudentProjects: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="student-projects" className="py-16 md:py-24 bg-[#F8FAFC] border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
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

        {/* 4-Card Photo-Forward Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {STUDENT_PROJECTS.map((proj) => {
            const title = t(`projects.items.${proj.id}.title`, proj.title);
            const category = t(`projects.items.${proj.id}.category`, proj.category);
            const description = t(`projects.items.${proj.id}.description`, proj.description);
            const branch = t(`projects.items.${proj.id}.branch`, proj.branch);
            const team = t(`projects.items.${proj.id}.team`, proj.teamMembers);
            const batchYear = proj.batchYear;

            return (
              <div
                key={proj.id}
                className="w-full bg-white rounded-xl border border-slate-200/90 overflow-hidden flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all duration-200 group"
              >
                <div>
                  {/* Photo Container / Prototype View (Strict fixed height) */}
                  <div className="relative w-full h-44 sm:h-40 md:h-44 bg-slate-900 overflow-hidden border-b border-slate-200/80 shrink-0">
                    <PlaceholderImage
                      label={proj.prototypePhotoLabel || 'PROJECT-DEFAULT.JPG'}
                      className="w-full h-full"
                    />

                    {/* Category Overlay Tag */}
                    <div className="absolute top-2.5 left-2.5 z-10">
                      <span className="inline-flex items-center gap-1 bg-[#0B2F52]/90 backdrop-blur-xs text-white text-[10px] font-mono font-medium px-2 py-0.5 rounded shadow-xs">
                        <Cpu className="w-3 h-3 text-orange-400" />
                        {category}
                      </span>
                    </div>

                    {/* Working Prototype Status Badge */}
                    <div className="absolute bottom-2.5 right-2.5 z-10">
                      <span className="inline-flex items-center gap-1 bg-emerald-600/90 text-white text-[9.5px] font-mono font-bold px-1.5 py-0.5 rounded shadow-xs">
                        ✓ Working Prototype
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-4 sm:p-5 space-y-2">
                    <h3 className="text-base font-bold text-[#0B2F52] leading-snug font-heading group-hover:text-[#EA580C] transition-colors">
                      {title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {description}
                    </p>
                  </div>
                </div>

                {/* Footer Metadata */}
                <div className="p-3.5 sm:p-4 bg-slate-50 border-t border-slate-100 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between text-slate-600 flex-wrap gap-1">
                    <span className="flex items-center gap-1 text-[11px] font-medium text-slate-700">
                      <Users className="w-3 h-3 text-[#0B2F52] shrink-0" />
                      <span className="truncate max-w-[170px] sm:max-w-none">{team}</span>
                    </span>

                    {batchYear && (
                      <span className="text-[10px] font-mono text-slate-500 shrink-0">
                        {batchYear}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-1 border-t border-slate-200/60 text-[10px] sm:text-[10.5px] font-mono">
                    <span className="text-slate-500 flex items-center gap-1 truncate max-w-[150px] sm:max-w-none">
                      <GraduationCap className="w-3 h-3 text-slate-400 shrink-0" />
                      <span className="truncate">{branch}</span>
                    </span>
                    <span className="text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.2 rounded shrink-0">
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
