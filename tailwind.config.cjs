/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontSize: {
        "my-sm": "1rem",
        "my-lg": "1.25rem",
      },
      colors: {
        "my-green": "#79A41F",
        "my-blue": "#0080FE",
        "my-orange": "#F08538",
        "my-gray-200": "#E6E6E6",
        "my-gray-900": "#222222",
      }
    },
    fontFamily: {
      custom: ['Inter', 'sans-serif']
    }
  },
  plugins: [],
}