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
      semi: ["error", "always"],
      "prefer-const": "error",

      "no-console": ["warn", { allow: ["warn", "error", "log"] }],
      "no-var": "error",
      eqeqeq: ["error", "always"],
      "no-eval": "error",
      "no-implied-eval": "error",

      // Console permitido em APIs
      "no-console": "off",

      // Variáveis não utilizadas (ignora variáveis com prefixo _)
      "no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],

      // Async/Await
      "require-await": "off",
      "no-return-await": "error",
      "no-promise-executor-return": "error",

      "no-nested-ternary": "warn",
      "no-unneeded-ternary": "error",
      "prefer-template": "warn",
      "prefer-arrow-callback": "warn",
      "object-shorthand": "warn",
      "arrow-body-style": ["error", "as-needed", { "requireReturnForObjectLiteral": true }],

      "import/no-duplicates": "error",
      "import/newline-after-import": "error",

      "react-refresh/only-export-components": "off",

      "space-before-blocks": "off",
      "@typescript-eslint/no-empty-function": "off",

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

          // Bloco de código
          bracketSpacing: true,

          // Injeção de dependências
          experimentalTernaries: true,

          // Plugins - Tailwind CSS deve vir por último
          plugins: ["prettier-plugin-tailwindcss"],
        },
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
          pathGroups: [
            { pattern: "@/**", group: "internal", position: "before" },
            { pattern: "@pages/**", group: "internal", position: "before" },
            {
              pattern: "@components/**",
              group: "internal",
              position: "before",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin", "external", "internal"],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
    },
  },
  eslintConfigPrettier,
];

export default eslintConfig;
