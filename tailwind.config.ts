import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          white: "#FFFFFF",
          slate: "#F8FAFC",
          card: "#FFFFFF",
          hover: "#F1F5F9",
        },
        botanical: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          800: "#065F46",
          900: "#064E3B",
        },
        charcoal: {
          primary: "#111827",
          body: "#374151",
          muted: "#6B7280",
          light: "#9CA3AF",
        },
        border: {
          subtle: "#E2E8F0",
          card: "#E5E7EB",
          strong: "#CBD5E1",
        },
        accent: {
          cyan: "#0284C7",
          amber: "#F59E0B",
          purple: "#7C3AED",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-satoshi)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)",
        card: "0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.03)",
        glow: "0 0 25px -5px rgba(16, 185, 129, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
