type EventParams = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

const CONTACT_ACCEPTANCE_COOKIE = "tcc_contact_accepted";

function consumeContactAcceptanceMarker() {
  if (typeof document === "undefined") return false;

  const accepted = document.cookie
    .split(";")
    .map((cookie) => cookie.trim())
    .some((cookie) => cookie === `${CONTACT_ACCEPTANCE_COOKIE}=1`);

  if (accepted) {
    document.cookie = `${CONTACT_ACCEPTANCE_COOKIE}=; Path=/; Max-Age=0; SameSite=Lax; Secure`;
  }

  return accepted;
}

export function trackEvent(eventName: string, params?: EventParams) {
  if (typeof window === "undefined") return;

  // Transitional safeguard until ContactPage consumes the API's accepted boolean directly.
  // Prevents the current response.ok-only UI from producing a false contact conversion.
  if (eventName === "contact_form_submitted" && !consumeContactAcceptanceMarker()) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });
}
