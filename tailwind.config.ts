import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        aspis: {
          mint: "#10B981"
        }
      }
    }
  },
  plugins: []
} satisfies Config;
