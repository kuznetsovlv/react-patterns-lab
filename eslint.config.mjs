import {defineConfig, globalIgnores} from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import stylistic from '@stylistic/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier';

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,
    {
        plugins: {
            '@stylistic': stylistic,
        },
        rules: {
            'no-console': ['warn', {allow: ['warn', 'error']}],
            'react/display-name': 'error',
            'prefer-const': 'error',

            '@stylistic/semi': ['error', 'always'],
            '@stylistic/quotes': ['error', 'single', {avoidEscape: true}],
            '@stylistic/jsx-quotes': ['error', 'prefer-double'],
            '@stylistic/jsx-curly-brace-presence': [
                'error',
                {
                    props: 'never',
                    children: 'never',
                },
            ],

        },
    },

    {
        files: ['src/app/**/page.tsx', 'src/app/**/layout.tsx'],
        rules: {
            'no-restricted-imports': [
                'error',
                {
                    patterns: [
                        {
                            group: ['@/app/components'],
                            message:
                                'Do not import from the shared components barrel inside app routes/pages. Use direct imports instead.',
                        },
                    ],
                },
            ],
        },
    },

    {
        files: ['src/app/api/**/*.ts', 'src/app/actions/**/*.ts'],
        rules: {
            'no-console': 'off',
        },

    },
    {
        files: ['*.config.{js,mjs,cjs,ts}', 'eslint.config.*', 'postcss.config.*'],
        rules: {
            'import/no-anonymous-default-export': 'off',
        },
    },
    eslintConfigPrettier,
    // Override default ignores of eslint-config-next.
    globalIgnores([
        // Default ignores of eslint-config-next:
        '.next/**',
        'out/**',
        'build/**',
        'next-env.d.ts',
    ]),
]);

export default eslintConfig;
