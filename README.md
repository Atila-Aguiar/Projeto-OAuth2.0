# Projeto-OAuth2.0
Projeto para implementação do protocolo OAuth2.0.

[Link da aplicação funcional.](https://auth-trash-frontend.herokuapp.com/)

O desafio era: Criar um site “burro” que seja autenticado por um terceiro Google, Amazon, Facebook Twiter através do protocolo OAuth 2.0.

# O que foi utilizado:
- No Frontend: Reactjs e Bootstrap.
- No Backend: Nodejs com cors, dotenv, express e passportjs para a implementação do protocolo OAuth2.0.


# Como rodar o codigo:**
### Parte Backend:
- Abrir a pasta "*servidor-node*" e usar o comando **npm i**.
- Abrir o arquivo "*app.js*" e alterar os valores das linhas 21 e 23, com o link da sua aplicação com o node e com a sua aplicação frontend.
- Criar um arquivo "*.env*" e colocar os valores de ClientID e ClientSecrets que você vai conseguir nas aplicações das redes sociais:
  #### ex:
    1. CLIENT_ID_REDESOCIAL=VALOR
    1. CLIENT_SECRET_REDESOCIAL=VALOR
- Depois usar o comando *"node app"* dentro na pasta "*servidor-node*"

### Parte Frontend:
- Abrir a pasta "*react-frontend*" e usar o comando **npm i**
- Abrir o arquivo "*src/Pages/links.js*" e alterar o valor da variavel link_backend com o link da sua aplicação backend.
- Depois usar o comando "*npm start*" dentro na pasta "*react-frontend*"
