import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dst: {
          ink: "#0f1717",
          green: "#264f4f",
          deep: "#163737",
          mist: "#edf4f1",
          gold: "#e7a13a",
          paper: "#f7f3eb",
        },
      },
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui"],
        body: ["Inter", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        premium: "0 24px 70px rgba(15, 23, 23, 0.18)",
      },
    },
  },
  plugins: [],
} satisfies Config;
