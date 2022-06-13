## 🚀 Teste Liven 🚀

Testes de cadastro e login realizados na [Liven Store](https://processos-seletivos-liven.web.app).

Clique [AQUI](https://dashboard.cypress.io/projects/63vexs/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&timeRange=%7B"startDate"%3A"1970-01-01"%2C"endDate"%3A"2038-01-19"%7D) para acessar o relatório dos testes em ci.


### 💡 Conceitos abordados
-----------------------

- Checkpoints na Automação Web;
- CSS Selector;
- PageObject;
- Ganchos (before each);
- Massa de testes estática (*.json) e dinâmica (faker);
- Submeter forms e validação;
- Testar dados sensíveis;
- CI;


### ⚠️ Instalação e uso do projeto
-----------------------
- Instale o [Node.js](https://nodejs.org/en/download/);
- Abra o diretório do projeto e execute o comando:
    - `npm install`
- Para abrir a interface de execução do Cypress, execute no diretório do projeto:
    - `npx cypress open`


### ⚙️ Arquitetura do projeto
-----------------------

```
selecao-liven/
  ├─  .github/
  │        └── workflows/
  │            └── ci.yml
  |
  ├─  cypress/
  │        ├── factories/
  │        │   └── SignupFactory.json
  │        │
  │        ├── fixtures/
  │        │   └── user.json       
  │        │
  │        ├── integration/
  │        │   ├── cadastro.spec.js
  │        │   └── login.spec.js
  │        │
  │        ├── pages/
  │        │   ├── Login.js
  │        |   └── SignUpPage.js
  │        │
  │        ├── plugins/
  │        |   └── index.js
  │        │
  │        └── support/
  │            ├── Commands.js
  │            └── index.js      
  │ 
  ├── node_modules/
  ├── cypress.json
  ├── package-lock.json
  ├── package.json
  └── README.md
```

## 🔍 Camadas do projeto
-----------------------

 - **.github** contém arquivo para criação de pipeline de integração contínua (*.yml); 
 - **factories:** arquivo para massa de dados dinâmica para os testes (faker);
 - **fixtures:** arquivo para massa de dados estática para os testes (.json);
 - **integration:** arquivos de testes separados em categorias - login e cadastro (*.spec.js);
 - **pages:** Arquivos de ações seguindo o padrão pageobject;
 - **plugins:** plugins que são utilizados na solução ficam dentro do arquivo "plugins/index.js";
 - **support:** camada com comandos Cypress customizados e sobrescritas globais:
    - Arquivo commands.js responsável de receber os comandos globais no cypress;
    - Arquivo index.js responsável de receber as importações dos comandos cypress;
 - **node_modules:** arquivos ou diretórios que podem ser carregados pelo Node.js;
 - **cypress.json:** arquivo de configuração do Cypress;
 - **package-lock.json:** gerado automaticamente com as instalações e atualizações de pacotes;


