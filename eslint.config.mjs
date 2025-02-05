import globals from 'globals';

// https://eslint.org/docs/latest/use/configure/configuration-files#configuration-objects
export default [{
    plugins: {},

    languageOptions: {
        globals: {
            ...globals.node,
            ...globals.mocha, // for tests
            Promise: false
        },

        ecmaVersion: 2020,
        sourceType: 'module',

        parserOptions: {
            ecmaFeatures: {}
        }
    },

    rules: {
        'no-cond-assign': 2,
        'no-console': 0,
        'no-constant-condition': 2,
        'no-control-regex': 2,
        'no-debugger': 2,
        'no-dupe-args': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,

        'no-empty': [2, {
            allowEmptyCatch: false
        }],

        'no-empty-character-class': 2,
        'no-ex-assign': 2,
        'no-extra-boolean-cast': 2,
        'no-extra-parens': [2, 'all'],
        'no-extra-semi': 2,
        'no-func-assign': 2,
        'no-inner-declarations': [2, 'functions'],
        'no-invalid-regexp': 2,

        'no-irregular-whitespace': [2, {
            skipComments: false
        }],

        'no-negated-in-lhs': 2,
        'no-obj-calls': 2,
        'no-prototype-builtins': 2,
        'no-regex-spaces': 2,
        'no-sparse-arrays': 2,
        'no-unexpected-multiline': 2,
        'no-unreachable': 2,
        'no-unsafe-finally': 2,
        'use-isnan': 2,
        'valid-jsdoc': 0,
        'valid-typeof': 2,
        'accessor-pairs': 2,
        curly: [2, 'multi-line'],
        'dot-location': [2, 'property'],
        eqeqeq: 2,
        'no-caller': 2,
        'no-empty-pattern': 0,
        'no-eval': 2,
        'no-extend-native': 2,
        'no-extra-bind': 2,
        'no-fallthrough': 2,
        'no-floating-decimal': 2,
        'no-implied-eval': 2,
        'no-iterator': 2,
        'no-labels': 2,
        'no-lone-blocks': 2,
        'no-magic-numbers': 0,
        'no-multi-spaces': 2,
        'no-multi-str': 2,
        'no-native-reassign': 2,
        'no-new': 2,
        'no-new-func': 2,
        'no-new-wrappers': 2,
        'no-octal': 2,
        'no-octal-escape': 2,
        'no-proto': 2,
        'no-redeclare': 2,
        'no-return-assign': [2, 'except-parens'],
        'no-self-assign': 2,
        'no-self-compare': 2,
        'no-sequences': 2,
        'no-throw-literal': 2,
        'no-unmodified-loop-condition': 2,
        'no-useless-call': 2,
        'no-useless-escape': 2,
        'no-with': 2,
        'wrap-iife': [2, 'inside'],
        yoda: 2,
        strict: [2, 'safe'],
        'init-declarations': [2, 'always'],
        'no-catch-shadow': 0,
        'no-delete-var': 2,
        'no-label-var': 2,
        'no-restricted-globals': 0,

        'no-shadow': [2, {
            builtinGlobals: false,
            hoist: 'all',
            allow: []
        }],

        'no-shadow-restricted-names': 2,

        'no-undef': [2, {
            typeof: true
        }],

        'no-undef-init': 2,
        'no-undefined': 0,

        'no-unused-vars': [2, {
            vars: 'local',
            args: 'none',
            caughtErrors: 'none'
        }],

        'no-use-before-define': [2, {
            functions: false,
            classes: true
        }],

        'callback-return': 0,
        'global-require': 0,
        'handle-callback-err': [2, '^(err|error)$'],
        'no-mixed-requires': 0,
        'no-new-require': 2,
        'no-path-concat': 2,
        'no-process-env': 2,
        'no-process-exit': 2,
        'no-restricted-modules': 0,
        'no-sync': 2,
        'block-spacing': 2,

        'brace-style': [2, '1tbs', {
            allowSingleLine: true
        }],

        camelcase: [2, {
            properties: 'never'
        }],

        'comma-dangle': [2, 'never'],
        'comma-spacing': 2,
        'comma-style': 2,
        'eol-last': 2,

        indent: [2, 4, {
            SwitchCase: 1
        }],

        'jsx-quotes': 0,
        'key-spacing': 2,
        'keyword-spacing': 2,
        'new-cap': 0,
        'new-parens': 2,
        'no-array-constructor': 2,
        'no-mixed-spaces-and-tabs': 2,

        'no-multiple-empty-lines': [2, {
            max: 2,
            maxBOF: 0,
            maxEOF: 1
        }],

        'no-new-object': 2,

        'no-plusplus': [2, {
            allowForLoopAfterthoughts: false
        }],

        'no-spaced-func': 2,
        'no-trailing-spaces': 2,

        'no-unneeded-ternary': [2, {
            defaultAssignment: false
        }],

        'no-whitespace-before-property': 2,
        'one-var': 0,

        'operator-linebreak': [2, 'after', {
            overrides: {
                '?': 'before',
                ':': 'before'
            }
        }],

        'padded-blocks': 0,
        quotes: [2, 'single', 'avoid-escape'],
        semi: [2, 'always'],
        'semi-spacing': 2,
        'space-before-blocks': 2,

        'space-before-function-paren': [2, {
            anonymous: 'always',
            named: 'never'
        }],

        'space-in-parens': 0,
        'space-infix-ops': 0,
        'space-unary-ops': 2,
        'spaced-comment': 0
    }
}];
