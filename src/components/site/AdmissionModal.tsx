import React, { useState } from 'react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { DEPARTMENTS, SITE_INFO } from '@/data/siteData';
import { CheckCircle2, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface AdmissionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultBranch?: string;
}

// Security sanitization helper to prevent XSS & injection attacks
const sanitizeText = (val: string): string => {
  return val.replace(/[<>'"/\\;`]/g, '').trim().slice(0, 120);
};

export const AdmissionModal: React.FC<AdmissionModalProps> = ({
  open,
  onOpenChange,
  defaultBranch
}) => {
  const { t } = useLanguage();
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [branch, setBranch] = useState(defaultBranch || 'Computer Engineering');
  const [sscPercent, setSscPercent] = useState('');
  const [city, setCity] = useState('');
  const [botTrap, setBotTrap] = useState(''); // Honeypot anti-bot field
  const [errorMessage, setErrorMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // 1. Anti-Bot Honeypot check (if bot filled hidden field, reject silently)
    if (botTrap) {
      setSubmitted(true);
      return;
    }

    // 2. Throttling / Rate-limiting (min 3 seconds between submissions)
    const now = Date.now();
    if (now - lastSubmitTime < 3000) {
      setErrorMessage('Please wait a moment before submitting again.');
      return;
    }

    // 3. Sanitization
    const cleanName = sanitizeText(fullName);
    const cleanPhone = phone.replace(/\D/g, ''); // Extract only digits
    const cleanCity = sanitizeText(city);

    // 4. Strict Validation
    if (!cleanName || cleanName.length < 2) {
      setErrorMessage('Please enter a valid full name.');
      return;
    }

    // Indian 10-digit mobile validation (starting with 6-9)
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      setErrorMessage('Please enter a valid 10-digit mobile number (e.g. 9876543210).');
      return;
    }

    if (sscPercent) {
      const num = parseFloat(sscPercent);
      if (isNaN(num) || num < 35 || num > 100) {
        setErrorMessage('SSC Percentage must be between 35% and 100%.');
        return;
      }
    }

    setLastSubmitTime(now);
    setFullName(cleanName);
    setPhone(cleanPhone);
    setCity(cleanCity);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrorMessage('');
    setFullName('');
    setPhone('');
    setEmail('');
    setSscPercent('');
    setCity('');
    setBotTrap('');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {submitted ? (
        <div className="text-center py-8 space-y-4 animate-in fade-in zoom-in-95">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10 stroke-[2.2]" />
          </div>
          <h3 className="text-2xl font-bold font-heading text-[#0B2F52]">
            {t('admissionModal.successTitle')}
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            {t('admissionModal.successMessage')
              .replace('{name}', fullName)
              .replace('{phone}', phone)
              .replace('{branch}', branch)}
          </p>
          <div className="pt-4 flex justify-center">
            <Button variant="primary" onClick={handleReset}>
              {t('admissionModal.closeWindow')}
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#EA580C] uppercase block mb-1">
              {t('admissionModal.eyebrow')}
            </span>
            <h3 className="text-2xl font-bold font-heading text-[#0B2F52]">
              {t('admissionModal.title')}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              {t('header.instituteName')} · {SITE_INFO.authority}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-sm">
            {/* Honeypot hidden field for anti-bot spam defense */}
            <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
              <label htmlFor="website_hp">Leave this empty</label>
              <input
                id="website_hp"
                type="text"
                name="website_hp"
                value={botTrap}
                onChange={(e) => setBotTrap(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-medium animate-in fade-in">
                {errorMessage}
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                {t('admissionModal.fullName')}
              </label>
              <input
                type="text"
                required
                maxLength={100}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder={t('admissionModal.fullNamePlaceholder')}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B2F52] focus:border-transparent text-slate-900"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  {t('admissionModal.phone')}
                </label>
                <input
                  type="tel"
                  required
                  maxLength={14}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t('admissionModal.phonePlaceholder')}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B2F52] focus:border-transparent text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  {t('admissionModal.email')}
                </label>
                <input
                  type="email"
                  maxLength={80}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('admissionModal.emailPlaceholder')}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B2F52] focus:border-transparent text-slate-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  {t('admissionModal.department')}
                </label>
                <select
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B2F52] focus:border-transparent text-slate-900 bg-white"
                >
                  {DEPARTMENTS.map((d) => {
                    const dName = t(`departments.items.${d.id}.name`, d.name);
                    const dSeats = t(`departments.items.${d.id}.seats`, d.seats);
                    return (
                      <option key={d.id} value={dName}>
                        {dName} ({dSeats})
                      </option>
                    );
                  })}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  {t('admissionModal.sscPercentage')}
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="35"
                  max="100"
                  value={sscPercent}
                  onChange={(e) => setSscPercent(e.target.value)}
                  placeholder={t('admissionModal.sscPlaceholder')}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B2F52] focus:border-transparent text-slate-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                {t('admissionModal.city')}
              </label>
              <input
                type="text"
                maxLength={60}
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder={t('admissionModal.cityPlaceholder')}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B2F52] focus:border-transparent text-slate-900"
              />
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                variant="primary"
                className="w-full py-3 text-base font-semibold"
              >
                {t('admissionModal.submit')}
              </Button>
            </div>
          </form>

          <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500 font-mono">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#EA580C]" /> {SITE_INFO.phone}
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#EA580C]" /> {SITE_INFO.email}
            </span>
          </div>
        </div>
      )}
    </Dialog>
  );
};
