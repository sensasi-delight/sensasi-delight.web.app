import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

const CUSTOM_RULES = {
    plugins: {
        'react-hooks': reactHooks,
        'react-refresh': reactRefresh,
    },
    rules: {
        ...reactHooks.configs.recommended.rules,
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],

        'no-console': 'warn',

        'no-restricted-imports': [
            'error',
            {
                paths: [
                    {
                        name: '@mui/material',
                        message:
                            "Please use `import [Component] from '@mui/material/[Component]'` instead.",
                    },
                    {
                        name: '@mui/icons-material',
                        message:
                            "Please use `import [Component] from '@mui/icons-material/[Component]'` instead.",
                    },
                ],
                patterns: ['!@mui/material/*', '!@mui/icons-material/*'],
            },
        ],
    },
}

export default tseslint.config(
    {
        ignores: ['dist/', 'node_modules/'],
    },

    {
        extends: [js.configs.recommended, tseslint.configs.recommended],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
    },

    {
        extends: [
            tseslint.configs.strictTypeChecked,
            tseslint.configs.stylisticTypeChecked,
        ],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parserOptions: {
                project: './tsconfig.json',
            },
        },
    },

    CUSTOM_RULES,

    eslintPluginPrettierRecommended,
)
