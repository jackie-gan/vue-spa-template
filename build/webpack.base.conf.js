const path = require('path');
const vueLoaderConfig = require('./vue-loader.config');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

const loaderInclude = [
  resolve('src')
];

const loaderExclude = []

module.exports = {
  entry: {
    app: './src/main.js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', 'scss']
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        exclude: /node_modules/,
        include: loaderInclude,
        loader: 'eslint-loader',
        enforce: 'pre',
        options: {
          formatter: require("eslint-friendly-formatter")
        }
      },
      {
        test: /\.(vue)$/,
        loader: 'vue-loader',
        include: loaderInclude,
        options: vueLoaderConfig
      },
      {
        test: /\.(js)$/,
        loader: 'babel-loader',
        include: loaderInclude,
        exclude: loaderExclude
      }
    ]
  }
};