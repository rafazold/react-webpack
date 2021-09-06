const HtmlPlugin = require('html-webpack-plugin');
const { resolve, join } = require('path');
const Dotenv = require('dotenv-webpack');

const publicPath = process.env.PUBLIC_PATH || '/';

const context = resolve(__dirname, 'src');

module.exports = {
  output: {
    publicPath,
    path: resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: context,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.svg$/, loader: '@svg/webpack' },
      {
        test: /\.(png|jpe?g|ico|gif|woff2?|ttf|eot)(\?-.*)?$/,
        loader: 'url-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new HtmlPlugin({
      title: 'Github Search',
    }),
    new Dotenv(),
  ],
};
