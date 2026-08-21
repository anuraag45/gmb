/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from 'react';
import en from '@/locales/en.json';
import gu from '@/locales/gu.json';

export type Language = 'en' | 'gu';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (path: string, fallback?: string) => string;
  getRaw: <T = unknown>(path: string) => T | undefined;
}

const translations: Record<Language, Record<string, unknown>> = {
  en,
  gu
};

const STORAGE_KEY = 'gmb_polytechnic_language';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
  const keys = path.split('.');
  let current: unknown = obj;
  for (const key of keys) {
    if (current && typeof current === 'object' && key in (current as Record<string, unknown>)) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return undefined;
    }
  }
  return current;
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'gu') {
        return saved;
      }
    } catch {
      // Ignore localStorage errors
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore localStorage errors
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'gu' : 'en');
  };

  useEffect(() => {
    // Dynamic html lang and font class
    document.documentElement.lang = language;
    if (language === 'gu') {
      document.documentElement.classList.add('lang-gu');
    } else {
      document.documentElement.classList.remove('lang-gu');
    }
  }, [language]);

  const t = (path: string, fallback?: string): string => {
    const currentDict = translations[language];
    const val = getNestedValue(currentDict, path);
    if (typeof val === 'string') {
      return val;
    }

    // Fallback to English
    if (language !== 'en') {
      const enVal = getNestedValue(translations.en, path);
      if (typeof enVal === 'string') {
        return enVal;
      }
    }

    return fallback ?? path;
  };

  const getRaw = <T = unknown,>(path: string): T | undefined => {
    const currentDict = translations[language];
    const val = getNestedValue(currentDict, path);
    if (val !== undefined) {
      return val as T;
    }

    // Fallback to English
    if (language !== 'en') {
      const enVal = getNestedValue(translations.en, path);
      if (enVal !== undefined) {
        return enVal as T;
      }
    }

    return undefined;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
        getRaw
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
