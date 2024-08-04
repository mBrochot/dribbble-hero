import type { Config } from "tailwindcss";

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
      animation: {
            badge:'colorCycle 32s linear infinite',
      },
      keyframes: {
            colorCycle: {
                "0%": { backgroundColor: "#ffda79" },
                "25%": { backgroundColor: "#ffabe7" },
                "50%": { backgroundColor: "#d2bcf3" },
                "75%": { backgroundColor: "#edf3d8" },
                "100%": { backgroundColor: "#ffda79" },
            },
        }
    },
  },
  plugins: [],
};
export default config;
