module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: { sourceType: 'module', ecmaVersion: 2020, project: ['tsconfig.json'] },
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
