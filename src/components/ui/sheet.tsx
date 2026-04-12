'use client';

import { Dialog as SheetPrimitive } from 'radix-ui';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        'fixed inset-0 z-50 bg-black/50 backdrop-blur-md duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0',
        className
      )}
      {...props}
    />
  );
}

function SheetContent({
  className,
  children,
  variant = 'default',
  side = 'right',
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  variant?: 'default' | 'glass';
  side?: 'top' | 'right' | 'bottom' | 'left';
  showCloseButton?: boolean;
}) {
  const variantStyles = {
    default: 'bg-surface-container',
    glass: 'glass-panel',
  };

  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Title className="sr-only">
        Menu de navegação
      </SheetPrimitive.Title>
      <SheetPrimitive.Content
        data-slot="sheet-content"
        data-variant={variant}
        data-side={side}
        className={cn(
          'fixed z-50 flex flex-col gap-4 bg-clip-padding text-on-surface shadow-lg transition-transform duration-300 ease-in-out',
          variantStyles[variant],
          'data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t',
          'data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-screen data-[side=left]:w-3/4 data-[side=left]:border-r',
          'data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-screen data-[side=right]:w-3/4 data-[side=right]:border-l',
          'data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b',
          'data-[state=open]:animate-in data-[state=open]:fade-in-0',
          'data-[side=bottom]:data-[state=open]:slide-in-from-bottom-full',
          'data-[side=left]:data-[state=open]:slide-in-from-left-full',
          'data-[side=right]:data-[state=open]:slide-in-from-right-full',
          'data-[side=top]:data-[state=open]:slide-in-from-top-full',
          'data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
          'data-[side=bottom]:data-[state=closed]:slide-out-to-bottom-full',
          'data-[side=left]:data-[state=closed]:slide-out-to-left-full',
          'data-[side=right]:data-[state=closed]:slide-out-to-right-full',
          'data-[side=top]:data-[state=closed]:slide-out-to-top-full',
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <SheetPrimitive.Close data-slot="sheet-close" asChild>
            <Button
              variant="ghost"
              size="icon-sm"
              className="absolute top-3 right-3"
            >
              <span className="sr-only">Close</span>
            </Button>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Content>
    </SheetPortal>
  );
}

function SheetHeader({
  className,
  title = 'Navegação',
  ...props
}: React.ComponentProps<'div'> & { title?: string }) {
  return (
    <div
      data-slot="sheet-header"
      className={cn('flex flex-col gap-1 p-4', className)}
      {...props}
    >
      <SheetPrimitive.Title className="sr-only">{title}</SheetPrimitive.Title>
    </div>
  );
}

function SheetFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn('mt-auto flex flex-col gap-2 p-4', className)}
      {...props}
    />
  );
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn(
        'font-heading text-lg font-semibold text-on-surface',
        className
      )}
      {...props}
    />
  );
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn('text-sm text-on-surface-variant', className)}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
};
