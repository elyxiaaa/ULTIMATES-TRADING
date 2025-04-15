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
             'BG2': "url('/src/assets/BG2.jpg')",
             'BG3': "url('/src/assets/BG3.jpg')",
     
           },
  },
},
  plugins: [daisyui,],
}

