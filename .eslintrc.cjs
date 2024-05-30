// eslint-disable-next-line no-undef
module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/strict',
        'plugin:@typescript-eslint/stylistic',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
    ],
    ignorePatterns: ['dist', 'node_modules', 'src/assets/js/vendor'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
        'no-console': 'warn',
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
    },
}
