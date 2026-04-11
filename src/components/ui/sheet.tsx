'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '@/lib/utils';

const sheetOverlayVariants = cva(
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

const sheetContentVariants = cva(
  'fixed z-50 bg-surface-container-lowest shadow-high border border-outline-variant/10 transition-all flex flex-col',
  {
    variants: {
      variant: {
        default: 'bg-surface-container-lowest border-outline-variant/10',
        glass:
          'glass-panel bg-inverse-surface/90 backdrop-blur-xl border-white/10',
      },
      side: {
        right: 'top-0 bottom-0 right-0 max-w-sm w-full',
      },
      state: {
        entering: 'translate-x-full',
        entered: 'translate-x-0',
        exiting: 'translate-x-0',
        exited: 'translate-x-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      side: 'right',
      state: 'entered',
    },
  }
);

export interface SheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export interface SheetContentProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  showClose?: boolean;
  variant?: 'default' | 'glass';
  side?: 'right';
  open?: boolean;
}

export interface SheetTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export function Sheet({ open, onOpenChange, children }: SheetProps) {
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

function SheetOverlay({
  state,
}: {
  state: 'entering' | 'entered' | 'exiting' | 'exited';
}) {
  if (state === 'exited') return null;

  return <div className={sheetOverlayVariants({ state })} />;
}

function SheetContainer({
  className,
  variant,
  side,
  state,
  title,
  showClose,
  children,
  onClose,
}: {
  className?: string;
  variant?: 'default' | 'glass';
  side?: 'right';
  state: 'entering' | 'entered' | 'exiting' | 'exited';
  title: string;
  showClose?: boolean;
  children: React.ReactNode;
  onClose?: () => void;
}) {
  if (state === 'exited') return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <SheetOverlay state={state} />
      <div
        className={cn(
          sheetContentVariants({ variant, side, state }),
          className
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sheet-title"
      >
        <div
          className={cn(
            'flex items-center justify-between px-6 py-4 border-b',
            variant === 'glass'
              ? 'border-white/10'
              : 'border-outline-variant/10'
          )}
        >
          <h2
            id="sheet-title"
            className={cn(
              'text-lg font-bold',
              variant === 'glass' ? 'text-white' : 'text-on-surface'
            )}
          >
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className={cn(
              'p-2 rounded-lg transition-colors',
              variant === 'glass'
                ? 'text-white/70 hover:text-white hover:bg-white/10'
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
            )}
            aria-label="Fechar"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6">{children}</div>
      </div>
    </div>
  );
}

export function SheetContent({
  className,
  variant,
  showClose = true,
  title,
  children,
  open,
}: SheetContentProps) {
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
      const timer = setTimeout(() => setState('exited'), 300);
      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <SheetContainer
      variant={variant}
      className={className}
      state={state}
      title={title}
      showClose={showClose}
      onClose={() => {}}
    >
      {children}
    </SheetContainer>
  );
}

export function SheetTrigger({
  className,
  children,
  asChild,
  ...props
}: SheetTriggerProps) {
  if (asChild && children) {
    return <>{children}</>;
  }
  return (
    <button type="button" className={className} {...props}>
      {children}
    </button>
  );
}
