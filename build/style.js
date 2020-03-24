const ExtractTextPlugin = require('extract-text-webpack-plugin')

exports.cssLoaders = function(options) {
  options = options || {};

  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  };

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  };

  function generateLoaders(loader, loaderOptions) {
    const loaders = [cssLoader];

    if (loader) {
      // add postcss
      loaders.push(postcssLoader);
      loaders.push({
        loader: `${loader}-loader`,
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      });
    }

    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    }
    return ['vue-style-loader'].concat(loaders);
  }

  return {
    css: generateLoaders(),
    sass: generateLoaders('sass'),
    scss: generateLoaders('sass')
  };
};

exports.styleLoaders = function(options) {
  const output = [];
  const loaders = exports.cssLoaders(options);
  for (let extension in loaders) {
    const loader = loaders[extension];
    output.push({
      test: new RegExp(`\\.${extension}$`),
      use: loader
    });
  }
  return output;
};