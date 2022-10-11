module.exports = {
    //指定代码运行环境
    env: {
        browser: true,
        es2021: true,
        commonjs: true,
        node: true,
    },
    // 定义文件继承的子规范
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    // 定义eslint的解析器
    parser: "@typescript-eslint/parser",
    parserOptions: {
        //指定ESLint可以解析JSX语法
        ecmaFeatures: {
            "jsx": true
        },
        ecmaVersion: "latest",
        sourceType: "module"
    },
    //定义eslint所依赖的插件
    plugins: [
        "react",
        "@typescript-eslint"
    ],
    rules: {
        'no-var': 'error', // 禁止使用var
        // "quotes": ["error", "double"], // 强制双引号
        'camelcase': 'error',// 强制驼峰法命名
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/member-delimiter-style': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-this-alias': 'off',
        '@typescript-eslint/semi': 2,
        '@typescript-eslint/triple-slash-reference': 0,
        'react/prop-types': 'off',
        'react/display-name': 'off',
        'react/no-string-refs': 0,
        'react/no-children-prop': 0,
        'react/jsx-no-target-blank': 0,
        'react/no-render-return-value': 0,
        'react/no-direct-mutation-state': 'off',
        'react/no-unescaped-entities': 'off',
        'react/no-find-dom-node': 'off',
        'react/no-deprecated': 'off',
        'prefer-rest-params': 'off',
        'prefer-spread': 'off',
        'eol-last': 'error',
        'prefer-const': 'off'
    }
};
