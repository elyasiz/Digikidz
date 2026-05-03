import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'orange' | 'white';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    const variants = {
      primary: 'bg-brand-blue text-white hover:bg-blue-600',
      secondary: 'bg-brand-yellow text-black hover:bg-yellow-400',
      orange: 'bg-brand-orange text-white hover:bg-orange-600',
      white: 'bg-white text-black hover:bg-gray-50',
      outline: 'bg-transparent text-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'nb-button inline-flex items-center justify-center gap-2',
          variants[variant as keyof typeof variants],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
