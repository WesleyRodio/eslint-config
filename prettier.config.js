/**
 * Configuração Prettier compartilhável com Tailwind CSS
 * @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions}
 */
const prettierConfig = {
  // Formatação geral
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  printWidth: 80,
  arrowParens: "avoid",
  bracketSpacing: true,
  endOfLine: "auto",

  // JSX/TSX
  jsxSingleQuote: false,

  // Objetos
  quoteProps: "as-needed",

  // Markdown
  proseWrap: "preserve",

  // HTML/Vue
  htmlWhitespaceSensitivity: "css",
  vueIndentScriptAndStyle: true,

  // Plugins - Tailwind CSS deve vir por último
  plugins: ["prettier-plugin-tailwindcss"],
};

export default prettierConfig;
