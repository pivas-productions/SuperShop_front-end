import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "main-bg-to-white": "linear-gradient(to bottom, transparent 2%, rgb(var(--background-end-rgb)) 0%, rgb(255, 255, 255) 99% )"
      },
      colors: {
        'button-bg': '#C0392B',
        'button-text': '#FFFFFF',
        'text-color-primary': '#000000',
        'text-color-additation': '#333333',
        'yellow': {
          500: '#FFC107', // ваш желтый цвет
        },
      },
      boxShadow: {
        "mega-shadow": "0px 5px 10px 0 rgba(0,0,0,0.5)"
      },
      strokeWidth: {
        20: '20',
      },
      animation: {
        'arrow_down': 'arrow-down 2s infinite',
        'filters-show': 'filters-show 2s easy-in-out',
        'slideDown': 'slide-down-accordion 300ms ease-out',
        'slideUp': 'slide-up-accordion 300ms ease-out',
      },
      keyframes: {
        'arrow-down': {
          '0%': {
            opacity: 0,
            transform: 'translate(-50%,-20px)'
          },
          '50%': { opacity: 1 },
          '100%': {
            opacity: 0,
            transform: 'translate(-50%, 3.75rem)'
          },
        },
        'filters-show': {
          '0%': {
            // left: '-50rem',
            transform: 'translateX(-150%)'
          },
          '100%': {
            // opacity: 0,
            transform: 'translateX(0)'
          },
        },
        'slide-down-accordion': {
          'from': {
            height: '0'
          },
          'to': {
            height: 'var(--radix-accordion-content-height)',
          }
        },        
        'slide-up-accordion': {
          'from': {
            height: 'var(--radix-accordion-content-height)',
          },
          'to': {
            height: '0'
          }
        }
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'animate-delay': (value) => ({
            animationDelay: value,
          }),
        },
        { values: theme('transitionDelay') }
      )
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'animate-duration': (value) => ({
            animationDuration: value,
          }),
        },
        { values: theme('transitionDuration') }
      )
    }),
  ],
    
};