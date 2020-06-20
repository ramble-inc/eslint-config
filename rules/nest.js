/**
 * ESLint rules for NestJS
 */
module.exports = {
  rules: {
    /**
     * NestJS uses named export over default export
     */
    'import/prefer-default-export': 'off',

    /**
     * It's not appropriate for NestJS components to use static method
     * whenever no 'this' are used.
     */
    'class-methods-use-this': 'off',
  },
};
