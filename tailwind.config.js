/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins' : ['Poppins', 'sans-serif'],
        'noto' : ['Noto Sans', 'sans-serif']
      },
      animation: {
        'spin-slow': 'spin 2.5s linear infinite',
      }
    },
  },
  plugins: [],
}

