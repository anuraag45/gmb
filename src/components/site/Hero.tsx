import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
  const [isPaused, setIsPaused] = useState(false);
  const { t } = useLanguage();

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const title = t(`hero.slides.${activeSlide}.title`);
  const eyebrow = t(`hero.slides.${activeSlide}.eyebrow`);
  const description = t(`hero.slides.${activeSlide}.description`);
  const caption = t(`hero.slides.${activeSlide}.caption`);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % HERO_IMAGES.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  };

  // Auto rotate every 7 seconds, pauses when user is touching or interacting
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diffX = touchStartX.current - touchEndX.current;
      const minSwipeDistance = 45; // Minimum px to register swipe

      if (diffX > minSwipeDistance) {
        // Swiped left -> Next slide
        nextSlide();
      } else if (diffX < -minSwipeDistance) {
        // Swiped right -> Previous slide
        prevSlide();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
    // Resume auto-rotation after 3s
    setTimeout(() => setIsPaused(false), 3000);
  };

  return (
    <section 
      id="hero" 
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative min-h-[560px] sm:min-h-[600px] md:min-h-[640px] lg:min-h-[700px] flex flex-col justify-between text-white overflow-hidden border-b border-slate-800 select-none touch-pan-y"
    >
      {/* Full-Bleed Background Images with Smooth Transition */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {HERO_IMAGES.map((img, idx) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeSlide === idx ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={img}
              alt="GMB Polytechnic Campus"
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
        
        {/* Dark Navy / Slate Gradient Overlay (Mobile balanced, Desktop left-vignette) */}
        <div className="absolute inset-0 bg-slate-950/40 sm:bg-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06182B]/90 via-[#06182B]/45 to-black/25 sm:bg-gradient-to-r sm:from-[#06182B]/95 sm:via-[#06182B]/80 sm:to-[#06182B]/35" />
      </div>

      {/* Main Left Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-16 sm:pt-20 md:pt-28 pb-8 sm:pb-12 my-auto">
        <div className="max-w-3xl space-y-4 sm:space-y-6">
          
          {/* Eyebrow in uppercase orange/amber monospace font */}
          <div className="text-[11px] sm:text-xs md:text-sm font-bold font-mono tracking-widest text-[#EA580C] uppercase">
            {eyebrow}
          </div>

          {/* Large Bold Serif/Heading Title */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold font-heading text-white tracking-tight leading-[1.18] sm:leading-[1.15] drop-shadow-sm">
            {title}
          </h1>

          {/* Subtitle / Description */}
          <p className="text-xs sm:text-base md:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl drop-shadow-xs">
            {description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
            <Button
              variant="primary"
              size="lg"
              onClick={onApplyClick}
              className="bg-[#EA580C] hover:bg-[#c2410c] text-white shadow-lg hover:shadow-orange-500/25 px-6 py-3 rounded-md transition-all font-semibold text-sm sm:text-base border border-transparent cursor-pointer w-full sm:w-auto text-center justify-center"
            >
              {t('common.applyForAdmission', 'Apply for Admission 2026')}
            </Button>
            
            <a href="#departments" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white border-white/40 hover:border-white/60 px-6 py-3 rounded-md transition-all backdrop-blur-xs font-semibold text-sm sm:text-base cursor-pointer w-full text-center justify-center"
              >
                {t('common.exploreDepartments', 'Explore Departments')}
              </Button>
            </a>
          </div>

        </div>
      </div>

      {/* Swipe Chevron Buttons (Mobile & Desktop) */}
      <div className="absolute inset-y-0 left-2 sm:left-4 z-20 flex items-center pointer-events-none">
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="pointer-events-auto p-2 rounded-full bg-black/25 hover:bg-black/50 text-white/80 hover:text-white backdrop-blur-xs transition-all cursor-pointer hidden sm:flex items-center justify-center"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>

      <div className="absolute inset-y-0 right-2 sm:right-4 z-20 flex items-center pointer-events-none">
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="pointer-events-auto p-2 rounded-full bg-black/25 hover:bg-black/50 text-white/80 hover:text-white backdrop-blur-xs transition-all cursor-pointer hidden sm:flex items-center justify-center"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Hero Bottom Bar: Caption on left, Carousel Indicators on right */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pb-6 sm:pb-8 pt-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
          <div className="text-slate-300 tracking-wide drop-shadow-xs flex items-center justify-between sm:justify-start gap-2">
            <span>{caption}</span>
            <span className="sm:hidden text-[10px] text-orange-300 bg-black/30 px-2 py-0.5 rounded-full border border-white/10">
              Swipe ↔
            </span>
          </div>

          {/* Carousel Slide Indicators */}
          <div className="flex items-center gap-2 self-center sm:self-auto">
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
