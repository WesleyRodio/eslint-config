import { defineConfig } from "eslint/config"
import globals from "globals"
import eslintPlugin from "@eslint/js"
import pluginImport from "eslint-plugin-import"
import pluginPrettier from "eslint-plugin-prettier"
import eslintConfigPrettier from "eslint-config-prettier/flat"

export default defineConfig([
  {
    // root: true,
    files: ["**/*.{js,mjs,cjs}"],
    ignores: ["**/*.config.js", ".history/**"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.node,
    },
    plugins: {
      prettier: pluginPrettier,
      import: pluginImport,
    },
    rules: {
      ...eslintPlugin.configs.recommended.rules,
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
  },
  eslintConfigPrettier,
])
