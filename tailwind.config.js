/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        bgBlack: '#2B2A30',
      },
      transitionDelay: {
        oneSec: '1s',
      },
      transitionDuration: {
        zero: '0s',
        oneSec: '1s',
        twoSec: '2s',
      },
      rotate: {
        full: '360deg',
        minus: '90deg',
      },
      transitionDuration: {
        '0.2s': '0.2s',
      },
      spacing: {
        top45: '6%',
        center: '50%',
      },
    },
  },
  plugins: [],
};
