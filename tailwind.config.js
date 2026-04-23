/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },

      colors: {
        border: '#262626',
        'neon-blue': '#00d4ff',
        'neon-purple': '#764ba2',
        'dark-bg': '#0a0a0a',
        'glass-bg': 'rgba(255, 255, 255, 0.05)',
      },

      backdropBlur: {
        xs: '2px',
      },

      boxShadow: {
        neon: '0 0 20px rgba(0, 212, 255, 0.3)',
        'neon-purple': '0 0 20px rgba(118, 75, 162, 0.3)',
      },
    },
  },
  plugins: [],
};