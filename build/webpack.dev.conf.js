const baseConfig = require('./webpack.base.conf');
const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const style = require('./style');

module.exports = webpackMerge(baseConfig, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].debug.js',
    chunkFilename: 'js/[id].debug.js',
    publicPath: ''
  },
  module: {
    rules: style.styleLoaders({
      sourcemap: false
    })
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      inject: true
    })
  ]
});