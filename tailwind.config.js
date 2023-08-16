/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        point: {
          50: "#eceafd",
          100: "#eceafa",
          200: "#ada7f7",
          300: "#8b84f4",
          400: "#7365f0",
          500: "#5e45ea",
          600: "#593bde",
          700: "#512ed1",
          800: "#4a1fc5",
          900: "#4100ad",
        },
      },
    },
  },
  plugins: [],
};
