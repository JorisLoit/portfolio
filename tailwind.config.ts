import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
      },
    },
    fontFamily: {
      primary: "var(--font-leagueSpartan)",
    },
    extend: {
      colors: {
        primary: "#957dad",
        visvis: {
          "50": "#fffceb",
          "100": "#fff6c6",
          "200": "#ffef9f",
          "300": "#ffdb4a",
          "400": "#ffc820",
          "500": "#f9a707",
          "600": "#dd7e02",
          "700": "#b75906",
          "800": "#94440c",
          "900": "#7a380d",
          "950": "#461c02",
        },
        eliotrope: {
          DEFAULT: "#f8f7ff",
        },
        accent: {
          DEFAULT: "#ffef9f",
          hover: "#00e187",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
