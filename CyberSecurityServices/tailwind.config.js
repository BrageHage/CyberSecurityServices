/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        MainBackground: "#07141A",
        SecondaryBackground: "#081619",
        ThirdBackground: "#0D2C3E",
        ForthBackground: "#0E3A4F",
        MainButton: "#39ECF3",
        SecondaryButton: "#317F7F",
        MainText: "#FFFFFF",
        FirstGradient: "#348680",
        SecondGradient: "#2d5a79",
      },
      fontFamily: {
        TimesNewRoman: ["Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};
