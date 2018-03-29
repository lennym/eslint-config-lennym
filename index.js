module.exports = {
  extends: [
    'semistandard',
    'plugin:react/recommended',
    './rules/core.js',
    './rules/style.js',
    './rules/react.js'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    node: true,
    es6: true
  },
  plugins: [
    'implicit-dependencies',
    'filenames',
    'react'
  ]
};