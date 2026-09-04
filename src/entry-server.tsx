import { PassThrough } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { AppContent } from "./app/App";

export {
  INDEXABLE_ROUTES,
  PRERENDER_ROUTES,
  SOCIAL_IMAGE_URL,
  canonicalUrl,
  resolveRouteSeo,
} from "./app/seo/routeSeo";

export function render(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    let didError = false;
    const output = new PassThrough();
    let html = "";

    output.setEncoding("utf8");
    output.on("data", (chunk) => {
      html += chunk;
    });
    output.on("end", () => {
      if (didError) {
        reject(new Error(`React reported an SSR error while rendering ${url}`));
        return;
      }
      resolve(html);
    });
    output.on("error", reject);

    const stream = renderToPipeableStream(
      <StaticRouter location={url}>
        <AppContent />
      </StaticRouter>,
      {
        onAllReady() {
          stream.pipe(output);
        },
        onError(error) {
          didError = true;
          console.error(error);
        },
      },
    );
  });
}
