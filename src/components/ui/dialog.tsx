'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '@/lib/utils';

const dialogOverlayVariants = cva(
  'fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity',
  {
    variants: {
      state: {
        entering: 'opacity-0',
        entered: 'opacity-100',
        exiting: 'opacity-100',
        exited: 'opacity-0',
      },
    },
    defaultVariants: {
      state: 'entered',
    },
  }
);

const dialogContentVariants = cva(
  'fixed z-50 gap-4 bg-surface-container-lowest p-8 shadow-medium border border-outline-variant/10 transition-all',
  {
    variants: {
      variant: {
        default: 'rounded-md',
        glass:
          'glass-panel bg-inverse-surface/90 backdrop-blur-xl border-white/10',
      },
      size: {
        sm: 'max-w-sm w-full',
        md: 'max-w-md w-full',
        lg: 'max-w-lg w-full',
        xl: 'max-w-xl w-full',
        full: 'max-w-4xl w-full',
      },
      state: {
        entering: 'opacity-0 scale-95 translate-y-4',
        entered: 'opacity-100 scale-100 translate-y-0',
        exiting: 'opacity-100 scale-100 translate-y-0',
        exited: 'opacity-0 scale-95 translate-y-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      state: 'entered',
    },
  }
);

export interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export interface DialogContentProps {
  showClose?: boolean;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  open?: boolean;
}

export interface DialogTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export interface DialogTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

export interface DialogDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export interface DialogFooterProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function Dialog({ open, onOpenChange, children }: DialogProps) {
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        onOpenChange(false);
      }
    };

    if (open) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [open, onOpenChange]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(
            child as React.ReactElement<{
              open?: boolean;
              onOpenChange?: (open: boolean) => void;
            }>,
            {
              open,
              onOpenChange,
            }
          );
        }
        return child;
      })}
    </>
  );
}

function DialogOverlay({
  state,
}: {
  state: 'entering' | 'entered' | 'exiting' | 'exited';
}) {
  if (state === 'exited') return null;

  return <div className={dialogOverlayVariants({ state })} />;
}

function DialogContainer({
  className,
  variant,
  size,
  state,
  showClose,
  children,
  onClose,
}: {
  className?: string;
  variant?: 'default' | 'glass';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  state: 'entering' | 'entered' | 'exiting' | 'exited';
  showClose?: boolean;
  children: React.ReactNode;
  onClose?: () => void;
}) {
  if (state === 'exited') return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <DialogOverlay state={state} />
      <div
        className={cn(
          dialogContentVariants({ variant, size, state }),
          className
        )}
        role="dialog"
        aria-modal="true"
      >
        {showClose && (
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface transition-colors"
            aria-label="Fechar"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        )}
        {children}
      </div>
    </div>
  );
}

export function DialogContent({
  className,
  variant,
  size,
  showClose = true,
  children,
  open,
}: DialogContentProps) {
  const [state, setState] = React.useState<
    'entering' | 'entered' | 'exiting' | 'exited'
  >(open ? 'entered' : 'exited');

  React.useEffect(() => {
    if (open) {
      setState('entering');
      const timer = setTimeout(() => setState('entered'), 10);
      return () => clearTimeout(timer);
    } else {
      setState('exiting');
      const timer = setTimeout(() => setState('exited'), 200);
      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <DialogContainer
      variant={variant}
      size={size}
      showClose={showClose}
      className={className}
      state={state}
      onClose={() => {}}
    >
      {children}
    </DialogContainer>
  );
}

export function DialogTrigger({
  className,
  children,
  asChild,
  ...props
}: DialogTriggerProps) {
  if (asChild && children) {
    return <>{children}</>;
  }
  return (
    <button type="button" className={className} {...props}>
      {children}
    </button>
  );
}

export function DialogHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('space-y-2 mb-4', className)} {...props} />;
}

export function DialogTitle({ className, ...props }: DialogTitleProps) {
  return (
    <h2
      className={cn('text-xl font-bold text-on-surface', className)}
      {...props}
    />
  );
}

export function DialogDescription({
  className,
  ...props
}: DialogDescriptionProps) {
  return (
    <p
      className={cn('text-sm text-on-surface-variant', className)}
      {...props}
    />
  );
}

export function DialogFooter({ className, ...props }: DialogFooterProps) {
  return (
    <div className={cn('flex justify-end gap-3 mt-6', className)} {...props} />
  );
}

export { dialogContentVariants, dialogOverlayVariants };
