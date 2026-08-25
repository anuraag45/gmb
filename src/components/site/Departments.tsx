import React, { useState } from 'react';
import { Cog, Landmark, Zap, Cpu, ArrowRight } from 'lucide-react';
import { PlaceholderImage } from '@/components/site/PlaceholderImage';
import { DEPARTMENTS } from '@/data/siteData';
import type { Department } from '@/data/siteData';
import { DepartmentModal } from '@/components/site/DepartmentModal';
import { useLanguage } from '@/context/LanguageContext';

interface DepartmentsProps {
  onApplyForDepartment?: (deptName: string) => void;
}

export const Departments: React.FC<DepartmentsProps> = ({ onApplyForDepartment }) => {
  const [selectedDept, setSelectedDept] = useState<Department | null>(null);
  const { t } = useLanguage();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'cogs':
        return <Cog className="w-5 h-5" />;
      case 'building':
        return <Landmark className="w-5 h-5" />;
      case 'zap':
        return <Zap className="w-5 h-5" />;
      case 'cpu':
        return <Cpu className="w-5 h-5" />;
      default:
        return <Cog className="w-5 h-5" />;
    }
  };

  return (
    <section id="departments" className="py-16 md:py-24 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs md:text-sm font-bold font-mono tracking-widest text-[#EA580C] uppercase block">
              {t('departments.eyebrow')}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-[#0B2F52] leading-tight">
              {t('departments.title')}
            </h2>
          </div>

          <div className="text-xs sm:text-sm font-medium text-slate-500 font-mono tracking-wide pb-1">
            {t('departments.affiliation')}
          </div>
        </div>

        {/* 4 Cards Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {DEPARTMENTS.map((dept) => {
            const deptName = t(`departments.items.${dept.id}.name`, dept.name);
            const deptSeats = t(`departments.items.${dept.id}.seats`, dept.seats);
            const deptDesc = t(`departments.items.${dept.id}.description`, dept.description);

            return (
              <div
                key={dept.id}
                className="w-full bg-white rounded-xl border border-slate-200/90 overflow-hidden flex flex-col justify-between hover:shadow-lg hover:border-[#0B2F52]/40 transition-all duration-200 group"
              >
                <div>
                  {/* Department Laboratory Photography (Strict fixed height) */}
                  <div className="relative w-full h-44 sm:h-40 md:h-44 border-b border-slate-100 overflow-hidden bg-slate-900 shrink-0">
                    <PlaceholderImage
                      label={dept.imageLabel}
                      className="w-full h-full"
                    />
                  </div>

                  <div className="p-4 sm:p-5 md:p-6">
                    {/* Top Row: Icon + Seats Badge */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg ${dept.iconBg} text-white flex items-center justify-center shadow-xs shrink-0`}>
                        {getIcon(dept.iconName)}
                      </div>
                      <span className="inline-flex items-center text-[10px] sm:text-[11px] font-mono font-semibold tracking-wide px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 shrink-0">
                        {deptSeats}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 tracking-tight font-heading leading-snug">
                      {deptName}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {deptDesc}
                    </p>
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 md:px-6 md:pb-6 pt-1 border-t border-slate-100/80">
                  <button
                    onClick={() => setSelectedDept(dept)}
                    className="w-full py-1.5 flex items-center justify-between text-xs sm:text-sm font-semibold text-[#0B2F52] group-hover:text-[#EA580C] transition-colors cursor-pointer"
                  >
                    <span>{t('common.departmentDetails')}</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Deep-dive Department Details Modal */}
      {selectedDept && (
        <DepartmentModal
          department={selectedDept}
          open={!!selectedDept}
          onOpenChange={(open) => !open && setSelectedDept(null)}
          onApply={() => {
            if (onApplyForDepartment && selectedDept) {
              onApplyForDepartment(t(`departments.items.${selectedDept.id}.name`, selectedDept.name));
            }
            setSelectedDept(null);
          }}
        />
      )}
    </section>
  );
};
