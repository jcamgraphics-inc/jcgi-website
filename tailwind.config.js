/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#2463eb",
        "background-light": "#f6f6f8",
        "background-dark": "#111621",
        "navy-deep": "#0F172A",
      },
      fontFamily: {
        "display": ["Manrope", "sans-serif"],
        "heading": ["Clash Display", "sans-serif"]
      },
      borderRadius: {"DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem"},
    },
  },
  plugins: [
  ],
}
