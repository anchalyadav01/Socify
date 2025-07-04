/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
  require('daisyui'),
  require('@tailwindcss/line-clamp'),
],
  daisyui: {
    themes: ['dark'],
    darkTheme: 'dark',
  },
};
