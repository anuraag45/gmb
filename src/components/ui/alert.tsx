import React from 'react';
import { cn } from '@/lib/utils';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'destructive' | 'info' | 'success';
}

export const Alert: React.FC<AlertProps> = ({
  className,
  variant = 'default',
  children,
  ...props
}) => {
  const variants = {
    default: 'bg-slate-50 text-slate-900 border-slate-200',
    destructive: 'bg-red-50 text-red-900 border-red-200',
    info: 'bg-blue-50 text-blue-900 border-blue-200',
    success: 'bg-emerald-50 text-emerald-900 border-emerald-200'
  };

  return (
    <div
      role="alert"
      className={cn('relative w-full rounded-lg border p-4 text-sm', variants[variant], className)}
      {...props}
    >
      {children}
    </div>
  );
};
