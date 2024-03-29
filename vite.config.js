import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      
    },
  },
  server: {
    proxy: {
      "/api": {
        target:
          "http://ec2-15-165-142-90.ap-northeast-2.compute.amazonaws.com:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        secure: false,
        ws: true,
      },
    },
  },
  assetsInclude: ["**/*.xlsx", "**/*.cell"],
});


