import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from "vite-plugin-dts"
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        cssInjectedByJsPlugin(),
        dts({
            insertTypesEntry: true,
            outDir: "dist",
        }),
    ],
    build: {
        lib: {
            entry: 'src/index.ts',
            name: 'TinyReactDialog',
            fileName: (format) => `index.${format}.js`,
            formats: ['es', 'umd']
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                }
            }
        }
    }
})
