import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

interface HeroProps {
  onApplyClick: () => void;
}

const HERO_IMAGES = [
  '/images/gmb/campus-admin.jpg',
  '/images/gmb/campus-workshop.jpg',
  '/images/gmb/campus-main.jpg'
];

export const Hero: React.FC<HeroProps> = ({ onApplyClick }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const { t } = useLanguage();

  const title = t(`hero.slides.${activeSlide}.title`);
  const eyebrow = t(`hero.slides.${activeSlide}.eyebrow`);
  const description = t(`hero.slides.${activeSlide}.description`);
  const caption = t(`hero.slides.${activeSlide}.caption`);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-[580px] md:min-h-[640px] lg:min-h-[700px] flex flex-col justify-between text-white overflow-hidden border-b border-slate-800">
      {/* Full-Bleed Background Images with Smooth Transition */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((img, idx) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeSlide === idx ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={img}
              alt="GMB Polytechnic Campus"
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
        
        {/* Dark Navy / Slate Gradient Overlay matching the user reference image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06182B]/95 via-[#06182B]/80 to-[#06182B]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06182B]/80 via-transparent to-black/25" />
      </div>

      {/* Main Left Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-20 md:pt-28 pb-12 my-auto">
        <div className="max-w-3xl space-y-6">
          
          {/* Eyebrow in uppercase orange/amber monospace font */}
          <div className="text-xs sm:text-sm font-bold font-mono tracking-widest text-[#EA580C] uppercase">
            {eyebrow}
          </div>

          {/* Large Bold Serif/Heading Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold font-heading text-white tracking-tight leading-[1.15] drop-shadow-sm">
            {title}
          </h1>

          {/* Subtitle / Description */}
          <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl drop-shadow-xs">
            {description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button
              variant="primary"
              size="lg"
              onClick={onApplyClick}
              className="bg-[#EA580C] hover:bg-[#c2410c] text-white shadow-lg hover:shadow-orange-500/25 px-6 py-3 rounded-md transition-all font-semibold text-sm sm:text-base border border-transparent cursor-pointer"
            >
              {t('common.applyForAdmission', 'Apply for Admission 2026')}
            </Button>
            
            <a href="#departments">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white border-white/40 hover:border-white/60 px-6 py-3 rounded-md transition-all backdrop-blur-xs font-semibold text-sm sm:text-base cursor-pointer"
              >
                {t('common.exploreDepartments', 'Explore Departments')}
              </Button>
            </a>
          </div>

        </div>
      </div>

      {/* Hero Bottom Bar: Caption on left, Carousel Indicators on right */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pb-8 pt-4">
        <div className="flex items-center justify-between gap-4 text-xs font-mono">
          <div className="text-slate-300 tracking-wide drop-shadow-xs">
            {caption}
          </div>

          {/* Carousel Slide Indicators */}
          <div className="flex items-center gap-2">
            {HERO_IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                aria-label={`Slide ${index + 1}`}
                className={`transition-all duration-300 h-1.5 cursor-pointer rounded-full ${
                  activeSlide === index
                    ? 'w-7 bg-[#EA580C]'
                    : 'w-2 bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};
