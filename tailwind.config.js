/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'sierra-orange': '#e85414',
        'sierra-dark': '#1a1a1a',
        'sierra-light': '#f8f9fa',
        'sierra-gray': '#6b7280',
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#e85414',
          600: '#d44812',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
      boxShadow: {
        'sierra': '0 4px 6px -1px rgba(232, 84, 20, 0.1), 0 2px 4px -1px rgba(232, 84, 20, 0.06)',
      },
    },
  },
  plugins: [],
};