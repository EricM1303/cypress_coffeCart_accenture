import { And } from 'cypress-cucumber-preprocessor/steps'
import RemoverItemCarrinho from '../pages/removerDoCarrinho.page'

And('clica no carrinho e remove um item dele', () => {
    RemoverItemCarrinho.realizarRemocaoEVerificacoes()
})