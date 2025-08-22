import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
            outDir: "dist",
        }),
        viteStaticCopy({
            targets: [{ src: "src/tinyReactDialog.css", dest: "" }],
        }),
    ],
    test: {
        environment: "jsdom",
        setupFiles: ["./tests/setupTests.ts"],
    },
    build: {
        lib: {
            entry: "src/index.ts",
            name: "TinyReactDialog",
            fileName: (format) => `index.${format}.js`,
            formats: ["es", "umd"],
        },
        rollupOptions: {
            external: ["react", "react-dom"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        },
    },
});
