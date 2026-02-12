/**
 * Google Analytics (GA4) helpers.
 * gtag is loaded via index.html; use these to send page views and custom events.
 */

export const GA_MEASUREMENT_ID = "G-415LW8TNM3";

export function pageview(path, title) {
  if (typeof window.gtag === "undefined") return;
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: path || window.location.pathname + window.location.search,
    page_title: title || document.title,
  });
}

export function event(name, params = {}) {
  if (typeof window.gtag === "undefined") return;
  window.gtag("event", name, params);
}
