/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        bg:    "#070707",
        bg2:   "#0d0d0d",
        bg3:   "#141414",
        red:   "#e01a2d",
        red2:  "#b8101f",
        gray:  "#777777",
        snow:  "#f0f0f0",
      },
      fontFamily: {
        display: ["'Bebas Neue'", "sans-serif"],
        body:    ["'Sora'", "sans-serif"],
        mono:    ["'JetBrains Mono'", "monospace"],
      },
      fontSize: {
        "hero": "clamp(5rem, 11vw, 9.5rem)",
        "sec":  "clamp(2.5rem, 4vw, 3.5rem)",
      },
      boxShadow: {
        "red":    "0 0 36px rgba(224,26,45,0.22)",
        "red-sm": "0 0 14px rgba(224,26,45,0.22)",
        "card":   "0 20px 50px rgba(0,0,0,0.5)",
      },
      borderColor: {
        subtle: "rgba(255,255,255,0.06)",
      },
      backgroundImage: {
        "red-gradient": "linear-gradient(to right, #b8101f, #e01a2d)",
      },
    },
  },
  plugins: [],
};
