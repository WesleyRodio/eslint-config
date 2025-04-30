# @versoly/eslint-config

Este pacote fornece uma configuração personalizada do ESLint e do Prettier que desenvolvi com base nos meus gostos em código.

### Este README contêm:

- **Instalação**: Instruções claras para diferentes gerenciadores de pacotes (NPM, PNPM, YARN).
- **Configuração**: Como configurar a extensão do ESLint com a biblioteca que você criou.
- **Dependências**: Listagem das bibliotecas essenciais que precisam ser instaladas.
- **Uso**: Como rodar o ESLint e garantir que o código será formatado corretamente.
- **Contribuindo**: Incentivo à contribuição de outras pessoas para o seu projeto.

Isso deve fornecer uma documentação concisa e útil para quem for usar o seu pacote.

## Instalação

### Gerenciadores de pacote

NPM
```bash
npm i -D eslint eslint-plugin-prettier eslint-config-prettier prettier git+https://github.com/WesleyRodio/eslint-config.git
```

PNPM
```bash
pnpm add -D eslint eslint-plugin-prettier eslint-config-prettier prettier git+https://github.com/WesleyRodio/eslint-config.git
```

YARN
```bash
yarn add -D eslint eslint-plugin-prettier eslint-config-prettier prettier git+https://github.com/WesleyRodio/eslint-config.git
```

### Configuração

Após a instalação, crie um arquivo eslint.config.js ou eslint.config.mjs na raiz do seu projeto com o seguinte conteúdo:

```bash
import config from "@versoly/eslint-config";
export default config;
```

Isso irá aplicar as configurações de lint e formatação do Prettier ao seu projeto.

### Dependências

Certifique-se de que você tem as seguintes dependências instaladas:

eslint: A ferramenta principal de linting para JavaScript e TypeScript.

eslint-plugin-prettier: Integração do ESLint com o Prettier.

eslint-config-prettier: Desativa as regras do ESLint que podem conflitar com o Prettier.

prettier: O formatador de código.

### Como Usar

Adicionar o arquivo de configuração (eslint.config.js ou eslint.config.mjs):

O arquivo de configuração ESLint é necessário para que as regras do ESLint e do Prettier sejam aplicadas ao seu código.

#### Rodar o ESLint:

Você pode rodar o ESLint em seu projeto com o seguinte comando:

```bash
npx eslint . --fix

ou

eslint . --fix
```

#### Formatação automática:

A configuração do Prettier será ativada automaticamente ao rodar o ESLint, formatando seu código conforme as regras definidas.

### Observações

Caso não funcionar, tente reiniciar o seu editor de texto da sua preferência

#### Com VSCode:

Pressione **F1** ou **CTRL + Shift + P** e Dígite:

```bash
Developer: Reload Window
```

#### Com outro editor de texto:

Feche e reabra que já será o suficiente para aplicar as modificações.

### Contribuindo
Se você encontrar algum problema ou quiser sugerir melhorias, fique à vontade para abrir uma issue ou enviar um pull request.


