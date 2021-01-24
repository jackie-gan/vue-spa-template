module.exports = {
    dev: {
        devtool: 'cheap-module-eval-source-map',
        host: '127.0.0.1',
        port: 3000
    },
    build: {
        needSourceMap: true,
        devtool: 'source-map'
    } 
};
