/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        'bounce-in-down': {
          '0%, 100%': {
            transform: 'translateY(-100%)',
            opacity: '0',
          },
          '50%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        'bounce-in-down': 'bounce-in-down 1s ease-out',
      },
    },
  },
  plugins: [],
}
