/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        point: {
          50: "#F1F9F3",
          100: "#DCEFE2",
          200: "#B9DFC6",
          300: "#96CFA9",
          400: "#73BF8D",
          500: "#50AE70",
          600: "#50A57E",
          700: "#3F8363",
          800: "#2F6049",
          900: "#1D3D2E",
          focus: "#132D21",
        },
        gray: {
          50: "#F2F4F6",
          100: "#EAECF0",
          200: "#D6D9DE",
          300: "#BDC1C8",
          400: "#9A9DA3",
          500: "#71767E",
          600: "#4D5158",
          700: "#35383F",
          800: "#20232B",
          900: "#111620",
        },
        black: "#111620",
        info: "#D6D9DE",
        success_green: "#50AE70",
        success_blue: "#3F8CFF",
        error: "#FF4B4B",
        disable_bg: "#EAECF0",
        disable_text: "#BDC1C8",
      },
      boxShadow: {
        app_bar: "0px 0px 12px 0px rgba(113, 118, 126, 0.18)",
      },
    },
  },
  plugins: [],
};
