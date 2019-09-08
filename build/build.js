const webpack = require('webpack');
const webpackConfig = require('./webpack.prod.conf');

process.env.NODE_ENV = 'production';

webpack(webpackConfig, (err) => {
  if (err) throw err;
});