const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const webpackConfig = require('./webpack.dev.conf');
const config = require('../config/index');

const devServerConfig = {
    hot: true,
    publicPath: '/',
    disableHostCheck: true,
    quiet: false,
    host: config.dev.host,
    open: true,
    stats: {
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }
};

console.log('dev server starting...');

const compiler = webpack(webpackConfig);

const server = new WebpackDevServer(compiler, devServerConfig);

module.exports = new Promise((resolve, reject) => {
    console.log(`staring at prot: ${config.dev.port}`);
    server.listen(config.dev.port, (error) => {
        if (error) {
            reject(error);
            console.error(error);
            return;
        }

        resolve();
    });
});
