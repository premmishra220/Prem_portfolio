/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['Syne', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },

      colors: {
        'dark-bg': '#080808',
        'dark-surface': '#0e0e11',
        'dark-card': '#121215',
        'dark-elevated': '#18181c',
        'dark-border': 'rgba(255, 255, 255, 0.08)',
        'dark-muted': '#94949e',
        'gold': {
          DEFAULT: '#e5b85c',
          400: '#f3d082',
          500: '#e5b85c',
          600: '#c89e47',
          dim: 'rgba(229, 184, 92, 0.12)',
          border: 'rgba(229, 184, 92, 0.25)',
        },
        border: 'rgba(255, 255, 255, 0.08)',
        'neon-blue': '#e5b85c',
        'neon-purple': '#c89e47',
        'glass-bg': 'rgba(255, 255, 255, 0.03)',
      },

      letterSpacing: {
        'widest-editorial': '0.25em',
        'tight-editorial': '-0.035em',
      },

      backdropBlur: {
        xs: '2px',
      },

      boxShadow: {
        'editorial': '0 20px 80px rgba(0, 0, 0, 0.65)',
        'editorial-subtle': '0 10px 40px rgba(0, 0, 0, 0.45)',
        'gold-glow': '0 0 35px rgba(229, 184, 92, 0.18)',
        neon: '0 0 25px rgba(229, 184, 92, 0.2)',
        'neon-purple': '0 0 25px rgba(229, 184, 92, 0.15)',
      },
    },
  },
  plugins: [],
};