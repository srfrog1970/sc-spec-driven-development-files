import { defineConfig } from "vitest/config";

export default defineConfig({
  oxc: {
    transform: {
      jsx: {
        runtime: "automatic",
        importSource: "hono/jsx",
      },
    },
  },
});
