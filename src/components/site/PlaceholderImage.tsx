/* eslint-disable react-refresh/only-export-components */
import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export const REAL_IMAGES: Record<string, string> = {
  'CAMPUS-EXTERIOR.JPG': '/images/gmb/campus-admin.jpg',
  'WORKSHOP-WING.JPG': '/images/gmb/campus-main.jpg',
  'MARITIME-BELT.JPG': '/images/gmb/campus-workshop.jpg',
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
  'CAMPUS-CORRIDOR.JPG': '/images/gmb/campus-corridor.jpg',
  'CAMPUS-WORKSHOP.JPG': '/images/gmb/campus-workshop.jpg',
  'ANNUAL-TECH-FEST.JPG': '/images/gmb/dept-computer-clean.jpg',
  'MACHINE-SHOP-PRACTICAL.JPG': '/images/gmb/dept-mechanical-clean.jpg',
  'INDEPENDENCE-DAY-PARADE.JPG': '/images/gmb/campus-courtyard-clean.jpg',
  'INTER-COLLEGE-CRICKET.JPG': '/images/gmb/campus-main.jpg',
  'INDUSTRIAL-VISIT-PIPAVAV.JPG': '/images/gmb/campus-workshop.jpg',
  'LIBRARY-READING-HALL.JPG': '/images/gmb/campus-wing.jpg',
  'CAMPUS-LOCATION-MAP.JPG': '/images/gmb/campus-main.jpg',
  'PROJECT-WEATHER-STATION.JPG': '/images/gmb/dept-computer-lab2-clean.jpg',
  'PROJECT-CNC-LATHE.JPG': '/images/gmb/dept-mechanical-clean.jpg',
  'PROJECT-SOLAR-BUOY.JPG': '/images/gmb/dept-civil-gmaps.jpg',
  'PROJECT-SMART-METER.JPG': '/images/gmb/dept-electrical-gmaps.jpg',
  'PROJECT-DEFAULT.JPG': '/images/gmb/campus-workshop.jpg',
  'ALUMNI-PIPAVAV.JPG': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
  'ALUMNI-GEC.JPG': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
  'ALUMNI-GETCO.JPG': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
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
  aspectRatio = 'auto',
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

  const imageSrc = src || REAL_IMAGES[label] || '/images/gmb/campus-main.jpg';

  if (!hasError) {
    return (
      <div
        onClick={onClick}
        className={cn(
          'relative overflow-hidden bg-slate-900 flex items-center justify-center select-none w-full h-full',
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
            'absolute inset-0 w-full h-full object-cover transition-all duration-500',
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          )}
        />
        {!isLoaded && (
          <div className="absolute inset-0 bg-slate-800/80 animate-pulse flex items-center justify-center">
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
        'relative overflow-hidden bg-linear-to-br from-[#06182B] to-[#0B2F52] flex items-center justify-center select-none w-full h-full',
        aspectClasses,
        onClick ? 'cursor-pointer' : '',
        className
      )}
    >
      <img
        src="/images/gmb/campus-main.jpg"
        alt="GMB Polytechnic Campus"
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />
    </div>
  );
};
