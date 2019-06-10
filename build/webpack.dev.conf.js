const baseConfig = require('./webpack.base.conf');
const webpackMerge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = webpackMerge(baseConfig, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].debug.js',
    chunkFilename: 'js/[id].debug.js',
    publicPath: '/js/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      inject: true
    })
  ]
});