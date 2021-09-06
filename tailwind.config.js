module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/**/*.jsx', './src/**/**/*.js', './src/index.js'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'card-white': '#efeeee',
      },
      spacing: { '17%': '17%' },
      boxShadow: {
        main: '0 3px 20px 0 rgba(0, 0, 0, 0.45)',
        white: '6px 6px 6px rgb(209 205 199 / 32%), -6px -6px 6px #fff;',
      },
      fontFamily: {
        primary: [
          '-apple-system',
          'system-ui',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
    },
  },
  plugins: [],
};
