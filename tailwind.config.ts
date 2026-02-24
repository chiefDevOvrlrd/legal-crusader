import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-outfit)", "sans-serif"],
      },
      colors: {
        navy: {
          950: "#06091a",
          900: "#0a0f2e",
          800: "#0f1540",
          700: "#151c52",
        },
        crimson: {
          DEFAULT: "#c8102e",
          dark: "#9b0c23",
          light: "#e8253f",
        },
        gold: {
          DEFAULT: "#c9a84c",
          light: "#e4c878",
          pale: "#f5e8c0",
        },
        parchment: "#f8f5ef",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(60px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-60px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.92)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        floatLeaf: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-12px) rotate(3deg)" },
          "66%": { transform: "translateY(-6px) rotate(-2deg)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        drawLine: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s ease forwards",
        fadeIn: "fadeIn 1s ease forwards",
        slideLeft: "slideLeft 0.8s ease forwards",
        slideRight: "slideRight 0.8s ease forwards",
        scaleIn: "scaleIn 0.8s ease forwards",
        shimmer: "shimmer 3s linear infinite",
        floatLeaf: "floatLeaf 6s ease-in-out infinite",
        pulse: "pulse 2s ease-in-out infinite",
        drawLine: "drawLine 1s ease forwards",
      },
    },
  },
  plugins: [],
};
export default config;
