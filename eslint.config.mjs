import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import { configs as litPluginConfigs } from 'eslint-plugin-lit';
import { configs as wcPluginConfigs } from 'eslint-plugin-wc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  litPluginConfigs['flat/recommended'],
  wcPluginConfigs['flat/recommended'],
  {
    ignores: ['dist/'],
  },
  ...compat.extends('eslint:recommended', 'plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended'),
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
    },

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },

    rules: {
      'no-unexpected-multiline': 'off',
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-deprecated': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      'lit/quoted-expressions': 'error',
      quotes: [
        'error',
        'single',
        {
          avoidEscape: true,
        },
      ],
      'no-var': 'error',
    },

    settings: {
      wc: {
        elementBaseClasses: ['LitElement'], // Recognize `LitElement` as a Custom Element base class
      },
    },
  },
];
