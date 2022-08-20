/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        red: {
          '9net': '#D83D52',
        },
        indigo: {
          'upya': '#7254E5'
        }
      },
    },
  },
  plugins: [],
}
