import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SITE_INFO } from '@/data/siteData';
import { useLanguage } from '@/context/LanguageContext';

interface AdmissionsProps {
  onApplyClick: () => void;
  onProspectusClick: () => void;
}

export const Admissions: React.FC<AdmissionsProps> = ({
  onApplyClick,
  onProspectusClick
}) => {
  const { t } = useLanguage();

  const steps = [
    {
      step: t('admissions.steps.0.step', '01'),
      title: t('admissions.steps.0.title'),
      description: t('admissions.steps.0.description')
    },
    {
      step: t('admissions.steps.1.step', '02'),
      title: t('admissions.steps.1.title'),
      description: t('admissions.steps.1.description')
    },
    {
      step: t('admissions.steps.2.step', '03'),
      title: t('admissions.steps.2.title'),
      description: t('admissions.steps.2.description')
    },
    {
      step: t('admissions.steps.3.step', '04'),
      title: t('admissions.steps.3.title'),
      description: t('admissions.steps.3.description')
    }
  ];

  return (
    <section id="admissions" className="py-16 md:py-24 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="text-xs md:text-sm font-bold font-mono tracking-widest text-[#EA580C] uppercase block">
            {t('admissions.session')}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-[#0B2F52] leading-tight">
            {t('admissions.title')}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t('admissions.description')}
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg border border-slate-200 p-7 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                {/* Step Number */}
                <div className="text-2xl font-bold font-mono text-[#EA580C]/80 mb-4 tracking-wider">
                  {step.step}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dark Callout Banner */}
        <div className="bg-[#0B2F52] rounded-lg p-6 sm:p-8 md:p-10 text-white flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-lg border border-slate-800">
          <div className="space-y-1.5">
            <h3 className="text-xl sm:text-2xl font-bold font-heading tracking-tight">
              {t('admissions.banner.title')}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-mono">
              {t('admissions.banner.enquiries')} <a href={`tel:${SITE_INFO.phone.replace(/\s+/g, '')}`} className="hover:underline text-white">{SITE_INFO.phone}</a> · <a href={`mailto:${SITE_INFO.email}`} className="hover:underline text-white">{SITE_INFO.email}</a>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              onClick={onApplyClick}
              variant="primary"
              size="md"
              className="font-medium bg-[#EA580C] hover:bg-[#D9480F] text-white px-5 py-2.5 rounded-md"
            >
              <span>{t('common.applyForAdmission')}</span>
            </Button>
            <Button
              onClick={onProspectusClick}
              variant="outline"
              size="md"
              className="bg-transparent hover:bg-white/10 text-white border-white/30 hover:border-white/60 px-5 py-2.5 rounded-md flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>{t('common.downloadProspectus')}</span>
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};
