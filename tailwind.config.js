/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        primaryPink: '#FF76A2',
        secondaryPink: '#D49CA9',
        primaryBlack: '#151515'
      },
      icon: {
        font: 'bold'
      }
    },
  },
  plugins: [],
}

