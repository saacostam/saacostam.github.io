import react from '@vitejs/plugin-react'
import path from "path"
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // @ts-expect-error: Only used for testing - which has a quick feedback loop
	test: {  
		globals: true,  
		environment: 'jsdom',  
		setupFiles: ['./src/tests/setup.ts'],
	}, 
})
