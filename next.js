import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-plugin-prettier";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    ".history",
  ]),
  {
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

      "require-await": "error",
      "no-return-await": "error",
      "no-promise-executor-return": "error",

      "no-nested-ternary": "warn",
      "no-unneeded-ternary": "error",
      "prefer-template": "warn",
      "prefer-arrow-callback": "warn",
      "object-shorthand": "warn",

      "import/no-duplicates": "error",
      "import/newline-after-import": "error",

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
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
    },
  },
  eslintConfigPrettier,
]);

export default eslintConfig;
