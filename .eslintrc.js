module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:i18next/recommended",
    "plugin:storybook/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "i18next",
    "react-hooks",
    "step65-plugin",
    "unused-imports",
  ],
  rules: {
    "unused-imports/no-unused-imports": "error",
    "react/jsx-filename-extension": [
      2,
      {
        extensions: [".js", ".jsx", ".tsx"],
      },
    ],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "off",
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "warn",
    "react/function-component-definition": "off",
    "no-shadow": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "no-underscore-dangle": "off",
    "i18next/no-literal-string": [
      "error",
      {
        markupOnly: true,
        ignoreAttribute: [
          "role",
          "data-testid",
          "to",
          "target",
          "justify",
          "align",
          "border",
          "direction",
          "definition",
          "gap",
          "as",
          "feature",
        ],
      },
    ],
    "max-len": [
      2,
      {
        ignoreComments: true,
        code: 120,
      },
    ],
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "no-param-reassign": "off",
    "no-undef": "off",
    "react/no-array-index-key": "off",
    "arrow-body-style": "off",
    "step65-plugin/path-checker": [
      2,
      {
        alias: "@",
      },
    ],
    "step65-plugin/layer-imports": [
      2,
      {
        alias: "@",
        ignoreImportPatterns: ["**/StoreProvider", "**/testing"],
      },
    ],
    "step65-plugin/public-api-imports": [
      2,
      {
        alias: "@",
        testFilesPatterns: [
          "**/*.test.*",
          "**/*.story.*",
          "**/StoreDecorator.tsx",
        ],
      },
    ],
    "linebreak-style": ["error", "unix"],
    "react/jsx-max-props-per-line": ["error", { maximum: 4 }],
    "react/no-unstable-nested-components": "warn",
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  overrides: [
    {
      files: ["**/src/**/*.{test,stories}.{ts,tsx}"],
      rules: {
        "i18next/no-literal-string": "off",
        "max-len": "off",
      },
    },
  ],
};
