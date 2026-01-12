import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-plugin-prettier";
import tseslint from "typescript-eslint";

const eslintConfig = [
  js.configs.recommended,
  ...tseslint.configs.recommended,
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
        // Node.js globals
        console: "readonly",
        process: "readonly",
        Buffer: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        exports: "writable",
        module: "writable",
        require: "readonly",
        global: "readonly",
        // ES2021 globals
        globalThis: "readonly",
        Promise: "readonly",
        Set: "readonly",
        Map: "readonly",
        WeakSet: "readonly",
        WeakMap: "readonly",
        Symbol: "readonly",
        // Additional
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
      // Sintaxe e estilo básico
      semi: ["error", "always"],
      "prefer-const": "error",
      "no-var": "error",
      eqeqeq: ["error", "always"],
      "no-eval": "error",
      "no-implied-eval": "error",

      // Console permitido em APIs
      "no-console": "off",

      // Async/Await
      "require-await": "error",
      "no-return-await": "error",
      "no-promise-executor-return": "error",

      // Código limpo
      "no-nested-ternary": "warn",
      "no-unneeded-ternary": "error",
      "prefer-template": "warn",
      "prefer-arrow-callback": "warn",
      "object-shorthand": "warn",

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
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],

      // Prettier integration
      "prettier/prettier": [
        "error",
        {
          // Formatação básica
          semi: true,
          tabWidth: 2,
          printWidth: 80,
          endOfLine: "auto",

          // Aspas
          singleQuote: false,
          jsxSingleQuote: false,
          quoteProps: "as-needed",

          // Espaçamento
          bracketSpacing: true,
          arrowParens: "avoid",

          // Markdown
          proseWrap: "preserve",

          // HTML/Vue
          htmlWhitespaceSensitivity: "css",
          vueIndentScriptAndStyle: true,
        },
      ],
    },
  },
  eslintConfigPrettier,
];

export default eslintConfig;
