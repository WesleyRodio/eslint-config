/**
 * Configuração Prettier compartilhável para APIs RESTful
 * @type {import('prettier').Config}
 */
const prettierConfig = {
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
};

export default prettierConfig;
