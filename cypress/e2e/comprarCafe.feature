#utf-8
# language: pt

Funcionalidade: Finalizar compra de cafés 

  Cenário: Concluir a compra de cafés selecionados com sucesso
    Dado que o usuário acessa a página inicial do Coffee Cart
    Quando seleciona os cafés que deseja comprar
    E visualiza a promoção de café grátis e a adiciona ao carrinho
    E clica no ícone do carrinho de compras
    E exclui um café do seu carrinho
    Então preenche seu dados para finalizar compra
    E visualiza a mensagem de compra finalizada com sucesso