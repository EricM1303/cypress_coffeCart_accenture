import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'
import CadastroRealizadoPage from '../pages/cadastroRealizado.page'

// Aguardar 5s antes de prosseguir
When('eu devo visualizar a mensagem de sucesso no registro', () => {
    CadastroRealizadoPage.aguardarTela() 
})

And('clico no botão "continue" para prosseguir à página inicial', () => {
    CadastroRealizadoPage.clicarBotaoConcluir()
})