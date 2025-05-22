module.exports = {
  root: true,
  env: {
    node: true,
    es2022: true,
  },
  plugins: ["prettier", "import"],
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  rules: {
    semi: ["error", "never"],
    "prefer-const": "error",
    "no-unused-vars": "warn",
    "prettier/prettier": [
      "error",
      { endOfLine: "auto", singleQuote: false, semi: false },
    ],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
  },
}
