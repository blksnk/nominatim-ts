/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  ignorePatterns: ["**/dist/*.js", "/docs", "/lib"],
  rules: {
    // generic
    "no-console": [
      "error",
      {
        allow: ["warn", "error"],
      },
    ],
    "no-var": "error",
    eqeqeq: ["error", "always"],
    "no-dupe-keys": "error",
    // typescript
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-expressions": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/ban-ts-comment": "warn",
  },
};
