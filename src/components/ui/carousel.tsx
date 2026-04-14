'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('relative w-full', className)} {...props} />
    );
  }
);
Carousel.displayName = 'Carousel';

interface CarouselContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const CarouselContent = React.forwardRef<HTMLDivElement, CarouselContentProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn('flex', className)} {...props} />;
  }
);
CarouselContent.displayName = 'CarouselContent';

interface CarouselItemProps extends React.HTMLAttributes<HTMLDivElement> {}

const CarouselItem = React.forwardRef<HTMLDivElement, CarouselItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('min-w-0 flex-[0_0_100%] pl-4', className)}
        {...props}
      />
    );
  }
);
CarouselItem.displayName = 'CarouselItem';

export { Carousel, CarouselContent, CarouselItem };
