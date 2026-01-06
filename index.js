/**
 * @wesleyrodio/eslint-config
 *
 * Configuração ESLint e Prettier compartilhável para projetos
 */

// Por padrão, exporta a configuração do Next.js
export { default } from "./next.js";

// Exportações nomeadas para diferentes ambientes
export { default as nextjs } from "./next.js";
export { default as api } from "./api.js";
