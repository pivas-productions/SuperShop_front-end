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
        'overlayShow': 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        'contentShow': 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
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
        },
        'overlayShow': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'contentShow': {
          from: { opacity: '0', transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
        },
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translateY(-2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: '0', transform: 'translateX(2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideUpAndFade: {
          from: { opacity: '0', transform: 'translateY(2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: '0', transform: 'translateX(-2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
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