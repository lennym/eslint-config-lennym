module.exports = {
  extends: [
    './rules/core.js'
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