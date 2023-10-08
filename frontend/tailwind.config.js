/** @type {import('tailwindcss').Config} */
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
  plugins: [require('tailwindcss-animated')],

  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce'],
  },
};
