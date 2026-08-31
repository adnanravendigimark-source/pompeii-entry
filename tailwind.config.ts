import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pompeii Entry Tickets palette — terracotta/brick red (excavated
        // ruin walls) as the main brand color, Roman ochre gold as the
        // accent, volcanic ash charcoal for dark text, travertine cream
        // for the background. Class names below (stone/gold/emerald/maya/
        // chichen/navy) are unchanged from the Chichen Itza repo this
        // project was cloned from — only the values they resolve to changed.
        stone: {
          50: "#FAF9F6",   // Clean Italian Alabaster
          100: "#F3EFE6",  // Soft Stone
          200: "#E8E2D5",  // Roman Sand
          800: "#2F3B20",
          900: "#243010",  // Deep Roman Olive Slate
        },
        gold: {
          400: "#C99E4B",
          500: "#B58A38",  // Roman Ochre Gold ⭐
          600: "#9E762E",
        },
        emerald: {
          900: "#243010",  // Deep Roman Olive
          800: "#36451B",
          700: "#A8432B",  // Pompeian Terracotta ⭐
        },
        maya: {
          forest: "rgb(var(--color-maya-forest) / <alpha-value>)",
          jungle: "rgb(var(--color-maya-jungle) / <alpha-value>)",
          ivory: "rgb(var(--color-maya-ivory) / <alpha-value>)",
          gold: "rgb(var(--color-maya-gold) / <alpha-value>)",
          sand: "#E8E2D5",
          sage: "#E2E8D8",
          charcoal: "rgb(var(--color-maya-charcoal) / <alpha-value>)",
          white: "#FFFFFF",
          emerald: "rgb(var(--color-maya-emerald) / <alpha-value>)",
          dark: "#243010",
        },
        // Compatibility aliases for site components
        chichen: {
          navy: "rgb(var(--color-maya-forest) / <alpha-value>)",
          ottoman: "#A8432B",
          gold: "rgb(var(--color-maya-gold) / <alpha-value>)",
          charcoal: "rgb(var(--color-maya-charcoal) / <alpha-value>)",
          ivory: "#FAF9F6",
          sky: "#F3EFE6",
          sand: "#E8E2D5",
        },
        navy: {
          900: "#243010",
          800: "#36451B",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Cormorant Garamond", "Georgia", "ui-serif", "serif"],
        script: ["var(--font-script)", "Alex Brush", "cursive"],
        body: ["system-ui", "-apple-system", "sans-serif"],
      },
      backgroundImage: {
        mosaic:
          "radial-gradient(circle at 20% 20%, rgba(201,147,46,0.15) 0, transparent 40%), radial-gradient(circle at 80% 0%, rgba(43,36,32,0.25) 0, transparent 40%), radial-gradient(circle at 50% 80%, rgba(168,67,43,0.25) 0, transparent 45%)",
      },
    },
  },
  plugins: [],
};
export default config;
