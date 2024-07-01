import type { Config } from "tailwindcss";
import { colors } from "./src/config/colors";
import { ui } from "./src/config/ui";

const config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        "2xl": ui.container.desktopPadding,
        lg: ui.container.tabletPadding,
        md: ui.container.mobilePadding,
      },
    },
    extend: {
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
      colors: colors,
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
