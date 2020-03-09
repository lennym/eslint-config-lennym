module.exports = {
  rules: {
    // filenames must be lower case, hyphen separated
    'filenames/match-regex': [2, '^[a-z]+[a-z\-\.]*[a-z]+$', true],
    // you can't `require` things which are not dependencies per package.json
    'implicit-dependencies/no-implicit': 2,
    'no-only-tests/no-only-tests': 2
  }
}
