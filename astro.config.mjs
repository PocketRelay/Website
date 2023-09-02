import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: "dark-plus",
    },
  },
  integrations: [mdx(), svelte()],
});
