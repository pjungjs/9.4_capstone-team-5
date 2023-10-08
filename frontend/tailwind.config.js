/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const custClass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        heartBeat: {
          '0%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.3)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.3)' },
          '70%': { transform: 'scale(1)' },
        },
      },
      animation: { heartBeat: 'heartBeat 3s ' },
      backgroundImage: {
        'cust-contact-us': 'url("./src/assets/contact-us.png")',
      },
      fontFamily: {
        bungee: ['bungee spice'],
      },
    },
  },
  plugins: [require('tailwindcss-animated'), custClass],
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce'],
  },
};
