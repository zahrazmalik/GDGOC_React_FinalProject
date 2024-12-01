/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors ba
        almostWhite: "hsl(0, 0%, 98%)",
        mediumGray: "hsl(0, 0%, 41%)",
        almostBlack: "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        //  Epilogue font
        epilogue: ["Epilogue", "sans-serif"],
      },
      fontWeight: {
        // Custom font weights
        medium: 500,
        bold: 700,
      },
      screens: {
        // Custom breakpoints
        mobile: "375px",
        desktop: "1440px",
      },
      spacing: {
        //custom spacing
        18: "4.5rem", 
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      boxShadow: {
        // custom shadows for polished UI
        custom: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};