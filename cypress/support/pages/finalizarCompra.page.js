// Botão para totalizar o pedido sendo capturado dinâmicamente do arquivo cypress.env.json
const TOTALIZAR_PEDIDO = Cypress.env('BTN_TOTALIZAR_PEDIDO')
const CAMPO_NOME = '#name'
const CAMPO_EMAIL = '#email'
const ACEITAR_RECEBER_PROMOCOES = '[name="promotion"]'
const BNT_CONFIRMAR_COMPRA = '#submit-payment'
const MENSAGEM_COMPRA_FINALIZADA = '.snackbar'


class FinalizarCompraCarrinho {
    gerarNomeEmailAleatorio() {
        // Gerar dados aleatórios para nome e email
        const nomeAleatorio = `Usuario${Date.now()}`
        const emailAleatorio = `usuario${Date.now()}@teste.com`
        Cypress.env('nome', nomeAleatorio)
        Cypress.env('email', emailAleatorio)
    }

    finalizarCompra() {
        this.gerarNomeEmailAleatorio()
        cy.get(TOTALIZAR_PEDIDO).click()
        // Preencher o campo nome com o valor da variável de ambiente
        cy.get(CAMPO_NOME).type(Cypress.env('nome'))
        // Preencher o campo email com o valor da variável de ambiente
        cy.get(CAMPO_EMAIL).type(Cypress.env('email'))
        // Verifica se está desmarcado
        cy.get(ACEITAR_RECEBER_PROMOCOES).should('not.be.checked').click()
        // Clicar no botão para confirmar a compra
        cy.get(BNT_CONFIRMAR_COMPRA).should('be.visible').click({ force: true })
    }

    verificarCompraFinalizada() {
        // Verificar se a mensagem de compra finalizada aparece
        cy.get(MENSAGEM_COMPRA_FINALIZADA).should('be.visible').and('contain.text', 'Thanks for your purchase. Please check your email for payment.')
        cy.log(`Parabéns ${Cypress.env('nome')}, sua compra foi realizada com sucesso e a mensagem foi exibida corretamente.`)
    }

    finalizarCompraTotal() {
        this.finalizarCompra()
    }
}

export default new FinalizarCompraCarrinho()
