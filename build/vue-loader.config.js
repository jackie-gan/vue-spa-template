const { cssLoaders } = require('./style');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  loaders: cssLoaders({
    sourceMap: false,
    extract: isProduction
  })
};
