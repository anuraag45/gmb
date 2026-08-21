import React from 'react';
import { cn } from '@/lib/utils';

interface GmbLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  variant?: 'light' | 'dark';
}

export const GmbLogo: React.FC<GmbLogoProps> = ({
  className = '',
  size = 'md',
  showText = false,
  variant = 'light'
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-14 h-14',
    xl: 'w-16 h-16'
  }[size];

  return (
    <div className={cn('flex items-center gap-3 select-none', className)}>
      <div className={cn(sizeClasses, 'shrink-0 rounded-lg bg-white p-1 shadow-xs border border-slate-200/80 flex items-center justify-center')}>
        <img
          src="/images/gmb-official-logo.png"
          alt="GMB Polytechnic, Rajula Official Logo"
          className="w-full h-full object-contain"
        />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span
            className={cn(
              'font-heading font-bold tracking-tight leading-tight',
              size === 'sm' && 'text-base',
              size === 'md' && 'text-lg sm:text-xl',
              size === 'lg' && 'text-xl sm:text-2xl',
              size === 'xl' && 'text-2xl sm:text-3xl',
              variant === 'dark' ? 'text-white' : 'text-[#0B2F52]'
            )}
          >
            GMB Polytechnic, Rajula
          </span>
          <span
            className={cn(
              'text-[10.5px] font-mono font-medium tracking-wider uppercase',
              variant === 'dark' ? 'text-slate-400' : 'text-slate-500'
            )}
          >
            Gujarat Maritime Board · Govt. of Gujarat
          </span>
        </div>
      )}
    </div>
  );
};
