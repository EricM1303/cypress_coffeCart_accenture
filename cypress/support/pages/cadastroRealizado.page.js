const BTN_CONCLUIR = '[data-qa="continue-button"]'

class CadastroRealizadoPage {
    aguardarTela() {
        cy.wait(5000) // Espera um tempo e segue para tela inicial
    }

    clicarBotaoConcluir() {
        cy.get(BTN_CONCLUIR).click()
    }   
}

export default new CadastroRealizadoPage()