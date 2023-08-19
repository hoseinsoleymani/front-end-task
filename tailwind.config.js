/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#00B4D8',
          200: '#212B36',
          300: '#0090FF',
          400: '#03045E',
        },
        gray: {
          100: '#919EAB52',
          200: '#919EAB3D',
          300: '#919EAB',
          400: '#637381',
          500: '#b5b5b5',
        },
      },
      fontFamily: {
        sans: ['poppins', ...defaultTheme.fontFamily.sans],
        display: ['poppins', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        sm: '0.9375rem',
        base: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
    container: {
      center: true,
      padding: '2rem',
    },
  },
  plugins: [],
};
