import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-plugin-prettier';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: {
      js,
      prettier,
    },
    extends: ['js/recommended'],
  },
  { files: ['**/*.{js,mjs,cjs,ts,mts,cts}'], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
]);
