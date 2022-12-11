module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
<<<<<<< HEAD
        "plugin:react/recommended",
        "airbnb",
        "plugin: i18next/recommended",
=======
        "plugin: react/recommended",
        "airbnb",
        "plugin: i18next/recomended",
>>>>>>> main
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
<<<<<<< HEAD
    plugins: ["react", "@typescript-eslint", "i18next"],
=======
    plugins: ["react", "@typescript-eslint", "i18n"],
>>>>>>> main
    rules: {
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        indent: [2, 4],
        "react/jsx-filename-extension": [
            2,
            { extensions: [".js", ".jsx", ".tsx"] },
        ],
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "no-unused-vars": "warn",
        "react/require-default-props": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-props-no-spreading": "warn",
        "react/function-component-definition": "off",
        "no-shadow": "off",
        "import/extensions": "off",
        "import/no-extraneous-dependencies": "off",
        "no-underscore-dangle": "off",
<<<<<<< HEAD
        "i18next/no-literal-string": ["error", { markupOnly: true }],
=======
        "i18next/no-literal-string":['error', {markupOnly:true}],
>>>>>>> main
    },
    globals: {
        __IS_DEV__: true,
    },
};
