module.exports = {
  root: true,
  extends: ['next', 'next/core-web-vitals', 'prettier'],
  plugins: ['prettier'],
  ignorePatterns: ['**/coverage/'],
  rules: {
    'prettier/prettier': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'array-bracket-spacing': ['error', 'never'],
    '@next/next/no-img-element': 'off',
  },
};