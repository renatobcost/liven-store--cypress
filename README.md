## π Teste Liven π

Testes de cadastro e login realizados na [Liven Store](https://processos-seletivos-liven.web.app).

Clique [AQUI](https://dashboard.cypress.io/projects/63vexs/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&timeRange=%7B"startDate"%3A"1970-01-01"%2C"endDate"%3A"2038-01-19"%7D) para acessar o relatΓ³rio dos testes em ci.


### π‘ Conceitos abordados
-----------------------

- Checkpoints na AutomaΓ§Γ£o Web;
- CSS Selector;
- PageObject;
- Ganchos (before each);
- Massa de testes estΓ‘tica (*.json) e dinΓ’mica (faker);
- Submeter forms e validaΓ§Γ£o;
- Testar dados sensΓ­veis;
- CI;


### β οΈ InstalaΓ§Γ£o e uso do projeto
-----------------------
- Instale o [Node.js](https://nodejs.org/en/download/);
- Abra o diretΓ³rio do projeto e execute o comando:
    - `npm install`
- Para abrir a interface de execuΓ§Γ£o do Cypress, execute no diretΓ³rio do projeto:
    - `npx cypress open`


### βοΈ Arquitetura do projeto
-----------------------

```
selecao-liven/
  ββ  .github/
  β        βββ workflows/
  β            βββ ci.yml
  |
  ββ  cypress/
  β        βββ factories/
  β        β   βββ SignupFactory.json
  β        β
  β        βββ fixtures/
  β        β   βββ user.json       
  β        β
  β        βββ integration/
  β        β   βββ cadastro.spec.js
  β        β   βββ login.spec.js
  β        β
  β        βββ pages/
  β        β   βββ Login.js
  β        |   βββ SignUpPage.js
  β        β
  β        βββ plugins/
  β        |   βββ index.js
  β        β
  β        βββ support/
  β            βββ Commands.js
  β            βββ index.js      
  β 
  βββ node_modules/
  βββ cypress.json
  βββ package-lock.json
  βββ package.json
  βββ README.md
```

## π Camadas do projeto
-----------------------

 - **.github** contΓ©m arquivo para criaΓ§Γ£o de pipeline de integraΓ§Γ£o contΓ­nua (*.yml); 
 - **factories:** arquivo para massa de dados dinΓ’mica para os testes (faker);
 - **fixtures:** arquivo para massa de dados estΓ‘tica para os testes (.json);
 - **integration:** arquivos de testes separados em categorias - login e cadastro (*.spec.js);
 - **pages:** Arquivos de aΓ§Γ΅es seguindo o padrΓ£o pageobject;
 - **plugins:** plugins que sΓ£o utilizados na soluΓ§Γ£o ficam dentro do arquivo "plugins/index.js";
 - **support:** camada com comandos Cypress customizados e sobrescritas globais:
    - Arquivo commands.js responsΓ‘vel de receber os comandos globais no cypress;
    - Arquivo index.js responsΓ‘vel de receber as importaΓ§Γ΅es dos comandos cypress;
 - **node_modules:** arquivos ou diretΓ³rios que podem ser carregados pelo Node.js;
 - **cypress.json:** arquivo de configuraΓ§Γ£o do Cypress;
 - **package-lock.json:** gerado automaticamente com as instalaΓ§Γ΅es e atualizaΓ§Γ΅es de pacotes;


