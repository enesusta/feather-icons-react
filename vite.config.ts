import react from "@vitejs/plugin-react";
import path from "node:path";
import { name } from "./package.json";

import { defineConfig } from "vite";

const formattedName = name.match(/[^/]+$/)?.[0] ?? name;

export default defineConfig(({ mode }) => {
  return {
    plugins: [react({ include: /\.(js|jsx)$/ })],
    build: {
      copyPublicDir: false,
      target: "es2022",
      lib: {
        entry: path.resolve(__dirname, "lib/index.js"),
        name: formattedName,
        formats: ["es"],
        // fileName: (format) => `${formattedName}.${format}.js`,
        fileName: (format) => `index.${format}.js`,
      },
      rollupOptions: {
        external: ["react"],
        output: {
          globals: {
            react: "React",
          },
        },
      },
    },
  };
});
