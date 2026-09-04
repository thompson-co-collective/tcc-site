import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const outputDirectory = join(process.cwd(), "dist");
const serverDirectory = join(process.cwd(), ".seo-ssr");
const templatePath = join(outputDirectory, "index.html");

const {
  INDEXABLE_ROUTES,
  PRERENDER_ROUTES,
  SOCIAL_IMAGE_URL,
  canonicalUrl,
  render,
  resolveRouteSeo,
} = await import(join(serverDirectory, "entry-server.js"));

const template = await readFile(templatePath, "utf8");

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function replaceTag(html, pattern, replacement) {
  if (!pattern.test(html)) {
    throw new Error(`Could not find expected head tag: ${pattern}`);
  }
  return html.replace(pattern, replacement);
}

function applySeoHead(html, route, includeCanonical = true) {
  const { seo } = resolveRouteSeo(route);
  const canonical = canonicalUrl(route);
  const title = escapeHtml(seo.title);
  const description = escapeHtml(seo.description);
  const robots = seo.robots || "index,follow";
  const ogType = seo.ogType || "website";

  let result = replaceTag(html, /<title>.*?<\/title>/s, `<title>${title}</title>`);
  result = replaceTag(
    result,
    /<meta name="description" content=".*?"\s*\/?>/s,
    `<meta name="description" content="${description}" />`,
  );
  result = replaceTag(
    result,
    /<meta name="robots" content=".*?"\s*\/?>/s,
    `<meta name="robots" content="${robots}" />`,
  );
  result = includeCanonical
    ? replaceTag(
        result,
        /<link rel="canonical" href=".*?"\s*\/?>/s,
        `<link rel="canonical" href="${canonical}" />`,
      )
    : result.replace(/\s*<link rel="canonical" href=".*?"\s*\/?>/s, "");

  const propertyValues = {
    "og:type": ogType,
    "og:url": canonical,
    "og:title": seo.title,
    "og:description": seo.description,
    "og:image": SOCIAL_IMAGE_URL,
  };
  for (const [property, value] of Object.entries(propertyValues)) {
    result = replaceTag(
      result,
      new RegExp(`<meta property="${property}" content=".*?"\\s*\\/?>`, "s"),
      `<meta property="${property}" content="${escapeHtml(value)}" />`,
    );
  }

  const nameValues = {
    "twitter:card": "summary_large_image",
    "twitter:url": canonical,
    "twitter:title": seo.title,
    "twitter:description": seo.description,
    "twitter:image": SOCIAL_IMAGE_URL,
  };
  for (const [name, value] of Object.entries(nameValues)) {
    result = replaceTag(
      result,
      new RegExp(`<meta name="${name}" content=".*?"\\s*\\/?>`, "s"),
      `<meta name="${name}" content="${escapeHtml(value)}" />`,
    );
  }

  return result;
}

async function writeRoute(route) {
  const appHtml = await render(route);
  let html = applySeoHead(template, route);
  html = replaceTag(html, /<div id="root"><\/div>/, `<div id="root">${appHtml}</div>`);

  const target =
    route === "/"
      ? templatePath
      : join(outputDirectory, `${route.slice(1)}.html`);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, html);
}

for (const route of PRERENDER_ROUTES) {
  await writeRoute(route);
}

const notFoundHtml = await render("/__not-found__");
let errorDocument = applySeoHead(template, "/__not-found__", false);
errorDocument = replaceTag(
  errorDocument,
  /<div id="root"><\/div>/,
  `<div id="root">${notFoundHtml}</div>`,
);
await writeFile(join(outputDirectory, "404.html"), errorDocument);

await writeFile(
  join(process.cwd(), ".seo-routes.json"),
  JSON.stringify({ indexableRoutes: INDEXABLE_ROUTES }, null, 2),
);

console.log(`Prerendered ${PRERENDER_ROUTES.length} routes and a 404 document.`);
