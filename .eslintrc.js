module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  extends: ['plugin:vue/essential', 'airbnb-base'],
  plugins: [
    'prefer-object-spread'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  rules: {
    "import/no-unresolved": "off",
    "import/extensions":"off",
    "import/no-dynamic-require": "off",
    "global-require": "off",
    "comma-dangle": ["error", "only-multiline"],
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // allow console during development
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off"
  }
};