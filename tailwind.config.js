/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#1f2520',
          deep: '#18211d',
          muted: '#60716a',
          soft: '#526158',
        },
        paper: {
          DEFAULT: '#f3f0e8',
          elevated: '#faf8f4',
        },
        forest: {
          DEFAULT: '#173f35',
          light: '#1e5246',
        },
        slate: {
          brand: '#38556a',
        },
        amber: {
          brand: '#b86f24',
          muted: '#8b6a3b',
        },
        warm: {
          border: '#cfc7b8',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Noto Serif SC', 'serif'],
        sans: ['Noto Sans SC', 'system-ui', 'sans-serif'],
        serif: ['Noto Serif SC', 'Fraunces', 'serif'],
      },
      boxShadow: {
        editorial: '0 4px 24px rgba(23, 63, 53, 0.08)',
        'editorial-lg': '0 8px 32px rgba(23, 63, 53, 0.12)',
      },
    },
  },
  plugins: [],
};