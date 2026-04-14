'use client';

import { useEffect, useRef, useState } from 'react';

export interface CounterOptions {
  target: number;
  duration?: number;
  trigger?: 'mount';
  decimals?: number;
}

export function useCounterAnimation(options: CounterOptions): {
  displayValue: number;
} {
  const { target, duration = 2000, decimals = 0 } = options;
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;

    hasAnimated.current = true;

    const startTime = performance.now();
    const startValue = 0;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentValue = startValue + (target - startValue) * eased;
      setDisplayValue(Number(currentValue.toFixed(decimals)));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration, decimals]);

  return { displayValue };
}
