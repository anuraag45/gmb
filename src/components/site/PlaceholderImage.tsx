/* eslint-disable react-refresh/only-export-components */
import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export const REAL_IMAGES: Record<string, string> = {
  'CAMPUS-EXTERIOR.JPG': '/images/gmb/campus-admin.jpg',
  'WORKSHOP-WING.JPG': '/images/gmb/campus-main.jpg',
  'MARITIME-BELT.JPG': 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
  'PRINCIPAL-PORTRAIT.JPG': 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
  'PORTRAIT.JPG': 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
  'DEPT-COMPUTER-LAB.JPG': '/images/gmb/dept-computer-clean.jpg',
  'DEPT-COMPUTER-LAB2.JPG': '/images/gmb/dept-computer-lab2-clean.jpg',
  'DEPT-MECHANICAL-WORKSHOP.JPG': '/images/gmb/dept-mechanical-clean.jpg',
  'DEPT-CIVIL-SURVEY.JPG': '/images/gmb/dept-civil-gmaps.jpg',
  'DEPT-ELECTRICAL-LAB.JPG': '/images/gmb/dept-electrical-gmaps.jpg',
  'CAMPUS-COURTYARD.JPG': '/images/gmb/campus-courtyard-clean.jpg',
  'CAMPUS-MAIN.JPG': '/images/gmb/campus-main.jpg',
  'CAMPUS-ADMIN.JPG': '/images/gmb/campus-admin.jpg',
  'CAMPUS-WING.JPG': '/images/gmb/campus-wing.jpg',
  'CAMPUS-GMAPS.JPG': '/images/gmb/campus-gmaps.jpg',
  'ANNUAL-TECH-FEST.JPG': '/images/gmb/dept-computer-clean.jpg',
  'MACHINE-SHOP-PRACTICAL.JPG': '/images/gmb/dept-mechanical-clean.jpg',
  'INDEPENDENCE-DAY-PARADE.JPG': '/images/gmb/campus-courtyard-clean.jpg',
  'INTER-COLLEGE-CRICKET.JPG': '/images/gmb/campus-main.jpg',
  'INDUSTRIAL-VISIT-PIPAVAV.JPG': 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80',
  'LIBRARY-READING-HALL.JPG': '/images/gmb/campus-wing.jpg',
  'CAMPUS-LOCATION-MAP.JPG': '/images/gmb/campus-main.jpg'
};

interface PlaceholderImageProps {
  label: string;
  src?: string;
  alt?: string;
  className?: string;
  variant?: 'light' | 'dark';
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape' | 'wide' | 'auto';
  showIcon?: boolean;
  onClick?: () => void;
}

export const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  label,
  src,
  alt,
  className = '',
  variant = 'light',
  aspectRatio = 'auto',
  showIcon = true,
  onClick
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
    wide: 'aspect-[16/9]',
    auto: ''
  }[aspectRatio];

  const imageSrc = src || REAL_IMAGES[label];
  const isDark = variant === 'dark';

  if (imageSrc && !hasError) {
    return (
      <div
        onClick={onClick}
        className={cn(
          'relative overflow-hidden bg-slate-800 flex items-center justify-center select-none',
          aspectClasses,
          onClick ? 'cursor-pointer' : '',
          className
        )}
      >
        <img
          src={imageSrc}
          alt={alt || label}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={cn(
            'w-full h-full object-cover transition-all duration-500',
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          )}
        />
        {!isLoaded && (
          <div className="absolute inset-0 bg-slate-800 animate-pulse flex items-center justify-center">
            <ImageIcon className="w-6 h-6 text-slate-500" />
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className={cn(
        'relative overflow-hidden flex flex-col items-center justify-center select-none transition-all duration-200',
        isDark ? 'blueprint-hatch-dark text-white/70' : 'blueprint-hatch text-slate-500',
        aspectClasses,
        onClick ? 'cursor-pointer hover:opacity-90' : '',
        className
      )}
    >
      <div className="relative z-10 flex flex-col items-center justify-center p-4 text-center">
        {showIcon && (
          <div className={cn(
            'p-2 rounded-md mb-2 flex items-center justify-center',
            isDark ? 'bg-white/10 text-white/80' : 'bg-slate-200/70 text-slate-600'
          )}>
            <ImageIcon className="w-5 h-5 stroke-[1.5]" />
          </div>
        )}
        <span className={cn(
          'text-[11px] font-mono tracking-widest uppercase font-semibold px-2 py-0.5 rounded',
          isDark 
            ? 'bg-slate-900/60 text-slate-200 border border-white/10' 
            : 'bg-white/80 text-slate-700 border border-slate-300/60 shadow-xs'
        )}>
          {label}
        </span>
      </div>
    </div>
  );
};
