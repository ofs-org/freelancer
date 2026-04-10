import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-3 font-bold tracking-tight transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-40 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-container text-on-primary-container hover:scale-105 hover:shadow-primary active:scale-95',
        secondary:
          'bg-transparent text-on-surface border border-outline-variant hover:bg-surface-container-low hover:scale-105 active:scale-95',
        ghost:
          'bg-transparent text-on-surface hover:bg-surface-container-low hover:scale-105 active:scale-95',
        glass: 'glass-button text-white hover:bg-white/20 active:scale-95',
      },
      size: {
        sm: 'px-3.5 py-1.5 text-xs rounded-md',
        md: 'px-5 py-2.5 text-sm rounded-md',
        lg: 'px-7 py-3.5 text-base rounded-md',
        xl: 'px-12 py-5 text-lg rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { buttonVariants };
