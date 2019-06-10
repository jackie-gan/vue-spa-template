const webpack = require('webpack');
const webpackConfig = require('./webpack.prod.conf');

webpack(webpackConfig, (err) => {
  if (err) throw err;
});