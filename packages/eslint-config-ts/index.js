module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    '@xyfebaby/eslint-config-base/rules/style',
    'plugin:@typescript-eslint/recommended',
    ...[
      // './rules/all.js',
      './rules/overrides-eslint.js',
    ].map(require.resolve),
  ],
  rules: { },
}
