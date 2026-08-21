import React from 'react';
import { cn } from '@/lib/utils';

export interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  ratio?: number;
}

export const AspectRatio: React.FC<AspectRatioProps> = ({
  ratio = 16 / 9,
  className,
  children,
  style,
  ...props
}) => {
  return (
    <div
      style={{ paddingBottom: `${(1 / ratio) * 100}%`, ...style }}
      className={cn('relative w-full overflow-hidden', className)}
      {...props}
    >
      <div className="absolute inset-0 w-full h-full">{children}</div>
    </div>
  );
};
