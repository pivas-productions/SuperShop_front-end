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
      strokeWidth: {
        20: '20',
      },
      animation: {
        'arrow_down': 'arrow-down 2s infinite',
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
    }),],
};