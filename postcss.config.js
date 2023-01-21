module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', {runtime: 'automatic'}],
  ],
}
