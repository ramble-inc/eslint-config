/**
 * ESLint rules for TypeScript
 */
module.exports = {
  rules: {
    /**
     * Some devDependencies like "utility-types" should be allowed to be imported
     */
    'import/no-extraneous-dependencies': 'off',

    /**
     * Node.js stream handler should not be a promise.
     * Assuming it's ok to use async handler
     */
    '@typescript-eslint/no-misused-promises': 'off',

    /**
     * Allow enum to be UPPER_CASE
     */
    '@typescript-eslint/naming-convention': [
      'error',
      { selector: 'enum', format: ['UPPER_CASE'] },
    ],
  },
};
