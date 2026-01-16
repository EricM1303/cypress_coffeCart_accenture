#utf-8
# language: pt

Funcionalidade: Cadastro de usuário

  Cenário: Cadastro com sucesso no Automatize Exercise
    Dado que estou na página de login do Automatize Exercise
    Quando eu clico em "Signup / Login"
    E insiro um nome e um email válido em registrar
    E preencho os demais dados solicitados
    Então eu devo visualizar a mensagem de sucesso no registro
    E clico no botão "continue" para prosseguir à página inicial