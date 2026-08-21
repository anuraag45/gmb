import * as React from 'react';
import { cn } from '@/lib/utils';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onCheckedChange?: (checked: boolean) => void;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, checked, onChange, onCheckedChange, ...props }, ref) => {
    return (
      <div className="relative inline-flex items-center">
        <input
          type="checkbox"
          ref={ref}
          checked={checked}
          onChange={(e) => {
            onChange?.(e);
            onCheckedChange?.(e.target.checked);
          }}
          className={cn(
            'peer h-4 w-4 shrink-0 rounded border border-slate-300 text-[#EA580C] focus:ring-2 focus:ring-[#EA580C] cursor-pointer',
            className
          )}
          {...props}
        />
      </div>
    );
  }
);
Checkbox.displayName = 'Checkbox';
