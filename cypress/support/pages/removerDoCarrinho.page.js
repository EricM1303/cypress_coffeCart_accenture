const BOTAO_CARRINHO_COMPRAS = 'a[href="/cart"]'
const BOTAO_EXCLUIR_ITEM = ':nth-child(2) > .unit-controller > [aria-label="Remove one Espresso"]'
const CAFE_BRINDE_VALOR = ':nth-child(2) > :nth-child(3)'
const CAFE_AMERICANO_VALOR = ':nth-child(3) > :nth-child(3)'
const CAFE_BREVE_VALOR = ':nth-child(4) > :nth-child(3)'


class RemoverItemCarrinho {
    removerItemCarrinho() {
        // verificar se está visível e clicar no botão do carrinho de compras
        cy.get(BOTAO_CARRINHO_COMPRAS).should('be.visible').click()

        // Verifica se é o item com o texto especificado e remove o item do carrinho
        cy.get(BOTAO_EXCLUIR_ITEM).should('have.attr', 'aria-label', 'Remove one Espresso').click()
    }

    verificarItemRemovido() {
        // Verifica se o item foi removido com sucesso do carrinho
        cy.get(BOTAO_EXCLUIR_ITEM).should('not.exist')
        cy.log('Item removido com sucesso do carrinho de compras.')
    }

    verificarValores() {
        // Verifica se o valor de cada café bate com o esperado
        cy.get(CAFE_BRINDE_VALOR).should('contain.text', '$4.00')
        cy.get(CAFE_AMERICANO_VALOR).should('contain.text', '$7.00')
        cy.get(CAFE_BREVE_VALOR).should('contain.text', '$15.00')

        // Verifica se o valor total do pedido está correto após a remoção do item
        cy.get(Cypress.env('BTN_TOTALIZAR_PEDIDO')).should('contain.text', '$26.00')
        cy.log('Os valores dos cafés no carrinho estão corretos após a remoção do item.')
    }

    realizarRemocaoEVerificacoes() {
        this.removerItemCarrinho()
        this.verificarItemRemovido()
        this.verificarValores()
    }
}

export default new RemoverItemCarrinho()