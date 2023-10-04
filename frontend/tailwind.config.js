/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        flipHorizontal : {
          '50%': { transform: 'rotateY(180deg)' },
        },
      },
      
      animation: { 
        hflip : 'flipHorizontal 2s '
      },
      backgroundImage: {
        'cust-contact-us': 'url("./src/assets/contact-us.png")',
      },
    },
  },
  plugins: [],
  
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce']
  }

};
