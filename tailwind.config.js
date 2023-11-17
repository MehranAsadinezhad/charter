/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Vazir",
        iranBold: "iran-bold",
        iranReg: "iran-regular",
      },
      colors: {
        primary: "#a02777",
        darkPrimary: "#690e4a",
        darkestPrimary: "#5c083f",
        secondary: "#ffa903",
        light: "#f9fafb",
        graay: "#f2f2f2",
        darkGray: "#575757",
        skyDark: "#2aacd5",
        gg: "#818181",
        lightGray:"#d1d5db",
        darkBlue: "#0f6698",
        pink: "#c873eb",
        darkestBlue: "#3782aa",
      },
    },
  },
  plugins: [],
};
