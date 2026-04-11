import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from 'radix-ui';
import * as React from 'react';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'group/badge inline-flex shrink-0 items-center justify-center gap-1 font-bold whitespace-nowrap transition-all duration-200 outline-none select-none [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-on-primary-container',
        secondary: 'bg-secondary-container text-on-secondary-container',
        tertiary: 'bg-tertiary-container text-on-tertiary-container',
        error: 'bg-error-container text-on-error-container',
        neutral:
          'bg-surface-container text-on-surface-variant border border-outline-variant',
        'dark-pill': 'bg-on-surface text-primary rounded-full',
        'outline-primary':
          'border border-primary text-surface-tint bg-transparent',
      },
      size: {
        sm: 'h-5 px-2 py-0.5 text-[10px] rounded',
        md: 'h-6 px-2.5 py-0.5 text-xs rounded-md',
        lg: 'h-7 px-3 py-1 text-sm rounded-md',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

interface BadgeProps
  extends React.ComponentProps<'span'>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
}

function Badge({
  className,
  variant = 'primary',
  size = 'md',
  asChild = false,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot.Root : 'span';

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      data-size={size}
      className={cn(badgeVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
