import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import dts from "vite-plugin-dts";
import typeTransformPlugin from "type-transform-utils/vite"

export default defineConfig({
  plugins: [
    solid(),
    typeTransformPlugin(),
    dts({
      exclude: ["src/index.tsx", "src/pages/**/*.*"]
    })
  ],
  server: {
    port: 5174
  },
  build: {
    target: "esnext",
    lib: {
      entry: "./src/libs.ts",
      formats: ["es"],
      name: "libs",
      fileName: "libs",
    },
    rollupOptions: {
      external: ["solid-js", "solid-js/web"],
      output: {
        globals: {
          "solid-js": "solid-js",
          "solid-js/web": "solid-js/web",
        },
      },
    },
  },
});
