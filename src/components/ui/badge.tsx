import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'orange' | 'navy' | 'outline' | 'subtle';
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'default',
  children,
  ...props
}) => {
  const variants = {
    default: 'bg-slate-100 text-slate-800 border border-slate-200',
    orange: 'bg-orange-50 text-orange-700 border border-orange-200',
    navy: 'bg-[#0B2F52]/10 text-[#0B2F52] border border-[#0B2F52]/20',
    outline: 'border border-slate-300 text-slate-700',
    subtle: 'bg-slate-100/80 text-slate-600'
  };

  return (
    <div
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide transition-colors',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
