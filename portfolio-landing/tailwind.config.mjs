/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        base: "#0A0D0A",      // fondo principal
        surface: "#141814",   // superficies elevadas
        surface2: "#1B211B",  // superficies un poco más claras (cards)
        primary: "#112BE4",   // acento principal
        ink: "#EDEFEA",       // texto principal sobre oscuro
        muted: "#8A9089",     // texto secundario
        line: "rgba(255,255,255,0.08)", // bordes sutiles
      },
      fontFamily: {
        display: ['"Anton"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
      },
      backdropBlur: {
        xs: "2px",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};
