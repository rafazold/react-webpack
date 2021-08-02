const HtmlPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

const context = resolve(__dirname, 'src');

module.exports = {
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [context],
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.svg$/, loader: '@svg/webpack' },
    ],
  },
  plugins: [
    new HtmlPlugin({
      title: 'Github Search',
    }),
  ],
  devServer: {
    hot: true,
    inline: true,
    historyApiFallback: true,
    progress: true,
    compress: true,
  },
};
