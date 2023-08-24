/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'contact-us': 'url("./src/assets/contact-us.png")',
      },
    },
  },
  plugins: [],
};
