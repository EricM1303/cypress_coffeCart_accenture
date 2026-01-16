import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'
import PaginaInicial from '../pages/paginaInicial.page'

// Acessar o site
Given('que o usuário acessa a página inicial do Coffee Cart', () => {
  cy.visit('/')
})

// Selecionar cafés
And('seleciona os cafés que deseja comprar', () => {
  PaginaInicial.selecionarCafes()
  PaginaInicial.validarPromocao()
})

// Validar e adicionar promoção
And('visualiza a promoção de café grátis e a adiciona ao carrinho', () => {
  PaginaInicial.validarPromocao()
  PaginaInicial.aceitarPromocao()
})
