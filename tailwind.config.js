/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(20px)' },
        },
        flash: {
          '0%': { opacity: '0%' },
          '15%': { opacity: '0%' },
          '100': { opacity: '40%' },
        },
        fadeIn: {
          from: { opacity: '0%' },
          to: { opacity: '100%' },
        },
        slideFade: {
          '0%': { transform: 'translateY(0px)', opacity: '0%' },
          '100%': { transform: 'translateY(20px)', opacity: '100%' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        rotate: 'rotate 5s linear infinite',
        slide: 'slide 1s forwards',
        flash: 'flash 1s forwards',
        fade: 'fadeIn .5s ease-in-out forwards',
        slideFade: 'slideFade 1s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}

//#979089 secondary
// primary #a39a8f