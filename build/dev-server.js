const webpackConfig = require('./webpack.dev.conf');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const opn = require('opn');

const compiler = webpack(webpackConfig);

const devServerConfig = {
  publicPath
};

const server = new webpackDevServer(compiler, {
  publicPath: '',
  hot: true,
  disableHostCheck: true
});