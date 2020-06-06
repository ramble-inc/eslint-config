/**
 * ESLint rules for gRPC
 */
module.exports = {
  rules: {
    /**
     * Avoid naming conflicts between gRPC's namespace and local variable name.
     * Downside is that globally declared gRPC's namespace isn't accessible
     * if a local variable is declared with the same name.
     */
    'no-shadow': 'off',
  },
};
