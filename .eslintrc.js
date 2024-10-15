'use strict';

module.exports = {
  root: true,
  overrides: [
    {
      files: [
        '**/*.ts',
        '**/*.tsx',
      ],
      extends: [
        'airbnb',
        'airbnb-typescript',
      ],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        'prefer-destructuring': 0,
        'react/jsx-one-expression-per-line': 0,
        'react/require-default-props': 0,
        'react/jsx-props-no-spreading': 0,
      },
    },
    {
      files: ['**/*.js'],
      extends: ['airbnb'],
      parserOptions: {
        sourceType: 'script',
      },
      rules: {
        strict: [2, 'global'],
      },
    },
  ],
};
