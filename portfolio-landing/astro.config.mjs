import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://tu-dominio.com", // TODO: reemplaza con tu dominio final
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
