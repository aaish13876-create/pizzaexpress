/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          50: '#f6f4f2',
          100: '#e9e4df',
          200: '#cfc6bd',
          300: '#a89d92',
          400: '#7a6f64',
          500: '#564d44',
          600: '#3d352e',
          700: '#2a2420',
          800: '#1c1815',
          900: '#13100e',
          950: '#0c0a09',
        },
        ember: {
          50: '#fdf6ed',
          100: '#fae8cf',
          200: '#f5cd9a',
          300: '#efa85f',
          400: '#ea8a32',
          500: '#e06a1a',
          600: '#c44f12',
          700: '#a23a12',
          800: '#823016',
          900: '#6b2915',
          950: '#3b1308',
        },
        cream: {
          50: '#fdfbf8',
          100: '#faf5ec',
          200: '#f3e9d4',
          300: '#ead8b5',
          400: '#dec392',
        },
        sage: {
          400: '#7fa075',
          500: '#5f8554',
          600: '#47663e',
        },
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fade-in 1s ease forwards',
        'scale-in': 'scale-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        flicker: 'flicker 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
