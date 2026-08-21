import React, { useState } from 'react';
import { Phone, Mail, Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SITE_INFO } from '@/data/siteData';
import { useLanguage } from '@/context/LanguageContext';
import { LanguageSwitcher } from '@/components/site/LanguageSwitcher';

interface HeaderProps {
  onApplyClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onApplyClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { name: t('header.nav.home'), href: '#hero' },
    { name: t('header.nav.about'), href: '#why-us' },
    { name: t('header.nav.departments'), href: '#departments' },
    { name: t('header.nav.admissions'), href: '#admissions' },
    { name: t('header.nav.principal'), href: '#principal' },
    { name: t('header.nav.placements'), href: '#stats' },
    { name: t('header.nav.gallery'), href: '#gallery' },
    { name: t('header.nav.contact'), href: '#contact' }
  ];

  return (
    <header className="w-full sticky top-0 z-40 bg-white shadow-xs">
      {/* Top Notification / Contact Bar */}
      <div className="bg-[#06182B] text-slate-200 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium tracking-wide text-slate-300">
              {t('topBar.admissionBadge')}
            </span>
          </div>
          
          <div className="flex items-center gap-4 sm:gap-6 text-slate-300">
            <a 
              href={`tel:${SITE_INFO.phone.replace(/\s+/g, '')}`} 
              className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              <span>{SITE_INFO.phone}</span>
            </a>
            <a 
              href={`mailto:${SITE_INFO.email}`} 
              className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>{SITE_INFO.email}</span>
            </a>
            
            {/* Topbar compact switcher */}
            <div className="flex sm:hidden">
              <LanguageSwitcher variant="topbar" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Institute Title */}
          <a href="#hero" className="flex items-center gap-3.5 group">
            <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 shadow-xs p-1 flex items-center justify-center shrink-0 group-hover:border-[#0B2F52]/40 transition-colors">
              <img
                src="/images/gmb-official-logo.png"
                alt="GMB Polytechnic Official Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg sm:text-2xl font-bold text-[#0B2F52] tracking-tight leading-tight">
                {t('header.instituteName')}
              </span>
              <span className="text-[11px] font-mono font-medium tracking-wider text-slate-500 uppercase">
                {t('header.parentOrg')}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navItems.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="relative py-2 text-sm font-medium text-slate-700 hover:text-[#0B2F52] transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2.5px] after:w-0 hover:after:w-full after:bg-[#EA580C] after:transition-all after:duration-300 after:ease-out after:rounded-full"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA & Segmented Language Switcher */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher variant="navbar" />
            <Button 
              onClick={onApplyClick}
              variant="primary" 
              size="md"
              className="font-semibold shadow-sm hover:shadow transition-shadow"
            >
              {t('common.applyNow')}
            </Button>
          </div>

          {/* Mobile Menu Button & Small Apply */}
          <div className="flex lg:hidden items-center gap-2">
            <LanguageSwitcher variant="navbar" className="scale-90" />
            <Button 
              onClick={onApplyClick}
              variant="primary" 
              size="sm"
              className="sm:hidden font-medium text-xs px-2.5"
            >
              {t('common.applyNow')}
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:bg-slate-100 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <LanguageSwitcher variant="mobile" />
          
          <div className="flex flex-col space-y-1 pt-1">
            {navItems.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-[#0B2F52]"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-slate-100">
            <Button 
              onClick={() => {
                setMobileMenuOpen(false);
                onApplyClick();
              }}
              variant="primary" 
              className="w-full flex items-center justify-center gap-2"
            >
              <span>{t('common.applyForAdmission')}</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
