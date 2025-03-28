// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      ecmaVersion: 5,
      sourceType: 'module',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      "indent": ["error", 2], // Enforce 2-space indentation
      "quotes": ["error", "single", { "avoidEscape": true }], // Prefer single quotes unless escaping
      "semi": ["error", "always"], // Always require semicolons
      "comma-dangle": ["error", "always-multiline"], // Trailing commas for cleaner diffs
      "object-curly-spacing": ["error", "always"], // Space inside `{}` for readability
      "arrow-parens": ["error", "always"], // Always use parentheses for arrow functions
      "eqeqeq": ["error", "always"], // Enforce `===` over `==`
      "no-multiple-empty-lines": ["error", { "max": 1 }], // No excessive empty lines
      "no-trailing-spaces": "error", // Remove spaces at end of lines
      "react/jsx-indent": ["error", 2], // Enforce 2-space indentation in JSX

    },
  },
);