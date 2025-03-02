import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Proxy server to bypass CORS
  server: {
    proxy: {
      "/api": {
        target: "https://services.odata.org/V4/Northwind/Northwind.svc/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
});
