import { Then , And } from 'cypress-cucumber-preprocessor/steps'
import FinalizarCompraCarrinho from '../pages/finalizarCompra.page'

Then('preenche seu dados para finalizar a compra', () => {
    FinalizarCompraCarrinho.finalizarCompra()
})

And('visualiza a mensagem de compra finalizada com sucesso', () => {
    FinalizarCompraCarrinho.verificarCompraFinalizada()
})