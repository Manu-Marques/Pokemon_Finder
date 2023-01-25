module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'search' : '700px',
      },
      spacing: {
        'space' : '650px',
      },
      colors: {
        'bluekemon':  '#17285e',
      },
    },
  },
  plugins: [
    require('@shrutibalasa/tailwind-grid-auto-fit'),
  ],
}
