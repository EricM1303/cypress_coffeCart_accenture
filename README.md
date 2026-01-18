# Automação do Coffee-Cart com Cypress<img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3Rja2l3dzV5ZHV6ZjV3czY5NW82OXNkc29wbjI3endmc2l1ZHU2aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/j5zI2It7Rg73L5HEdh/giphy.webp" width="50">
Foi desenvolvido um conjunto de testes automatizados em JavaScript para validar as funcionalidades de compra de café do site https://coffee-cart.app/
, conforme os requisitos solicitados.

Para a execução dos testes, foi utilizado o Cypress, uma ferramenta moderna de automação que facilita a criação, execução e manutenção de testes, especialmente em aplicações front-end, oferecendo praticidade, agilidade e confiabilidade no processo de validação.

***

## 🚀 Tecnologias utilizadas

|      Tecnologia       |                                                                                             Utilização                                                                                              |
|:---------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| <img src="https://skillicons.dev/icons?i=git" /> |                            **Git**: Sistema de controle de versão utilizado para gerenciar o código-fonte, histórico de alterações e colaboração entre desenvolvedores.                             |
| <img src="https://skillicons.dev/icons?i=cypress" /> |                       **Cypress**: É uma ferramenta de testes automatizados E2E para aplicações web, focada em testar a interface e o comportamento do usuário no navegador.                 |
| <img src="https://skillicons.dev/icons?i=nodejs" /> | **Node.js**: Ambiente de execução JavaScript no backend, usado para criar APIs e aplicações server-side de forma rápida e escalável. |
***
### Instalação do projeto

1. **Clone o repositório e entre na pasta do projeto:**
   ```bash
   git clone https://github.com/EricM1303/cypress_coffeCart_accenture.git
   ```
    1. **Entre na pasta do repositório clonado:**
       ```bash
        cd atividade_cypress
       ```
  
2. **Instalar dependências do node modules**
   ```bash
       npm install
   ```
3. **Rodar projeto no cypress**
   ```bash
       npx cypress open
   ```

***
## 📜 Funcionalidade e cenário utilizado
<img width="810" height="312" alt="image" src="https://github.com/user-attachments/assets/e7d3a79b-098b-42e4-b120-033228774217" />

***
## ✅ Validações e testes realizados
#### Validar campos e elementos da página HTML
<img width="487" height="321" alt="image" src="https://github.com/user-attachments/assets/2a9d66ba-99cc-40b2-a7dd-9f415e9f874a" />
<img width="487" height="321" alt="image" src="https://github.com/user-attachments/assets/55b88381-a58a-487b-a334-bda56aa38b41" />

***

#### Método para gerar nome e e-mail aleatório (teste dinâmico)
```Javascript
class FinalizarCompraCarrinho {
    gerarNomeEmailAleatorio() {
        // Gerar dados aleatórios para nome e email
        const nomeAleatorio = `Usuario${Date.now()}`
        const emailAleatorio = `usuario${Date.now()}@teste.com`

        // Armazenar os dados gerados no env
        Cypress.env('nome', nomeAleatorio)
        Cypress.env('email', emailAleatorio)
    }
}
```

***
## 📁 Estrutura do Projeto

```bash
cypress/
├── e2e/ - Teste que será realizado via cypress
│   └── comprarCafe.feature
│
├── fixtures/
│   └── example.json
│
├── support/ 
│   ├── pages/ - Script das páginas que foram utilizadas e testadas
│   │   ├── finalizarCompra.page.js
│   │   ├── paginaInicial.page.js
│   │   └── removerDoCarrinho.page.js
│   │
│   ├── step_definitions/ - Regra de negócio para utilização Gherkin e Cucumber-preprocessor
│   │   ├── carrinhoCompras.cy.js
│   │   ├── comprarCafe.cy.js
│   │   └── paginaInicial.cy.js
│   │
│   ├── commands.js
│   └── e2e.js
│
node_modules/ - Após baixar repositório, você visualizará
│
├── .gitignore
├── cypress.config.js
├── cypress.env.json - Variáveis de ambiente para uso de dados dinâmicos e sensíveis
├── package-lock.json
├── package.json
└── README.md - Você está aqui 😊
```

***
#### ✒️ Autor do projeto <img width="20%" align="right" src="https://media.giphy.com/media/YRMb6dd7zprS00JdGZ/giphy.gif" alt="Carinha programandor"/>
* **Eric Matheus Nunes Campelo**➡️[**_Github/Eric_**](https://github.com/EricM1303)
***
