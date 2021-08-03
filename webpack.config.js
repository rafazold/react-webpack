const HtmlPlugin = require('html-webpack-plugin');
const { resolve, join } = require('path');
const Dotenv = require('dotenv-webpack');

const publicPath = process.env.PUBLIC_PATH || '/';

const context = resolve(__dirname, 'src');

module.exports = {
  output: {
    publicPath: publicPath,
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
  devServer: {
    hot: true,
    inline: true,
    historyApiFallback: true,
    progress: true,
    compress: true,
  },
};
