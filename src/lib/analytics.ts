/** Google Analytics (gtag) helpers — requires the G-JD69XGK13X snippet in index.html */

export const GA_MEASUREMENT_ID = "G-JD69XGK13X";

type GtagCommand = "js" | "config" | "event" | "set" | "consent";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: [GtagCommand, ...unknown[]]) => void;
  }
}

export type SocialNetwork = "instagram" | "whatsapp" | "youtube";

export type FormKind = "contact" | "demo" | "courses" | "feedback";

type EventParams = Record<string, string | number | boolean | undefined>;

function gtagSafe(...args: [GtagCommand, ...unknown[]]) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag(...args);
}

/** Low-level event sender */
export function trackEvent(eventName: string, params?: EventParams) {
  gtagSafe("event", eventName, params);
}

/** SPA route change page view */
export function trackPageView(path: string, title?: string) {
  gtagSafe("config", GA_MEASUREMENT_ID, {
    page_path: path,
    page_title: title ?? document.title,
  });
}

function normalizeSocial(name: string): SocialNetwork | null {
  const n = name.trim().toLowerCase();
  if (n.includes("instagram")) return "instagram";
  if (n.includes("whatsapp")) return "whatsapp";
  if (n.includes("youtube")) return "youtube";
  return null;
}

/**
 * Track Instagram / WhatsApp / YouTube outbound clicks.
 * `location` = where on the site (e.g. sidebar, footer, contact, gallery).
 */
export function trackSocialClick(
  network: SocialNetwork | string,
  location: string,
  extra?: EventParams
) {
  const social = typeof network === "string" ? normalizeSocial(network) ?? network : network;
  trackEvent("social_click", {
    social_network: social,
    click_location: location,
    ...extra,
  });
}

export function trackFormStart(formKind: FormKind, location = "contact_page") {
  trackEvent("form_start", {
    form_id: formKind,
    form_name: formKind,
    form_location: location,
  });
}

export function trackFormValidationError(
  formKind: FormKind,
  location = "contact_page"
) {
  trackEvent("form_validation_error", {
    form_id: formKind,
    form_name: formKind,
    form_location: location,
  });
}

export function trackFormSubmitSuccess(
  formKind: FormKind,
  location = "contact_page"
) {
  trackEvent("form_submit", {
    form_id: formKind,
    form_name: formKind,
    form_location: location,
    status: "success",
  });

  // Leads only — not feedback (feedback is not a sales enquiry)
  if (formKind === "contact" || formKind === "demo" || formKind === "courses") {
    trackEvent("generate_lead", {
      form_id: formKind,
      form_name: formKind,
      form_location: location,
    });
  }
}

export function trackFormSubmitError(
  formKind: FormKind,
  location = "contact_page"
) {
  trackEvent("form_submit", {
    form_id: formKind,
    form_name: formKind,
    form_location: location,
    status: "error",
  });
}

/** Map contact form subject value → analytics form kind */
export function formKindFromSubject(subject: string): FormKind {
  if (subject === "feedback") return "feedback";
  if (subject === "demo") return "demo";
  if (subject === "courses") return "courses";
  return "contact";
}
