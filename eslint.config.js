// eslint.config.js
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  // Базовая конфигурация ESLint
  eslint.configs.recommended,

  // Если используете TypeScript — добавьте конфигурацию для TS
  ...tseslint.configs.recommended,

  {
    // Ваши правила
    rules: {
      'no-console': 'warn',
      'semi': ['error', 'always'],
      // Добавьте свои правила здесь
    },

    // Игнорируемые пути (аналог .eslintignore)
    ignores: [
      'node_modules/',
      'dist/',
      '.git/',
      '*.min.js',
      // Добавьте свои игнорируемые папки/файлы
    ],

    // Настройки для конкретных расширений
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
  },
];
