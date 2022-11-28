module.exports = {
  env: {
    'browser': true,
    'es2021': true,
    node: true
  },
  extends: [
      'eslint:recommended',
      'plugin:vue/vue3-essential'
  ],
  parserOptions: {
      'ecmaVersion': 12,
      'sourceType': 'module',
      parser: '@typescript-eslint/parser'
  },
  plugins: [
      'vue',
      '@typescript-eslint'
  ],
  rules: {
  }
}
