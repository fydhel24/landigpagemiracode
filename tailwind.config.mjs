/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: 'class',
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
        grotesk: ["Grotesk", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
      },
      colors: {
        // Mapeo a variables HSL para mayor flexibilidad con soporte para opacidad
        brand: {
          accent: 'hsl(var(--brand-accent) / <alpha-value>)',
          dark: 'hsl(var(--brand-dark) / <alpha-value>)',
          bg: 'hsl(var(--brand-bg) / <alpha-value>)',
          surface: 'hsl(var(--brand-surface) / <alpha-value>)',
          text: 'hsl(var(--brand-text) / <alpha-value>)',
          border: 'hsl(var(--brand-border) / <alpha-value>)',
        },
        'miracode-red': '#ff6b6b',
        'miracode-cyan': '#4ecdc4',
        'miracode-purple': '#a29bfe',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.6)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
};
