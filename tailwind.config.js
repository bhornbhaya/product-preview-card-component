/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
    },
    screens: {
      'xxs': '3em',
      // => @media (min-width: 320px)
      'xs': '20em',
      // => @media (min-width: 481px)
      'sm': '30.06em',
      // => @media (min-width: 641px)
      'md': '40.06em',
      // => @media (min-width: 961px)
      'lg': '60.06em',
      // => @media (min-width: 1025px)
      'xl': '64.06em',
      // => @media (min-width: 1281px)
      '2xl': '80.06em'
    },
    colors: {
      'dark-cyan': '#3c8067',
      'very-dark-cyan': '#004747',
      'cream': '#f2ebe3',
      'very-dark-blue': '#1c232b',
      'dark-grayish-blue': '#6c7289',
      'white': '	#ffffff'
    },
    fontFamily: {
      'title': 'Fraunces, serif',
      'body': 'Montserrat, sans-serif',
    },
  },
  plugins: [],
}
