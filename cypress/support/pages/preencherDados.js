const NOME = '[data-qa="signup-name"]'
const EMAIL = '[data-qa="signup-email"]'
const BTN_CONTINUAR = '[data-qa="signup-button"]'

    class PreencherDados {
        preencherNomeEmail() {
            // Apagar campo antes de preencher e inserir dados arquivo env
            cy.get(NOME).clear().type(Cypress.env('nome'))
            cy.get(EMAIL).clear().type(Cypress.env('email'))
        }
        redirecionarContinuar() {
            cy.get(BTN_CONTINUAR).click()
        }
    }


    export default new PreencherDados();