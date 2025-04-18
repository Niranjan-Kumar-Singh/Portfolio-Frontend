/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        code: ['Fira Code', 'monospace'],
        heading: ['Fugaz One', 'sans-serif'],
        title: ['Orbitron', 'sans-serif'],
        cursive: ['Caveat', 'cursive'],
      },
      fontSize: {
        sm: "14px",
        base: "16px",
        md: "18px",
        lg: "20px",
        xl: "24px",
        "2xl": "30px",
        "3xl": "36px",
        "4xl": "48px",
        "5xl": "60px",
        "6xl": "72px",
        "7xl": "80px",
      },
      letterSpacing: {
        tighter: "-0.05em",
        widest: "0.2em",
      },
      lineHeight: {
        tight: "1.1",
        relaxed: "1.75",
      },
    },
  },
  plugins: [],
};
