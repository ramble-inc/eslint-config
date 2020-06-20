/**
 * Base ESLint rules
 */
module.exports = {
  rules: {
    'prettier/prettier': ['error'],

    /**
     * see https://www.npmjs.com/package/eslint-config-prettier#arrow-body-style-and-prefer-arrow-callback
     */
    'implicit-arrow-linebreak': ['off'],

    /**
     * Allow access to library internal values using "_".
     */
    'no-underscore-dangle': 'off',
  },
};
