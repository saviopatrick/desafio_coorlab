/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height:{
        'height': '42.00rem',
      },
      colors:{
        'primary-color': '#2B2F42', 
        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

