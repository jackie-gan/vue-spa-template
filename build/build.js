const webpack = require('webpack');
const webpackConfig = require('./webpack.prod.conf');

console.log('build start \n');

webpack(webpackConfig, (err, stats) => {
  if (err) throw err;

  process.stdout.write(`${stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  })}\n\n`);
});