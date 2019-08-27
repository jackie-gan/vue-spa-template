const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

const loaderInclude = [
  resolve('src')
];

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
        include: loaderInclude
      }
    ]
  }
};