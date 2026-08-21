import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { SITE_INFO, AFFILIATIONS, DEPARTMENTS } from '@/data/siteData';
import { useLanguage } from '@/context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { name: t('header.nav.home'), href: '#hero' },
    { name: t('header.nav.about'), href: '#why-us' },
    { name: t('header.nav.admissions'), href: '#admissions' },
    { name: t('header.nav.placements'), href: '#stats' },
    { name: t('header.nav.gallery'), href: '#gallery' },
    { name: t('header.nav.contact'), href: '#contact' }
  ];

  return (
    <footer id="contact" className="bg-[#06182B] text-slate-300 pt-16 pb-12 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14">
          
          {/* Column 1: Brand & Overview (Spans 4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white p-1 flex items-center justify-center shrink-0 shadow-sm">
                <img
                  src="/images/gmb-official-logo.png"
                  alt="GMB Polytechnic Official Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-heading text-lg font-bold text-white tracking-tight">
                {t('header.instituteName')}
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              {t('footer.about')}
            </p>
          </div>

          {/* Column 2: Quick Links (Spans 2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="relative inline-block text-slate-400 hover:text-white transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 hover:after:w-full after:bg-[#EA580C] after:transition-all after:duration-200 after:ease-out"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Departments (Spans 3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase">
              {t('footer.departments')}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {DEPARTMENTS.map((dept) => (
                <li key={dept.id}>
                  <a
                    href="#departments"
                    className="relative inline-block text-slate-400 hover:text-white transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 hover:after:w-full after:bg-[#EA580C] after:transition-all after:duration-200 after:ease-out"
                  >
                    {t(`departments.items.${dept.id}.name`, dept.name)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Map (Spans 3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase">
              {t('footer.contact')}
            </h4>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                <span>{SITE_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#EA580C] shrink-0" />
                <a href={`tel:${SITE_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {SITE_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#EA580C] shrink-0" />
                <a href={`mailto:${SITE_INFO.email}`} className="hover:text-white transition-colors">
                  {SITE_INFO.email}
                </a>
              </div>
            </div>

            {/* Live Interactive Google Map */}
            <div className="pt-2">
              <div className="rounded-lg overflow-hidden border border-white/15 bg-white/5 relative group">
                <iframe
                  title="GMB Polytechnic Rajula Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.895085959141!2d71.45010777598812!3d21.01224098063462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be2458cbb7c7577%3A0x8c2c9f5af4762ed1!2sGMB%20Polytechic%2CRajula!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-32 border-0 filter contrast-125 opacity-90 group-hover:opacity-100 transition-all duration-300"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href="https://www.google.com/maps/place/GMB+Polytechic,Rajula/@21.0122409,71.4526827,17z/data=!4m6!3m5!1s0x3be2458cbb7c7577:0x8c2c9f5af4762ed1!8m2!3d21.0122409!4d71.4526827!16s%2Fg%2F11gb409j4t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-1.5 right-1.5 bg-[#0B2F52]/90 hover:bg-[#EA580C] text-white text-[10px] font-mono font-medium px-2 py-0.5 rounded shadow-sm flex items-center gap-1 transition-colors z-10"
                >
                  <span>Google Maps ↗</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Affiliations & Approvals Section */}
        <div className="py-8 border-t border-slate-800 space-y-4">
          <h4 className="text-xs font-mono font-semibold tracking-widest text-slate-400 uppercase">
            {t('footer.affiliations')}
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {AFFILIATIONS.map((aff) => (
              <div
                key={aff.name}
                className="px-4 py-2.5 rounded border border-slate-800 bg-slate-900/40 text-center flex items-center justify-center"
              >
                <span className="text-xs font-mono font-medium text-slate-300 tracking-wider">
                  {aff.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            {t('footer.copyright')}
          </div>
          <div>
            {t('footer.subCopyright')}
          </div>
        </div>

      </div>
    </footer>
  );
};
