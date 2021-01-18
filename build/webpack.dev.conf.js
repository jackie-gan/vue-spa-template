const baseConfig = require('./webpack.base.conf');
const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const style = require('./style');

module.exports = webpackMerge(baseConfig, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'js/[name].debug.js',
    chunkFilename: 'js/[id].debug.js',
    publicPath: '/'
  },
  devtool: 'eval-source-map',
  devServer: {
    hot: true,
    publicPath: '/',
    disableHostCheck: true,
    quiet: false,
    host: '127.0.0.1',
    port: 3000,
    open: true,
    stats: {
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }
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