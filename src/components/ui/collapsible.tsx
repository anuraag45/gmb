import React, { useState } from 'react';
import { cn } from '@/lib/utils';

export interface CollapsibleProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
}

export const Collapsible: React.FC<CollapsibleProps> = ({
  open: controlledOpen,
  onOpenChange,
  defaultOpen = false,
  className,
  children,
  ...props
}) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;

  const toggle = () => {
    if (!isControlled) {
      setUncontrolledOpen(!open);
    }
    onOpenChange?.(!open);
  };

  return (
    <div className={cn('w-full', className)} {...props}>
      {typeof children === 'function' ? (children as any)({ open, toggle }) : children}
    </div>
  );
};
