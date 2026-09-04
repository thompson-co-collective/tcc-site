import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  canonicalUrl,
  normalizePath,
  resolveRouteSeo,
} from "../seo/routeSeo";

function setOrCreatePropertyMeta(property: string, content: string) {
  const selector = `meta[property="${property}"]`;
  const tag = document.querySelector(selector) || document.createElement("meta");
  tag.setAttribute("property", property);
  tag.setAttribute("content", content);
  if (!tag.parentElement) document.head.appendChild(tag);
}

function setOrCreateNameMeta(name: string, content: string) {
  const selector = `meta[name="${name}"]`;
  const tag = document.querySelector(selector) || document.createElement("meta");
  tag.setAttribute("name", name);
  tag.setAttribute("content", content);
  if (!tag.parentElement) document.head.appendChild(tag);
}

export function RouteMetaManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPath = normalizePath(pathname);
    const { seo: routeSeo, isMapped } = resolveRouteSeo(normalizedPath);

    if (typeof window !== "undefined" && !isMapped && import.meta.env.DEV) {
      console.warn(
        `[SEO] Missing ROUTE_SEO mapping for "${normalizedPath}". ` +
          `If this is an indexable route, add it to ROUTE_SEO and public/sitemap.xml.`
      );
    }

    const canonicalHref = canonicalUrl(normalizedPath);
    const canonicalTag =
      document.querySelector('link[rel="canonical"]') || document.createElement("link");

    document.title = routeSeo.title;

    canonicalTag.setAttribute("rel", "canonical");
    canonicalTag.setAttribute("href", canonicalHref);
    if (!canonicalTag.parentElement) document.head.appendChild(canonicalTag);

    setOrCreateNameMeta("description", routeSeo.description);
    setOrCreateNameMeta("robots", routeSeo.robots || "index,follow");

    setOrCreatePropertyMeta("og:type", routeSeo.ogType || "website");
    setOrCreatePropertyMeta("og:url", canonicalHref);
    setOrCreatePropertyMeta("og:title", routeSeo.title);
    setOrCreatePropertyMeta("og:description", routeSeo.description);

    setOrCreateNameMeta("twitter:url", canonicalHref);
    setOrCreateNameMeta("twitter:title", routeSeo.title);
    setOrCreateNameMeta("twitter:description", routeSeo.description);
  }, [pathname]);

  return null;
}
