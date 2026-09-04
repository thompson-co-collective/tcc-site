import { access, readFile, rm } from "node:fs/promises";
import { join } from "node:path";

const siteUrl = "https://thompsoncollective.co";
const outputDirectory = join(process.cwd(), "dist");
const sitemap = await readFile(join(outputDirectory, "sitemap.xml"), "utf8");
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
const routeManifest = JSON.parse(
  await readFile(join(process.cwd(), ".seo-routes.json"), "utf8"),
);
const failures = [];

const sitemapRoutes = urls.map((url) => {
  const pathname = new URL(url).pathname;
  return pathname === "/" ? "/" : pathname.replace(/\/$/, "");
});
if (
  JSON.stringify([...sitemapRoutes].sort()) !==
  JSON.stringify([...routeManifest.indexableRoutes].sort())
) {
  failures.push("sitemap.xml routes do not match the indexable route manifest");
}

for (const url of urls) {
  const parsed = new URL(url);
  const route = parsed.pathname === "/" ? "/" : parsed.pathname.replace(/\/$/, "");
  const file =
    route === "/"
      ? join(outputDirectory, "index.html")
      : join(outputDirectory, `${route.slice(1)}.html`);

  try {
    await access(file);
  } catch {
    failures.push(`${route}: missing prerendered HTML`);
    continue;
  }

  const html = await readFile(file, "utf8");
  const canonical = route === "/" ? `${siteUrl}/` : `${siteUrl}${route}`;
  if (!html.includes(`<link rel="canonical" href="${canonical}" />`)) {
    failures.push(`${route}: missing self-referencing canonical`);
  }
  if (!html.includes(`<meta property="og:url" content="${canonical}" />`)) {
    failures.push(`${route}: Open Graph URL does not match canonical`);
  }
  if (!html.includes('<meta name="robots" content="index,follow" />')) {
    failures.push(`${route}: sitemap URL is not indexable`);
  }
  if (!/<div id="root">\s*<div/.test(html)) {
    failures.push(`${route}: page body was not prerendered`);
  }
}

const noindexRoutes = ["/audit", "/sitemap"];
for (const route of noindexRoutes) {
  const html = await readFile(
    join(outputDirectory, `${route.slice(1)}.html`),
    "utf8",
  );
  if (!html.includes('<meta name="robots" content="noindex,follow" />')) {
    failures.push(`${route}: expected noindex,follow`);
  }
  if (sitemap.includes(`<loc>${siteUrl}${route}</loc>`)) {
    failures.push(`${route}: noindex page must not appear in sitemap`);
  }
}

const notFound = await readFile(join(outputDirectory, "404.html"), "utf8");
if (!notFound.includes('<meta name="robots" content="noindex,follow" />')) {
  failures.push("404.html: expected noindex,follow");
}
if (notFound.includes('rel="canonical"')) {
  failures.push("404.html: must not declare a canonical URL");
}

const redirects = await readFile(join(outputDirectory, "_redirects"), "utf8");
for (const redirect of [
  "/home / 301",
  "/blog /insights 301",
  "/talent-maturity-audit /audit 301",
  "/tag/featured /insights 301",
]) {
  if (!redirects.includes(redirect)) {
    failures.push(`_redirects: missing ${redirect}`);
  }
}

if (failures.length) {
  console.error("SEO build verification failed:\n- " + failures.join("\n- "));
  process.exit(1);
}

await rm(join(process.cwd(), ".seo-ssr"), { recursive: true, force: true });
await rm(join(process.cwd(), ".seo-routes.json"), { force: true });

console.log(
  `SEO build verified: ${urls.length} indexable routes, ${noindexRoutes.length} noindex routes, redirects, and 404 handling.`,
);
