const { init } = require('@fullstacksjs/eslint-config/init');

module.exports = init({
  modules: {
    auto: true,
    esm: true,
    typescript: {
      parserProject: ['./tsconfig.eslint.json'],
      resolverProject: ['./tsconfig.json'],
    },
  },
  root: true,
  rules: {
    'react/no-unused-prop-types': 'off',
    'no-console': 'error',
    'prettier/prettier': 'error',
  },
  overrides: [
    {
      files: ['./cypress/**/*.ts'],
      rules: {
        'node/prefer-global/buffer': 'off',
      },
    },
    {
      files: ['./**/*.stories.tsx', './**/*.cy.tsx'],
      rules: {
        '@typescript-eslint/no-confusing-void-expression': 'off',
        'react/jsx-no-useless-fragment': 'off',
        'react-hooks/rules-of-hooks': 'off',
        'storybook/no-title-property-in-meta': 'off',
      },
    },
  ],
  plugins: ['prettier'],
});
