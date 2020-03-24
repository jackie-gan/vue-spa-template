const baseConfig = require('./webpack.base.conf');
const webpackMerge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const style = require('./style');

module.exports = webpackMerge(baseConfig, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[id].[chunkhash:8].js',
    publicPath: ''
  },
  module: {
    rules: style.styleLoaders({
      sourcemap: false,
      extract: true
    })
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: path.resolve(__dirname, '../dist/index.html'),
      inject: true,
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ]
});