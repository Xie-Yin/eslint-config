module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/recommended', '@vue/standard', '@xyfebaby/eslint-config-base'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'max-len': 'off',
      },
    },
  ],
  rules: {
    'max-len': ['off'],
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 4,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    'vue/html-self-closing': [
      2,
      {
        html: {
          void: 'any',
          normal: 'any',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/prop-name-casing': 'off',
    'vue/custom-event-name-casing': 'off',
  },
}
