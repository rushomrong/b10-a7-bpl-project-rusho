/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Sora: '"Sora", sans-serif',
    },

    colors: {
      coinColor: "#131313",
      rightBtnBorder: "rgba(19, 19, 19, 0.1)",
      bannerBg: "rgb(19, 19, 19)",
      white: "#fff",
      lightWhite: "rgba(255, 255, 255, 0.7)",
      btnBg: "rgb(231, 254, 41)",
      leftGradient: "#C7ECF7",
      rightGradient: "#FAE0A7",
      middleGradient: "#fff",
      leftBtnGradient: "#E18FC0",
      rightBtnGradient: "#FDD156",
      footerBg: "#06091A",
      footerText: "rgb(152 152 152 / 60%)",
    },
  },

  plugins: [require("daisyui")],
};
