const ATTRIBUTION_KEYS = ["utm_source", "utm_medium", "utm_campaign"] as const;

type AttributionKey = (typeof ATTRIBUTION_KEYS)[number];

const COOKIE_PREFIX = "tcc_attr";
const MAX_VALUE_LENGTH = 160;

function sanitizeAttributionValue(value: string | null): string {
  if (!value) return "";

  const cleaned = value
    .trim()
    .replace(/[\u0000-\u001F\u007F]/g, "")
    .slice(0, MAX_VALUE_LENGTH);

  // Campaign tokens must never be used to carry email addresses or other obvious identity data.
  if (!cleaned || cleaned.includes("@")) return "";

  return cleaned;
}

function getCookie(name: string): string {
  if (typeof document === "undefined") return "";

  const prefix = `${name}=`;
  for (const part of document.cookie.split(";")) {
    const cookie = part.trim();
    if (cookie.startsWith(prefix)) {
      try {
        return decodeURIComponent(cookie.slice(prefix.length));
      } catch {
        return "";
      }
    }
  }

  return "";
}

function setSessionCookie(name: string, value: string) {
  if (typeof document === "undefined") return;

  document.cookie = `${name}=${encodeURIComponent(value)}; Path=/; SameSite=Lax; Secure`;
}

function cookieName(kind: "first" | "latest", key: AttributionKey) {
  return `${COOKIE_PREFIX}_${kind}_${key.replace("utm_", "")}`;
}

export function captureAttributionFromSearch(search: string) {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(search);
  const taggedValues = ATTRIBUTION_KEYS.reduce<Partial<Record<AttributionKey, string>>>((acc, key) => {
    const value = sanitizeAttributionValue(params.get(key));
    if (value) acc[key] = value;
    return acc;
  }, {});

  if (Object.keys(taggedValues).length === 0) return;

  for (const key of ATTRIBUTION_KEYS) {
    const value = taggedValues[key];
    if (!value) continue;

    const firstName = cookieName("first", key);
    if (!getCookie(firstName)) {
      setSessionCookie(firstName, value);
    }

    setSessionCookie(cookieName("latest", key), value);
  }
}

export function getBrowserAttributionSnapshot() {
  return {
    first: {
      source: getCookie(cookieName("first", "utm_source")),
      medium: getCookie(cookieName("first", "utm_medium")),
      campaign: getCookie(cookieName("first", "utm_campaign")),
    },
    latest: {
      source: getCookie(cookieName("latest", "utm_source")),
      medium: getCookie(cookieName("latest", "utm_medium")),
      campaign: getCookie(cookieName("latest", "utm_campaign")),
    },
  };
}
