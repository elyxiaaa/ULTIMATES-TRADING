/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'BG1': "url('/src/assets/BG1.jpg')",
        'BG2': "url('/src/assets/Indigo.jpg')",
        'BG3': "url('/src/assets/BG3.jpg')", 
        'BG4': "url('/src/assets/BG4.jpg')", 
        'BG5': "url('/src/assets/Gradient.jpg')", 
        'BGHeader': "url('/src/assets/header.jpg')", 
      },
      animation: {
        'fade-in': 'fade-in 3s ease-out forwards',
        'slide-right': 'slide-right 1s ease-out forwards',
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
      },
    },
  },
  plugins: [daisyui],
}
