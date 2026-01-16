import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'
import PreencherDados from '../pages/preencherDados'

And('insiro um nome e um email válido em registrar', () => {
    PreencherDados.preencherNomeEmail()
    PreencherDados.redirecionarContinuar()
})