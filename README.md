# @wesleyrodio/eslint-config

🚀 Configuração ESLint e Prettier compartilhável para projetos Next.js com TypeScript.

## 📦 Instalação

### Via NPM (Recomendado)

```bash
npm install --save-dev @wesleyrodio/eslint-config
```

### Via PNPM

```bash
pnpm add -D @wesleyrodio/eslint-config
```

### Via Yarn

```bash
yarn add -D @wesleyrodio/eslint-config
```

### Via GitHub (alternativa)

```bash
npm install --save-dev github:wesleyrodio/eslint-config
```

## 📋 Dependências Necessárias

Esta configuração requer as seguintes dependências no seu projeto Next.js:

```bash
npm install --save-dev \
  eslint-config-prettier@^10.0.0 \
  eslint-plugin-import@^2.31.0 \
  eslint-plugin-prettier@^5.2.0 \
  prettier@^3.0.0 \
  prettier-plugin-tailwindcss@^0.7.0
```

> **Nota:** As dependências `eslint`, `eslint-config-next`, `next` e `typescript` já vêm do Next.js, não é necessário instalá-las separadamente.

## 🔧 Uso

### Next.js

Crie um arquivo `eslint.config.js` na raiz do seu projeto:

```javascript
import eslintConfig from "@wesleyrodio/eslint-config/next";

export default eslintConfig;
```

Ou simplesmente:

```javascript
import eslintConfig from "@wesleyrodio/eslint-config";

export default eslintConfig;
```
### Prettier (Recomendado)

Para que o Prettier funcione corretamente no editor e via CLI, crie um arquivo `prettier.config.js`:

```javascript
export { default } from "@wesleydevrodio/eslint-config/prettier";
```

Ou, se preferir personalizar:

```javascript
import prettierConfig from "@wesleydevrodio/eslint-config/prettier";

export default {
  ...prettierConfig,
  // Suas personalizações aqui
  printWidth: 100, // exemplo
};
```

> **Importante:** O arquivo `prettier.config.js` é necessário para que o plugin do Tailwind CSS funcione corretamente e ordene as classes automaticamente.
## ✨ Funcionalidades

Esta configuração inclui:

### 🎯 Regras Base
- ✅ Point e vírgula obrigatório
- ✅ Uso de `const` preferencial
- ✅ Sem `var`
- ✅ Igualdade estrita (`===`)
- ✅ Sem `eval()`

### ⚡ Async/Await
- ✅ `require-await` - Funções async devem ter await
- ✅ `no-return-await` - Sem return await desnecessário
- ✅ `no-promise-executor-return` - Sem return em Promise executor

### 🎨 Estilo de Código
- ✅ Template literals preferenciais
- ✅ Arrow functions em callbacks
- ✅ Object shorthand
- ✅ Sem ternários aninhados
- ✅ Sem ternários desnecessários

### 📦 Imports
- ✅ Sem imports duplicados
- ✅ Linha em branco após imports
- ✅ Ordenação automática de imports (alfabética)
- ✅ Agrupamento por tipo (builtin, external, internal, etc.)

### 💅 Prettier
- ✅ Configuração integrada
- ✅ Point e vírgula: `true`
- ✅ Aspas duplas
- ✅ Tab width: 2 espaços
- ✅ Print width: 80 caracteres
- ✅ Arrow parens: avoid
- ✅ End of line: auto
- ✅ **Plugin Tailwind CSS** - Ordena classes automaticamente

### 🎯 Next.js Específico
- ✅ Core Web Vitals rules
- ✅ TypeScript support
- ✅ Ignora automaticamente `.next/`, `out/`, `build/`, etc.

## 📝 Scripts Recomendados

Adicione estes scripts ao seu `package.json`:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

## 🚀 Publicação (para o mantenedor)

1. Faça login no NPM:
```bash
npm login
```

2. Publique o pacote:
```bash
npm publish --access public
```

3. Para atualizar:
```bash
npm version patch  # ou minor, ou major
npm publish
```

## 📄 Licença

MIT © Wesley Rodio

## 🤝 Contribuindo

Este é um projeto de uso pessoal, mas sugestões são bem-vindas!
