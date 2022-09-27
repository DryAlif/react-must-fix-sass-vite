import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
});

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   root: path.join(__dirname, "src"),
//   build: {
//     outDir: path.join(__dirname, "dist"),
//     rollupOptions: {
//       input: glob.sync(path.resolve(__dirname, "src", "*.html")),
//     },
//   },
// })
