import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const textareaVariants = cva(
  'w-full bg-surface border transition-all duration-200 outline-none placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 resize-none',
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

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}

export function Textarea({
  className,
  variant,
  radius,
  ...props
}: TextareaProps) {
  return (
    <textarea
      className={cn(
        textareaVariants({ variant, radius, className }),
        'px-8 py-4 text-on-surface'
      )}
      {...props}
    />
  );
}

export { textareaVariants };
