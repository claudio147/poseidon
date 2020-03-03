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
  },

  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 10240 }))
  }
};
