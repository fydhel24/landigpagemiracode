/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        grotesk: ["Montserrat", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
      },
      colors: {
        primary: "#8b5cf6", // Violet 500
        secondary: "#ec4899", // Pink 500
        accent: "#06b6d4", // Cyan 500
        black: "#0f172a", // Slate 900
        dark: "#020617", // Midnight
        gray: "#f1f5f9", // Slate 100
        white: "#ffffff",
        // Colores sutiles de Miracode
        "miracode-red": "#ff6b6b",
        "miracode-cyan": "#06b6d4",
        "miracode-purple": "#8b5cf6",
      },
    },
  },
  plugins: [],
};
