module.exports = {
  extends: [
    './rules/core'
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