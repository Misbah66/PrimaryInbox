// tailwind.config.js

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'custom-gradient-start': '#684FFF',
        'custom-gradient-end': '#B871FE',
      },
    },
  },
  plugins: [],
};
