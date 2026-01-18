const CAFE_ESPRESSO = '[data-cy="Espresso"]'
const CAFE_BREVE = '[data-cy="Cafe-Breve"]'
const CAFE_AMERICANO = '[data-cy="Americano"]'
const MENSAGEM_PROMOCAO = '.promo > span'
const CAFE_BRINDE = '.promo > :nth-child(2)'
const BOTAO_SIM = '.yes'

class EscolherPedidos {
  selecionarCafes() {
    cy.get(CAFE_ESPRESSO).should('be.visible').click() // Se estíver visível, clica no elemento
    cy.get(CAFE_BREVE).should('be.visible').click()
    cy.get(CAFE_AMERICANO).should('be.visible').click()
  }

  validarPromocao() {
    // Valida se todos elementos promocionais aparecem na tela
    cy.get(MENSAGEM_PROMOCAO).should("contain.text", "It's your lucky day! Get an extra cup of Mocha for $4.")
    cy.get(CAFE_BRINDE).should("be.visible")
  }

  aceitarPromocao() {
    this.validarPromocao()
    // Confirma a promoção do café grátis (se botão for visível)
    cy.get(BOTAO_SIM).should('be.visible').click()
  }

}

export default new EscolherPedidos()
