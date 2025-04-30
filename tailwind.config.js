/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#08162c',
        'accent': '#64ffda',
        'accent-hover': '#00d4ff',
        'text-light': '#ccd6f6',
      },
      fontFamily: {
        inter: ['Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'system-ui', 'sans-serif'],
        fira: ['Fira Code', 'Courier New', 'Courier', 'monospace'],
        audiowide: ['Audiowide', 'Comic Sans MS', 'cursive'],
        orbitron: ['Orbitron', 'Eurostile', 'sans-serif'],
        caveat: ['Caveat', 'Brush Script MT', 'cursive'],
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
      blur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px',
        '3xl': '60px',
        '4xl': '120px', // For cursor-light
      },
      zIndex: {
        '-10': '-10',
      }
    },
  },
  plugins: [],
}
