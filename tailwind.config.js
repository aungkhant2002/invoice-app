/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      'sans': ['Montserrat', 'Padauk', 'sans-serif'],
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '8rem',
      },
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ]
}