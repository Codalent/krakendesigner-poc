import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xxxs: ["0.5rem", { lineHeight: "1" }], // 8px
      xxs: ["0.625rem", { lineHeight: "1rem" }], // 10px
      xs: ["0.75rem", { lineHeight: "1rem" }], // 12px
      sm: ["0.875rem", { lineHeight: "1.25rem" }], // 14px
      base: ["1rem", { lineHeight: "1.5rem" }], // 16px
      lg: ["1.125rem", { lineHeight: "1.75rem" }], // 18px
      xl: ["1.25rem", { lineHeight: "1.75rem" }], // 20px
      "2xl": ["1.5rem", { lineHeight: "2rem" }], // 24px
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }], // 30px
      "3.5xl": ["2rem", { lineHeight: "2.5rem" }], // 32px
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }], // 36px
      "4.25xl": ["2.5rem", { lineHeight: "2.5rem" }], // 40px
      "5xl": ["3rem", { lineHeight: "1" }], // 48px
      "6xl": ["3.75rem", { lineHeight: "1" }], // 60px
      "7xl": ["4.5rem", { lineHeight: "1" }], // 72px
      "8xl": ["6rem", { lineHeight: "1" }], // 96px
      "9xl": ["8rem", { lineHeight: "1" }], // 128px
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          blue: {
            DEFAULT: "#0071CE",
            500: "#0f265c",
          },
          neutral: {
            50: "#d8d8d8",
            100: "#bcccdc", // borders,
            150: "#eff0f3",
            200: "#363944",
            300: "#a2a9be", // body text on dark background
            DEFAULT: "#c9d3ee",
            500: "#717da3", // body text on light background
            600: "#313742",
            700: "#000c13",
            800: "#030418", // dark text on light background
            900: "#0b0c10", // dark background
          },
        }
      },
    },
  },
  plugins: [],
};
export default config;
