/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        red: {
          '9net': '#D83D52'
        },
        indigo: {
          'upya': '#7254E5'
        },
        blue: {
          'talenthackers': '#0A425B'
        }
      },
      keyframes: {
        techIcons: {
          '20%': {
            filter: 'blur(0)'
          },
          '50%': {
            opacity: 0.4,
            filter: 'blur(0)'
          },
          '70': {
            filter: 'blur(0)'
          },
          '100%': {
            opacity: 0,
            filter: 'blur(0.5)',
            transform: 'translate3d(0, -100px, 0)'
          }
        }
      },
      animation: {
        'tech-icon': 'techIcons 4s',
      }
    },
  },
  safelist: [
    { pattern: /(bg|text)-(red|blue|indigo)-(100|200|300|400|500|600|700|800|900|9net|upya|talenthackers)/ },
    { pattern: /(bg|text)-black/ }
  ],
  plugins: [],
}
