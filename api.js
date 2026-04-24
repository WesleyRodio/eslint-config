import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import-x";
import prettier from "eslint-plugin-prettier";
import tseslint from "typescript-eslint";

const eslintConfig = defineConfig([
  js.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier, // ← desliga regras ESLint que conflitam com Prettier
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "build/**",
      "coverage/**",
      ".git/**",
      "*.config.js",
      "*.config.ts",
    ],
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tseslint.parser,
      globals: {
        console: "readonly",
        process: "readonly",
        Buffer: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        exports: "writable",
        module: "writable",
        require: "readonly",
        global: "readonly",
        globalThis: "readonly",
        Promise: "readonly",
        Set: "readonly",
        Map: "readonly",
        WeakSet: "readonly",
        WeakMap: "readonly",
        Symbol: "readonly",
        setTimeout: "readonly",
        setInterval: "readonly",
        clearTimeout: "readonly",
        clearInterval: "readonly",
      },
    },
    plugins: {
      prettier,
      import: importPlugin,
    },
    rules: {
      // Prettier
      "prettier/prettier": [
        "error",
        {
          semi: true,
          tabWidth: 2,
          printWidth: 80,
          endOfLine: "auto",
          singleQuote: false,
          jsxSingleQuote: false,
          quoteProps: "as-needed",
          bracketSpacing: true,
          arrowParens: "avoid",
          proseWrap: "preserve",
          htmlWhitespaceSensitivity: "css",
          vueIndentScriptAndStyle: true,
        },
      ],

      // Geral
      "prefer-const": "error",
      "no-var": "error",
      eqeqeq: ["error", "always"],
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-console": "off",

      // Variáveis não utilizadas
      "no-unused-vars": "off", // desliga a base, usa a do TypeScript
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],

      // Async/Await
      "require-await": "off",
      "no-return-await": "error",
      "no-promise-executor-return": "error",

      // Estilo
      "no-nested-ternary": "warn",
      "no-unneeded-ternary": "error",
      "prefer-template": "warn",
      "prefer-arrow-callback": "warn",
      "object-shorthand": "warn",
      "arrow-body-style": [
        "error",
        "as-needed",
        { requireReturnForObjectLiteral: true },
      ],

      // Imports
      "import/no-duplicates": "error",
      "import/newline-after-import": "error",
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
          pathGroups: [
            { pattern: "@/**", group: "internal", position: "before" },
            { pattern: "@pages/**", group: "internal", position: "before" },
            { pattern: "@components/**", group: "internal", position: "before" },
          ],
          pathGroupsExcludedImportTypes: ["builtin", "external", "internal"],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
    },
  },
]);

export default eslintConfig;
