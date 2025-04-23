/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'ui-sans-serif', 'system-ui'],
        'serif': ['Libre Baskerville', 'ui-serif', 'Georgia'],
      },
      colors: {
        amber: {
          50: '#FEF9E7',
          100: '#FCF0CF',
          200: '#F9E29B',
          300: '#F6D267',
          400: '#F3C646',
          500: '#F1BB2B',
          600: '#D39E18',
          700: '#AA7D13',
          800: '#805E0E',
          900: '#573F09',
        },
      },
      animation: {
        'fadeIn': 'fadeIn 0.6s ease-out forwards',
        'float': 'float 5s ease-in-out infinite',
        'pulse': 'pulse 2s ease-in-out infinite',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      scale: {
        '102': '1.02',
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-amber-300',
    'bg-amber-400',
    'bg-amber-500',
    'bg-amber-600',
  ],
};