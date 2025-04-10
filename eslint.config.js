import eslintPlugin from "@eslint/js"
import { defineConfig } from "eslint/config"
import globals from "globals"
import pluginPrettier from "eslint-plugin-prettier/recommended"
import eslintConfigPrettier from "eslint-config-prettier/flat"

export default defineConfig([
  {
    // root: true,
    files: ["**/*.{js,mjs,cjs}"],
    ignores: ["**/*.config.js", ".history/**/*"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.node,
    },
    plugins: {
      pluginPrettier,
      eslint: eslintPlugin,
    },
    rules: {
      ...eslintPlugin.configs.recommended.rules,
      semi: ["error", "never"],
      "prefer-const": "error",
      "no-unused-vars": "warn",
      "prettier/prettier": ["error", { endOfLine: "lf" }],
    },
    // extends: ["eslint:recommended", "plugin:prettier/recommended"],
  },
  eslintConfigPrettier,
  pluginPrettier,
])
