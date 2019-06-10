const webpackConfig = require('./webpack.dev.conf');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const opn = require('opn');

const compiler = webpack(webpackConfig);

const devServerConfig = {
  publicPath: '',
  hot: true,
  disableHostCheck: true
};

const server = new webpackDevServer(compiler, devServerConfig);

const uri = 'http://localhost:3000';

server.listen(3000, '0.0.0.0', () => {
  opn(uri);
});