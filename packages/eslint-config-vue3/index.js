module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'no-unused-vars': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
  extends: [
    '@vue/typescript',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    '@xyfebaby/eslint-config-base',
    '@xyfebaby/eslint-config-ts',
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2020,
  },
}
