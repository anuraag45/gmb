import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'navy' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

    const variants = {
      primary: 'bg-[#EA580C] hover:bg-[#D9480F] text-white shadow-sm focus-visible:ring-[#EA580C]',
      secondary: 'bg-[#0B2F52] hover:bg-[#08233E] text-white focus-visible:ring-[#0B2F52]',
      navy: 'bg-[#0F3864] hover:bg-[#0B2F52] text-white border border-[#1E4D7B]',
      outline: 'border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 focus-visible:ring-slate-400',
      ghost: 'bg-transparent hover:bg-slate-100 text-slate-700',
      link: 'text-[#EA580C] hover:underline underline-offset-4 p-0 h-auto'
    };

    const sizes = {
      sm: 'text-xs px-3 py-1.5 rounded-md gap-1.5',
      md: 'text-sm px-4 py-2 rounded-md gap-2',
      lg: 'text-base px-6 py-3 rounded-md gap-2.5 font-semibold',
      icon: 'h-9 w-9 rounded-md p-0'
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';
