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
    <section id="departments" className="py-16 md:py-24 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
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

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DEPARTMENTS.map((dept) => {
            const deptName = t(`departments.items.${dept.id}.name`, dept.name);
            const deptSeats = t(`departments.items.${dept.id}.seats`, dept.seats);
            const deptDesc = t(`departments.items.${dept.id}.description`, dept.description);

            return (
              <div
                key={dept.id}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-lg hover:border-[#0B2F52]/40 transition-all duration-200 group"
              >
                <div>
                  {/* Card Image Placeholder */}
                  <div className="relative border-b border-slate-100">
                    <PlaceholderImage
                      label={dept.imageLabel}
                      aspectRatio="landscape"
                      className="w-full h-44 group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6">
                    {/* Icon Box */}
                    <div className="mb-4">
                      <div className={`w-10 h-10 rounded-md ${dept.iconBg} text-white flex items-center justify-center shadow-xs`}>
                        {getIcon(dept.iconName)}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 mb-1 tracking-tight font-sans">
                      {deptName}
                    </h3>

                    {/* Seats Badge */}
                    <span className="inline-block text-[11px] font-mono font-semibold tracking-wider text-slate-500 uppercase mb-3">
                      {deptSeats}
                    </span>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {deptDesc}
                    </p>
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="px-6 pb-6 pt-2">
                  <button
                    onClick={() => setSelectedDept(dept)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B2F52] group-hover:text-[#EA580C] transition-colors cursor-pointer"
                  >
                    <span>{t('common.departmentDetails')}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
