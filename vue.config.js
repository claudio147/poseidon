const path = require('path');

module.exports = {
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    }
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/styles/_globals.scss'),
      ]
    }
  }
};
