/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#050505",
        purple: "#7e22ce",
        purpleLight: "#c4b5fd",
      },

     fontFamily: {
  orbitron: ['Orbitron', 'sans-serif'],
  daggersquare: ['DaggerSquare', 'sans-serif'],
  space: ['Space Grotesk', 'sans-serif'],
  rajdhani: ['Rajdhani', 'sans-serif'],
}


    },
  },
  plugins: [],
};
