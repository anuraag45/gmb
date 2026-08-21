import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PlaceholderImage } from '@/components/site/PlaceholderImage';
import { useLanguage } from '@/context/LanguageContext';

interface HeroProps {
  onApplyClick: () => void;
}

const HERO_IMAGES = [
  'CAMPUS-ADMIN.JPG',
  'CAMPUS-MAIN.JPG',
  'MARITIME-BELT.JPG'
];

export const Hero: React.FC<HeroProps> = ({ onApplyClick }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const { t } = useLanguage();

  const title = t(`hero.slides.${activeSlide}.title`);
  const eyebrow = t(`hero.slides.${activeSlide}.eyebrow`);
  const description = t(`hero.slides.${activeSlide}.description`);
  const caption = t(`hero.slides.${activeSlide}.caption`);
  const imageKey = HERO_IMAGES[activeSlide];

  return (
    <section id="hero" className="relative bg-navy-stripes text-white overflow-hidden py-16 md:py-24 border-b border-slate-800">
      
      {/* Background radial glow & blueprint elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[440px]">
          
          {/* Left Text Content */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Session Tag */}
            <div className="inline-flex items-center gap-2 bg-[#EA580C]/20 border border-[#EA580C]/40 text-[#EA580C] px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#EA580C] animate-ping inline-block" />
              <span>{eyebrow}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight leading-tight md:leading-[1.15]">
              {title}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              {description}
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={onApplyClick}
                className="bg-[#EA580C] hover:bg-[#c2410c] text-white shadow-lg hover:shadow-orange-500/25 px-6 py-3 rounded-md transition-all font-semibold"
              >
                {t('hero.applyNow')}
              </Button>
              
              <a href="#departments">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent hover:bg-white/10 text-white border-white/20 hover:border-white/40 px-6 py-3 rounded-md transition-all"
                >
                  {t('common.exploreDepartments')}
                </Button>
              </a>
            </div>
          </div>

          {/* Right Campus Photography */}
          <div className="lg:col-span-4 flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-sm rounded-lg overflow-hidden border border-white/15 bg-white/5 backdrop-blur-xs p-2 shadow-2xl">
              <PlaceholderImage
                label={imageKey}
                variant="dark"
                className="h-64 sm:h-72 w-full rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Hero Footer Bar: Caption & Carousel Indicators */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
          <div className="text-slate-400 font-mono tracking-wide">
            {caption}
          </div>

          {/* Carousel Slide Indicators */}
          <div className="flex items-center gap-2">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                aria-label={`Slide ${index + 1}`}
                className={`transition-all duration-300 rounded-full h-1.5 cursor-pointer ${
                  activeSlide === index
                    ? 'w-7 bg-[#EA580C]'
                    : 'w-4 bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
