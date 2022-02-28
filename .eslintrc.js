module.exports = {
  env: {
    node: true,
    es2021: true,
    browser: true,
    'vue/setup-compiler-macros': true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  plugins: ['eslint-plugin-prettier'],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'vue/multi-word-component-names': 0,
    'vue/script-setup-uses-vars': 'error',
    'prettier/prettier': ['error'],
  },
};
