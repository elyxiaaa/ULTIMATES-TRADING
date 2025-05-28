/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        DEFAULT: '20px',
      },
      backgroundImage: {
        'BG1': "url('/src/assets/BG1.jpg')",
        'BG2': "url('/src/assets/Indigo.jpg')",
        'BG3': "url('/src/assets/BG3.jpg')", 
        'BG4': "url('/src/assets/BG4.jpg')", 
        'BG5': "url('/src/assets/Gradient.jpg')", 
        'BGHeader': "url('/src/assets/header.jpg')", 
        'BGModal': "url('/src/assets/HomeModal.jpg')", 
      },
      animation: {
        'fade-in': 'fade-in 3s ease-out forwards',
        'slide-right': 'slide-right 1s ease-out forwards',
        'slide-top': 'slide-top 1s ease-out forwards',  // Added slide-top animation
        'slide-bottom': 'slide-bottom 1s ease-out forwards', // Added slide-bottom animation
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-top': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-bottom': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [daisyui],
}
