import { trackEvent } from "./analytics";

export type ContactSubmissionPayload = {
  name: string;
  email: string;
  company: string;
  needHelp: string;
  message: string;
};

type ContactSubmissionResult =
  | { ok: true }
  | { ok: false; status?: number; errorType: string };

export async function submitContactSubmission(
  payload: ContactSubmissionPayload,
  source: "contact_page" | "partner_contact_section"
): Promise<ContactSubmissionResult> {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      trackEvent("contact_form_submission_failed", {
        event_category: "Form",
        event_label: "Contact Form",
        source,
        status_code: response.status,
        error_type: "http_error",
      });
      return { ok: false, status: response.status, errorType: "http_error" };
    }

    trackEvent("contact_form_submitted", {
      event_category: "Form",
      event_label: "Contact Form",
      source,
    });
    return { ok: true };
  } catch (_error) {
    trackEvent("contact_form_submission_failed", {
      event_category: "Form",
      event_label: "Contact Form",
      source,
      error_type: "network_error",
    });
    return { ok: false, errorType: "network_error" };
  }
}
