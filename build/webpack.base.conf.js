const path = require('path');
const vueLoaderConfig = require('./vue-loader.config');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

const loaderInclude = [
  resolve('src')
];

const loaderExclude = []

const config = {
  entry: {
    app: './src/main.js',
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', 'scss'],
    alias: {
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      // 当使用use的时候，loader的执行顺序为从后往前，例如：
      // use: ['style-loader', 'css-loader', 'sass-loader']
      // 最先执行的是sass-loader
      {
        test: /\.(vue)$/,
        loader: 'vue-loader',
        include: loaderInclude,
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: loaderInclude,
      }
    ]
  },
  plugins: [
    new ESLintWebpackPlugin()
  ]
};

module.exports = config;
