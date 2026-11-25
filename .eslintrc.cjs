module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  globals: { __BUILD_YEAR__: 'readonly' },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', 'dist-ssr', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    // Pages are content-heavy prose; plain apostrophes/quotes in text are fine.
    'react/no-unescaped-entities': 'off',
    // No PropTypes in this project.
    'react/prop-types': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
