'use client';

declare global {
  interface Window {
    _umami: {
      track: (eventName: string, eventData?: Record<string, unknown>) => void;
      trackPageview: (url?: string) => void;
    };
  }
}

export type UmamiEvent =
  | 'cta_click'
  | 'form_submit'
  | 'scroll_50'
  | 'whatsapp_click'
  | 'checklist_download';

const EVENT_LABELS: Record<UmamiEvent, string> = {
  cta_click: 'CTA Click',
  form_submit: 'Form Submit',
  scroll_50: 'Scroll 50%',
  whatsapp_click: 'WhatsApp Click',
  checklist_download: 'Checklist Download',
};

export function trackEvent(
  event: UmamiEvent,
  data?: Record<string, unknown>
): void {
  if (typeof window === 'undefined') return;

  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;

  if (!websiteId) {
    console.log('[Umami] Event:', EVENT_LABELS[event], data);
    return;
  }

  if (window._umami?.track) {
    window._umami.track(event, data);
  }
}

export function trackPageview(url?: string): void {
  if (typeof window === 'undefined') return;

  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;

  if (!websiteId) {
    console.log('[Umami] Pageview:', url);
    return;
  }

  if (window._umami?.trackPageview) {
    window._umami.trackPageview(url);
  }
}
