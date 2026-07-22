const tseslint = require('typescript-eslint');

module.exports = tseslint.config(
  {
    ignores: [
      'coverage/**',
      'dist/**',
      '.nyc_output/**',
      '.rollup-tmp/**',
      'node_modules/**',
      'eslint.config.js',
      'rollup.config.mjs',
      'vitest.config.ts',
    ],
  },
  {
    files: ['src/**/*.ts', 'test/**/*.ts'],
    extends: [...tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.lint.json'],
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      'max-len': ['error', { code: 180, tabWidth: 2 }],
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
);
