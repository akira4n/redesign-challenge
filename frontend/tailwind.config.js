/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2B4578', // Navy
          dark: '#1e3054',
          light: '#3d61a8',
          lightest: '#f0f4fc',
        },
        accent: {
          red: '#E63946',
          green: '#2A9D8F',
          blue: '#3A86FF',
          yellow: '#E9C46A',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 10px 30px -10px rgba(43, 69, 120, 0.1), 0 1px 3px rgba(43, 69, 120, 0.05)',
      }
    },
  },
  plugins: [],
}
