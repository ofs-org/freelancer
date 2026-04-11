import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center justify-center font-bold uppercase tracking-wider',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-on-primary-container',
        secondary: 'bg-secondary-container text-on-secondary-container',
        tertiary: 'bg-tertiary-container text-on-tertiary-container',
        error: 'bg-error-container text-on-error-container',
        neutral:
          'bg-surface-container text-on-surface-variant border border-outline-variant',
        'dark-pill': 'bg-[#1a1c1c] text-primary',
        'outline-primary':
          'bg-transparent text-surface-tint border border-primary',
      },
      size: {
        sm: 'px-2 py-0.5 text-[10px]',
        md: 'px-3 py-1 text-xs',
        lg: 'px-4 py-1.5 text-sm',
      },
      radius: {
        default: 'rounded',
        sm: 'rounded-sm',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      radius: 'full',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({
  className,
  variant,
  size,
  radius,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(badgeVariants({ variant, size, radius, className }))}
      {...props}
    />
  );
}

export { badgeVariants };
