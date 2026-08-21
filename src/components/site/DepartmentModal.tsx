import React from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { PlaceholderImage } from '@/components/site/PlaceholderImage';
import type { Department } from '@/data/siteData';
import { CheckCircle, Wrench, BookOpen, Briefcase, Building2, User } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface DepartmentModalProps {
  department: Department;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onApply: () => void;
}

export const DepartmentModal: React.FC<DepartmentModalProps> = ({
  department,
  open,
  onOpenChange,
  onApply
}) => {
  const { details } = department;
  const { t, getRaw } = useLanguage();

  const deptName = t(`departments.items.${department.id}.name`, department.name);
  const deptSeats = t(`departments.items.${department.id}.seats`, department.seats);
  const overview = t(`departments.items.${department.id}.overview`, details.overview);
  const hodQualification = t(`departments.items.${department.id}.hodQualification`, details.hodQualification);
  const labs = getRaw<string[]>(`departments.items.${department.id}.labs`) || details.labs;
  const careerProspects = getRaw<string[]>(`departments.items.${department.id}.careerProspects`) || details.careerProspects;

  return (
    <Dialog open={open} onOpenChange={onOpenChange} className="max-w-3xl">
      <div className="space-y-6">
        
        {/* Header */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#EA580C] uppercase">
              {t('departments.modal.eyebrow')}
            </span>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold">
              {deptSeats}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#0B2F52]">
            {deptName}
          </h3>
        </div>

        {/* Blueprint image banner */}
        <div className="rounded-lg overflow-hidden border border-slate-200">
          <PlaceholderImage
            label={department.imageLabel}
            aspectRatio="landscape"
            className="w-full h-48 sm:h-56"
          />
        </div>

        {/* Overview */}
        <div className="space-y-2">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#EA580C]" />
            {t('departments.modal.programOverview')}
          </h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            {overview}
          </p>
        </div>

        {/* HOD & Faculty Box */}
        <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-3">
          <div className="p-2 rounded-full bg-white text-[#0B2F52] border border-slate-200 shadow-2xs">
            <User className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-mono text-slate-500 uppercase block">{t('departments.modal.headOfDepartment')}</span>
            <h5 className="text-sm font-bold text-slate-900">{details.headOfDept}</h5>
            <p className="text-xs text-slate-600">{hodQualification}</p>
          </div>
        </div>

        {/* Labs & Practical Training */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
            <Wrench className="w-4 h-4 text-[#EA580C]" />
            {t('departments.modal.laboratories')}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {labs.map((lab, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50/80 p-2 rounded border border-slate-100">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{lab}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Career & Recruiter Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-slate-100">
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-[#EA580C]" /> {t('departments.modal.careerOpportunities')}
            </h4>
            <ul className="space-y-1 text-xs text-slate-600 list-disc list-inside">
              {careerProspects.map((cp, idx) => (
                <li key={idx}>{cp}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-[#EA580C]" /> {t('departments.modal.topRecruiters')}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {details.topRecruiters.map((rec, idx) => (
                <span key={idx} className="text-[11px] font-medium bg-blue-50 text-[#0B2F52] px-2 py-0.5 rounded border border-blue-100">
                  {rec}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            {t('common.close')}
          </Button>
          <Button variant="primary" onClick={onApply}>
            {t('common.applyForCourse')}
          </Button>
        </div>

      </div>
    </Dialog>
  );
};
