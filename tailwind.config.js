/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        slideInFromLeft: {
          '0%': { transform: 'translateX(-50%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInFromRight: {
          '0%': { transform: 'translateX(50%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        slideInFromLeft: 'slideInFromLeft 1s forwards',
        slideInFromRight: 'slideInFromRight 1s forwards',
      },
      scrollBehavior: {
        smooth: 'smooth',
      },
      fontFamily:{
        dm: ['DM Serif Display', 'serif'],
        mon: ['Montserrat', 'sans-serif']
      },
      colors:{
        primary: '#DADAD4',
        900: '#080800',
        800: '#14140D',
        700: '#212119',
        600: '#2D2D26',
        500: '#393933',
        400: '#464640',
        300: '#6B6B66',
        200: '#838380',
        100: '#9C9C99',
        99: '#B5B5B2',
        secondary: '#BB936D' 
      }
    },
  },
  variants: {
    scrollBehavior: ['responsive'],
  },
  plugins: [],
}

