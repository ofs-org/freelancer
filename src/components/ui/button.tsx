import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from 'radix-ui';
import * as React from 'react';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2 font-bold whitespace-nowrap transition-all duration-300 outline-none select-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-on-primary-container hover:shadow-[0_0_50px_rgba(208,243,54,0.4)] hover:scale-105 active:scale-95',
        secondary:
          'border border-outline-variant bg-transparent text-on-surface hover:bg-surface-container active:scale-95',
        ghost:
          'bg-transparent text-on-surface hover:bg-surface-variant/50 active:scale-95',
        glass:
          'glass-button text-white border border-white/20 hover:bg-white/20 active:scale-95',
        destructive:
          'bg-error text-on-error hover:bg-error/90 focus-visible:ring-error/20',
        outline:
          'border border-outline-variant bg-transparent hover:bg-surface-container active:scale-95',
      },
      size: {
        sm: 'h-7 px-3.5 text-xs rounded-md',
        md: 'h-10 px-5 text-sm rounded-lg',
        lg: 'h-11 px-7 text-base rounded-lg',
        xl: 'h-12 px-12 text-lg rounded-xl',
        'icon-sm': 'size-7 rounded-md',
        icon: 'size-9 rounded-lg',
        'icon-lg': 'size-11 rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

interface ButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

function Button({
  className,
  variant = 'primary',
  size = 'md',
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot.Root : 'button';

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
