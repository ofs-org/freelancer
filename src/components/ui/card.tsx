import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const cardVariants = cva('', {
  variants: {
    variant: {
      default: 'bg-surface-container-lowest border border-outline-variant/10',
      elevated:
        'bg-surface-container-lowest shadow-medium border border-outline-variant/10',
      glass: 'glass-panel',
      'primary-container': 'bg-primary',
    },
    radius: {
      default: 'roundedDEFAULT',
      sm: 'rounded',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      full: 'rounded-full',
    },
  },
  defaultVariants: {
    variant: 'default',
    radius: 'default',
  },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export function Card({ className, variant, radius, ...props }: CardProps) {
  return (
    <div
      className={cn(cardVariants({ variant, radius, className }))}
      {...props}
    />
  );
}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardHeader({ className, ...props }: CardHeaderProps) {
  return <div className={cn('p-8 pb-0', className)} {...props} />;
}

export interface CardTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  variant?: 'default' | 'primary';
}

export function CardTitle({
  className,
  variant = 'default',
  ...props
}: CardTitleProps) {
  return (
    <h3
      className={cn(
        'text-xl font-bold mb-2',
        variant === 'primary' ? 'text-on-primary-container' : 'text-on-surface',
        className
      )}
      {...props}
    />
  );
}

export interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: 'default' | 'primary';
}

export function CardDescription({
  className,
  variant = 'default',
  ...props
}: CardDescriptionProps) {
  return (
    <p
      className={cn(
        'text-sm',
        variant === 'primary'
          ? 'text-on-primary-container/80'
          : 'text-on-surface-variant',
        className
      )}
      {...props}
    />
  );
}

export interface CardContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function CardContent({ className, ...props }: CardContentProps) {
  return <div className={cn('p-8', className)} {...props} />;
}

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardFooter({ className, ...props }: CardFooterProps) {
  return (
    <div
      className={cn('p-8 pt-0 flex items-center gap-4', className)}
      {...props}
    />
  );
}

export { cardVariants };
