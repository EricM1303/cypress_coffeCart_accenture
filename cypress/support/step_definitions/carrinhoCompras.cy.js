import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'
import RemoverItemCarrinho from '../pages/removerDoCarrinho.page'

And('clica no ícone do carrinho de compras', () => {
    RemoverItemCarrinho.realizarRemocaoEVerificacoes()
})