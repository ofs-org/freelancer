'use client';

import { useUmamiTrackScroll } from '@/components/ui/use-umami-track-scroll';

export function UmamiProvider() {
  useUmamiTrackScroll();
  return null;
}
