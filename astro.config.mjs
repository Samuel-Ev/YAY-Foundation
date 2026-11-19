// @ts-check
import { defineConfig } from "astro/config";

// When the custom domain is ready, change `site` to it (e.g. https://yayfoundation.org).
export default defineConfig({
  site: "https://yay-foundation.vercel.app",
  trailingSlash: "ignore",
});
