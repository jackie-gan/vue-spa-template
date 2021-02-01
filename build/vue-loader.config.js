const { cssLoaders } = require('./style-rules');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  loaders: cssLoaders({
    sourceMap: false,
    extract: isProduction
  })
};
