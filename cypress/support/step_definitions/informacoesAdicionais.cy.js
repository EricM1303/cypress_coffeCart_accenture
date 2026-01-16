import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'
import CompletarCadastro from '../pages/completarCadastro.page'


And('preencho os demais dados solicitados', () => {
    CompletarCadastro.preencherInformacoes()
})