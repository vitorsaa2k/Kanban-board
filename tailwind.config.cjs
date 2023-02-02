/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      boxShadow: {
        taskShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        check: "0px 1px 2px 2px rgba(0, 0, 0, 0.10)"
      },
      fontSize: {
        "my-sm": "1rem",
        "my-lg": "1.25rem",
      },
      colors: {
        "my-green": "#79A41F",
        "my-blue": "#0080FE",
        "my-orange": "#F08538",
        "my-gray-200": "#E6E6E6",
        "my-gray-800": "#404040",
        "my-gray-900": "#222222",
        "my-red-200": "#FA9494",
        "my-red-600": "#FE2828",
      }
    },
    fontFamily: {
      custom: ['Inter', 'sans-serif']
    },
    animation: {
      slide: 'slide 0.5s ease-in-out'
    },
    keyframes: {
      slide: {
        '0%': {transform: 'translate(0, 0)'},
        '100%': {transform: 'translate(0, 20px)'}
      }
    },

  },
  plugins: [],
}