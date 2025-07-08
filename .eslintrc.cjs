module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:astro/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // TypeScript specific rules
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/no-var-requires': 'error',
    
    // General rules
    'no-console': 'warn',
    'no-debugger': 'error',
    'prefer-const': 'error',
    'no-var': 'error',
    'no-undef': 'error'
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      },
      rules: {
        // Astro specific rules
        'astro/no-conflict-set-directives': 'error',
        'astro/no-unused-define-vars-in-style': 'error',
        // Disable React rules for Astro files
        'react/no-unknown-property': 'off',
        'react/no-unescaped-entities': 'off'
      }
    },
    {
      files: ['*.tsx', '*.ts'],
      extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended'
      ],
      plugins: ['react', 'react-hooks'],
      rules: {
        // React specific rules
        'react/prop-types': 'off', // We use TypeScript for prop validation
        'react/react-in-jsx-scope': 'off', // Not needed with React 17+
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn'
      },
      settings: {
        react: {
          version: 'detect'
        }
      },
      env: {
        browser: true,
        es2021: true
      }
    }
  ]
}; 