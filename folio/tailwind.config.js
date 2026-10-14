/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./assets/js/*.js"
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg, #F5F3EF)",
        ink: "var(--color-ink, #111111)",
        warmGray: "var(--color-warm-gray, #8C857B)",
        lightLine: "var(--color-light-line, #E4DFD6)",
        coral: "var(--color-coral, #E4572E)"
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Inter'", "-apple-system", "sans-serif"]
      },
      borderRadius: {
        DEFAULT: "4px",
        sm: "4px",
        md: "4px",
        lg: "4px"
      }
    }
  },
  plugins: []
};
