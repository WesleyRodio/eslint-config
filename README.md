# @wesleydevrodio/eslint-config

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-%23F7B93E.svg?style=for-the-badge&logo=prettier&logoColor=black)

🚀 Configuração ESLint e Prettier opinativa e completa, focada exclusivamente em **projetos TypeScript** (Next.js e APIs RESTful).

## 📦 Instalação

Agora ficou muito mais simples! Todas as ferramentas necessárias (ESLint, Prettier, TypeScript e plugins) já vêm incluídas automaticamente.

### Via NPM
```bash
npm install --save-dev @wesleydevrodio/eslint-config
```

### Via PNPM (Recomendado)
```bash
pnpm add -D @wesleydevrodio/eslint-config
```

### Via Yarn
```bash
yarn add -D @wesleydevrodio/eslint-config
```

## 📋 Como funciona
Ao instalar este pacote, você não precisa instalar manualmente o `eslint`, `prettier` ou qualquer plugin. Eles já estão listados como dependências diretas e estarão disponíveis no seu `node_modules`.

## 🔧 Uso

### Next.js

Crie um arquivo `eslint.config.js` na raiz do seu projeto:

```javascript
import eslintConfig from "@wesleydevrodio/eslint-config/next";

export default eslintConfig;
```

### API (Node.js / TypeScript)

Para projetos de API (sem React), use a configuração de API:

```javascript
import eslintConfig from "@wesleydevrodio/eslint-config/api";

export default eslintConfig;
```

### Prettier + Tailwind CSS (OBRIGATÓRIO)

⚠️ **Importante:** Para que o Prettier e o plugin Tailwind CSS funcionem, você **DEVE** criar um arquivo `prettier.config.js` na raiz do seu projeto:

```javascript
export { default } from "@wesleydevrodio/eslint-config/prettier";
```

Sem este arquivo, o Prettier não aplicará a formatação e o Tailwind CSS não ordenará as classes automaticamente.

#### Personalizando (opcional):

Se quiser customizar alguma configuração:

```javascript
import prettierConfig from "@wesleydevrodio/eslint-config/prettier";

export default {
  ...prettierConfig,
  // Suas personalizações aqui
  printWidth: 100, // exemplo
};
```
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
