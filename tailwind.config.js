/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fatFace: ['Abril Fatface', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '1280px',
    },
    },
  },
  plugins: [],
}