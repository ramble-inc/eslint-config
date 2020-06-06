/**
 * ESLint rules for TypeScript
 */
module.exports = {
  rules: {
    /**
     * Node.js stream handler should not be a promise.
     * Assuming it's ok to use async handler
     */
    '@typescript-eslint/no-misused-promises': ['off'],
  },
};
