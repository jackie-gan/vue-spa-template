const webpackConfig = require('./webpack.dev.conf');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const opn = require('opn');

process.env.NODE_ENV = 'development';

const compiler = webpack(webpackConfig);

const server = new webpackDevServer(compiler, {
  publicPath: '',
  hot: true,
  disableHostCheck: true,
  stats: {
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }
});

const uri = 'http://localhost:3000';

server.listen(3000, '0.0.0.0', () => {
  opn(uri);
});