const GENERO = ':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]'
const SENHA = '[data-qa="password"]'
const DIA = '[data-qa="days"]'
const MES = '[data-qa="months"]'
const ANO = '[data-qa="years"]'
const PRIMEIRO_NOME = '[data-qa="first_name"]'
const ULTIMO_NOME = '[data-qa="last_name"]'
const EMPRESA = '[data-qa="company"]'
const ENDERECO = '[data-qa="address"]'
const PAIS = '[data-qa="country"]'
const ESTADO = '[data-qa="state"]'
const CIDADE = '[data-qa="city"]'
const CEP = '[data-qa="zipcode"]'
const TELEFONE = '[data-qa="mobile_number"]'
const BTN_CRIAR_CONTA = '[data-qa="create-account"]'


class CompletarCadastro {
    preencherInformacoes() {
        cy.get(GENERO).click()
        cy.get(SENHA).type(Cypress.env('senha')) // Dado sensível
        cy.get(DIA).select(Cypress.env('dia')) // Dado sensível
        cy.get(MES).select(Cypress.env('mes')) // Dado sensível
        cy.get(ANO).select(Cypress.env('ano')) // Dado sensível
        cy.get(PRIMEIRO_NOME).type(Cypress.env('nome')) // Dado sensível
        cy.get(ULTIMO_NOME).type(Cypress.env('ultimo_nome')) // Dado sensível
        cy.get(EMPRESA).type('Empresa Teste')
        cy.get(ENDERECO).type(Cypress.env('endereco')) // Dado sensível
        cy.get(PAIS).select('Canada')
        cy.get(ESTADO).type('Pernambuco')
        cy.get(CIDADE).type('Recife')
        cy.get(CEP).type(Cypress.env('cep')) // Dado sensível
        cy.get(TELEFONE).type(Cypress.env('telefone')) // Dado sensível
        cy.get(BTN_CRIAR_CONTA).click() // Finalizar Cadastro do usuário
    }
}

export default new CompletarCadastro()
