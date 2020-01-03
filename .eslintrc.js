// https://eslint.org/docs/user-guide/configuring
const vueRules = require('eslint-config-valantic/plugins/vue');

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  env: {
    browser: true,
  },
  extends: [
    'valantic',
    'plugin:vue/recommended',
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
    // 'html' // eslint-plugin-html
  ],
  // Uses eslint-import-resolver-webpack
  settings: {

  },
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    ...vueRules,
    'require-jsdoc': [2, {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: true,
        ArrowFunctionExpression: true,
        FunctionExpression: false
      }
    }],

    // don't require .vue extension when importing
    'import/extensions': [0, 'always', {
      js: 'never',
      vue: 'never'
    }],
    'vue/attributes-order': [2, {
      'order': [
        'CONDITIONALS',
        [
          'LIST_RENDERING',
          'RENDER_MODIFIERS',
          'OTHER_DIRECTIVES',
          'TWO_WAY_BINDING',
          'CONTENT'
        ],
        'DEFINITION',
        'GLOBAL',
        'UNIQUE',
        'OTHER_ATTR',
        'EVENTS',
      ]
    }],
    "id-length": [2, {"min": 3, "max": 10, "properties": "never", "exceptions": ["x", "to"]}]
  },
  globals: {
  }
};
