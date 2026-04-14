"use client";

import Script from "next/script";

const UMAMI_SCRIPT = `
  (function() {
    var _umami = (window._umami = window._umami || {});
    _umami.track = function(eventName, eventData) {
      if (typeof umami !== 'undefined') {
        umami.track(eventName, eventData);
      } else {
        console.log('[Umami] track:', eventName, eventData);
      }
    };
    _umami.trackPageview = function(url) {
      if (typeof umami !== 'undefined') {
        umami.trackPageview(url);
      } else {
        console.log('[Umami] pageview:', url);
      }
    };
  })();
`;

interface UmamiScriptProps {
  websiteId?: string;
}

export function UmamiScript({ websiteId }: UmamiScriptProps) {
  if (!websiteId) {
    return null;
  }

  return (
    <>
      <Script
        id="umami-init"
        strategy="afterInteractive"
        // eslint-disable-next-line security/dangerouslySetInnerHTML
        dangerouslySetInnerHTML={{ __html: UMAMI_SCRIPT }}
      />
      <Script
        src="https://umami.example.com/script.js"
        id="umami-script"
        strategy="afterInteractive"
        data-website-id={websiteId}
      />
    </>
  );
}
