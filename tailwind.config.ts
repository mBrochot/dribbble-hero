import type { Config } from "tailwindcss";
 
const cardCount: number = require('./app/data').cards.length;

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      mona: ["var(--font-mona)"],
      serif: ["var(--font-serif)"],
    },
    extend: {
      colors: {
        custom: {
          black: "var(--color-primary)",
          heroBackground: "var(--color-hero-background)",
        }
      },
      textColor: {
        custom: {
          grey: "var(--color-secondary)",
        }
      },
      aspectRatio: {
        cardMobile: "218 / 272",
        cardDesktop: "273 / 340",
      },
      animation: {
        badge: 'colorCycle 32s linear infinite',
        slide: `slide calc(var(--card-speed) * ${cardCount}) linear infinite`,
      },
      keyframes: {
        colorCycle: { 
          "0%": { backgroundColor: "#ffda79" },
          "25%": { backgroundColor: "#ffabe7" }, 
          "50%": { backgroundColor: "#d2bcf3" },
          "75%": { backgroundColor: "#edf3d8" },
          "100%": { backgroundColor: "#ffda79" },
        },
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-50% - var(--card-gap) / 2))" },
        },
      }
    },
  },
  plugins: [],
};
export default config;
