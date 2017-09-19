module.exports = {
  extends: [
    'semistandard',
    './rules/core.js',
    './rules/style.js'
  ],
  env: {
    node: true,
    es6: true
  },
  plugins: [
    'implicit-dependencies',
    'filenames'
  ]
};