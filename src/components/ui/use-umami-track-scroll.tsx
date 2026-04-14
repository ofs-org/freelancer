'use client';

import { useEffect, useRef } from 'react';
import { trackEvent } from '@/lib/umami';

export function useUmamiTrackScroll() {
  const tracked = useRef(false);

  useEffect(() => {
    if (tracked.current) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      if (scrollPercent >= 50 && !tracked.current) {
        tracked.current = true;
        trackEvent('scroll_50', { url: window.location.pathname });
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}
