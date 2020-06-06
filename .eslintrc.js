module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'plugin:prettier/recommended',
    require.resolve('./rules/base'),
  ],
  root: true,
};
