import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0C",        // page background
        panel: "#121214",      // section panels
        card: "#17171A",       // cards / inputs
        line: "#2A2A2E",       // hairline borders
        gold: "#D7A94E",       // primary accent
        goldDim: "#A8842F",    // hover / borders
        cream: "#F2EFE7",      // headings
        muted: "#9C9A93",      // body text
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      letterSpacing: {
        wideish: "0.18em",
      },
      keyframes: {
        "scale-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "scale-up": {
          "0%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(1.05)",
          },
        },
      },
      animation: {
        "scale-in": "scale-in 0.6s ease-out both",
        "scale-up": "scale-up 0.3s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;