import React, { useState } from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Download, FileText, CheckCircle } from 'lucide-react';
import { SITE_INFO } from '@/data/siteData';
import { useLanguage } from '@/context/LanguageContext';

interface ProspectusModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ProspectusModal: React.FC<ProspectusModalProps> = ({
  open,
  onOpenChange
}) => {
  const [downloaded, setDownloaded] = useState(false);
  const { t } = useLanguage();

  const handleDownload = () => {
    setDownloaded(true);
    // Generate text brochure file download
    const content = `=====================================================
GMB POLYTECHNIC, RAJULA
Gujarat Maritime Board, Government of Gujarat
Approved by AICTE | Affiliated to GTU (Inst. Code: 992) | Est. 1984
=====================================================

ADMISSION PROSPECTUS 2026-2027

1. INSTITUTION OVERVIEW:
   GMB Polytechnic, Rajula is an autonomous state polytechnic established 
   under the Gujarat Maritime Board. It provides rigorous 3-year 
   diploma engineering education directly mapped to Saurashtra's coastal 
   and heavy manufacturing industries.

2. DIPLOMA PROGRAMMES (Annual Sanctioned Intake: 240):
   - Computer Engineering: 60 Seats
   - Mechanical Engineering: 60 Seats
   - Civil Engineering: 60 Seats
   - Electrical Engineering: 60 Seats

3. ELIGIBILITY:
   - Passed 10th Standard (SSC) examination from GSEB/CBSE/ICSE with Mathematics and Science.
   - Admission channeled centrally through ACPDC Gujarat merit list.

4. CONTACT & CAMPUS DESK:
   - Address: ${SITE_INFO.address}
   - Phone: ${SITE_INFO.phone}
   - Email: ${SITE_INFO.email}
=====================================================`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'GMB_Polytechnic_Rajula_Prospectus_2026.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <div className="space-y-6">
        <div>
          <span className="text-xs font-mono font-bold tracking-widest text-[#EA580C] uppercase block mb-1">
            {t('prospectusModal.eyebrow')}
          </span>
          <h3 className="text-2xl font-bold font-heading text-[#0B2F52]">
            {t('prospectusModal.title')}
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            {t('prospectusModal.subtitle')}
          </p>
        </div>

        <div className="p-6 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-red-100 text-red-600 flex items-center justify-center shrink-0">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              {t('prospectusModal.fileName')}
            </h4>
            <p className="text-xs text-slate-500 font-mono">
              {t('prospectusModal.fileMeta')}
            </p>
          </div>
        </div>

        {downloaded ? (
          <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{t('prospectusModal.downloadSuccess')}</span>
          </div>
        ) : null}

        <div className="flex justify-end gap-3 pt-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            {t('common.close')}
          </Button>
          <Button
            variant="primary"
            onClick={handleDownload}
            className="flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>{t('prospectusModal.downloadButton')}</span>
          </Button>
        </div>
      </div>
    </Dialog>
  );
};
