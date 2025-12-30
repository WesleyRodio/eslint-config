/**
 * Configuração Prettier compartilhável com Tailwind CSS
 * @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions}
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

  // Plugins - Tailwind CSS deve vir por último
  plugins: ["prettier-plugin-tailwindcss"],
};

export default prettierConfig;
