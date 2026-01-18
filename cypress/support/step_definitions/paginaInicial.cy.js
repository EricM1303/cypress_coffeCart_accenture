import { Given , And } from 'cypress-cucumber-preprocessor/steps'
import PaginaInicial from '../pages/paginaInicial.page'

// Acessar o site
Given('que o usuário acessa a página inicial do Coffee Cart', () => {
  cy.visit('/')
})

// Seleciona os cafés que deseja comprar
And('seleciona os cafés que deseja comprar', () => {
  PaginaInicial.selecionarCafes()
})

// Valida e aceita promoção
And('visualiza a promoção de café grátis e a adiciona ao carrinho', () => {
  PaginaInicial.aceitarPromocao()
})
