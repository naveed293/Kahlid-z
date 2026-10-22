/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#12304A',
          50: '#EEF3F8',
          100: '#DCE7F0',
          200: '#B9CEE1',
          300: '#8FAECC',
          400: '#5C86B0',
          500: '#3B6291',
          600: '#264A72',
          700: '#1A3C5F',
          800: '#12304A',
          900: '#0C2337',
        },
        medical: {
          DEFAULT: '#1677C8',
          50: '#EEF6FD',
          100: '#D8ECFA',
          200: '#B2D8F4',
          300: '#7FBDEB',
          400: '#479DDE',
          500: '#2184D2',
          600: '#1677C8',
          700: '#125FA2',
          800: '#114E83',
          900: '#12416B',
        },
        teal: {
          DEFAULT: '#20B2AA',
          50: '#EFFBF9',
          100: '#D5F5F2',
          200: '#ACEBE6',
          300: '#79DCD5',
          400: '#44C7BF',
          500: '#20B2AA',
          600: '#189A93',
          700: '#177B76',
          800: '#17625F',
          900: '#17524F',
        },
        surface: '#F4F8FB',
        ink: '#263746',
        muted: '#687786',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
        display: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(18, 48, 74, 0.04), 0 8px 24px rgba(18, 48, 74, 0.06)',
        'card-hover': '0 4px 8px rgba(18, 48, 74, 0.06), 0 18px 40px rgba(18, 48, 74, 0.12)',
        band: '0 24px 60px rgba(18, 48, 74, 0.16)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0px' },
          to: { height: 'var(--radix-accordion-content-height, auto)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        floaty: 'floaty 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
