import {defineConfig, globalIgnores} from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import stylistic from '@stylistic/eslint-plugin';

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
            '@stylistic/max-len': [
                'warn',
                {
                    code: 120,
                    tabWidth: 2,
                    ignoreUrls: true,
                    ignoreStrings: false,
                    ignoreTemplateLiterals: false,
                    ignoreRegExpLiterals: true,
                    ignoreComments: false,
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
                            // eslint-disable-next-line @stylistic/max-len
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
