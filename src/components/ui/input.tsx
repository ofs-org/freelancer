import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const inputVariants = cva(
  'w-full bg-surface border transition-all duration-200 outline-none placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2',
  {
    variants: {
      variant: {
        default:
          'border-outline-variant focus:border-primary focus:ring-primary/50',
        error: 'border-error focus:border-error focus:ring-error/20',
        disabled: 'border-outline-variant/30 opacity-50 cursor-not-allowed',
      },
      radius: {
        default: 'roundedDEFAULT',
        sm: 'rounded',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      radius: 'default',
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

export function Input({ className, variant, radius, ...props }: InputProps) {
  return (
    <input
      className={cn(
        inputVariants({ variant, radius, className }),
        'px-8 py-5 text-on-surface'
      )}
      {...props}
    />
  );
}

export { inputVariants };
