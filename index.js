module.exports = {
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb-typescript/base',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    require.resolve('./rules/base'),
    require.resolve('./rules/typescript'),
    require.resolve('./rules/nest'),
  ],
  env: {
    node: true,
    jest: true,
  },
  overrides: [
    {
      /**
       * Allow setting, accessing, and calling, any.fn
       */
      files: ['*.spec.ts', '*.spec.js'],
      rules: {
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
      },
    },
  ],
};
