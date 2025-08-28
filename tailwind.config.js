/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E31E24',
          dark: '#C11920',
          light: '#FF2C32',
        },
        secondary: {
          DEFAULT: '#1A1A1A',
          dark: '#000000',
          light: '#333333',
        },
        transparentPrimary: {
          DEFAULT: 'rgba(227, 30, 36, 0.5)',
          hover: 'rgba(227, 30, 36, 0.8)',
        },
      },
    },
  },
  plugins: [],
};