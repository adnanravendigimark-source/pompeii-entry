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
          50: "#F5EDE1",   // Travertine Cream
          100: "#EFE3D2",
          200: "#DFC9A8",  // Warm Sand
          800: "#3A312A",
          900: "#2B2420",  // Volcanic Ash Charcoal
        },
        gold: {
          400: "#D9A066",
          500: "#C9932E",  // Roman Ochre Gold ⭐
          600: "#A87720",
        },
        emerald: {
          900: "#2B2420",  // Volcanic Ash Charcoal
          800: "#5C2E1E",
          700: "#A8432B",  // Terracotta ⭐
        },
        maya: {
          forest: "rgb(var(--color-maya-forest) / <alpha-value>)",
          jungle: "rgb(var(--color-maya-jungle) / <alpha-value>)",
          ivory: "rgb(var(--color-maya-ivory) / <alpha-value>)",
          gold: "rgb(var(--color-maya-gold) / <alpha-value>)",
          sand: "#DFC9A8",
          sage: "#E8D9C4",
          charcoal: "rgb(var(--color-maya-charcoal) / <alpha-value>)",
          white: "#FFFFFF",
          emerald: "rgb(var(--color-maya-emerald) / <alpha-value>)",
          dark: "#2B2420",
        },
        // Compatibility aliases for site components
        chichen: {
          navy: "rgb(var(--color-maya-forest) / <alpha-value>)",
          ottoman: "#A8432B",
          gold: "rgb(var(--color-maya-gold) / <alpha-value>)",
          charcoal: "rgb(var(--color-maya-charcoal) / <alpha-value>)",
          ivory: "#F5EDE1",
          sky: "#E8D9C4",
          sand: "#DFC9A8",
        },
        navy: {
          900: "#2B2420",
          800: "#A8432B",
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
