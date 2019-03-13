module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: ['airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': ['error'],
    'react-hooks/rules-of-hooks': ['error'],
    'react/jsx-filename-extension': ['off'],
    'react/forbid-prop-types': ['off'],
    'linebreak-style': ['off'],
    'no-use-before-define': ['off'],
    'no-underscore-dangle': ['off'],
    quotes: ['error', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true
    }],
    semi: ['error', 'never'],
  },
}
