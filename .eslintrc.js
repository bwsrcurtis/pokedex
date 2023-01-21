module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'react-app',
        'react-app/jest',
    ],
    'overrides': [],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        'jsx-a11y'
    ],
    'rules': {
        'quotes': [
            1,
            'single'
        ],
        'semi': [
            1,
            'always'
        ],
        'no-multi-spaces': [
            1
        ],
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
    },
    'settings': {
        'react': {
            'version': 'detect',
        }
    }
};
