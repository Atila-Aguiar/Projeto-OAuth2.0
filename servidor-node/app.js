const express = require('express')
const cors = require('cors')
const passport = require('passport')
const GH_Strategy = require('passport-github').Strategy
const FB_Strategy = require('passport-facebook').Strategy
const GO_Strategy = require('passport-google-oauth20').Strategy
require('dotenv').config()


const app = express()
app.use(cors())
app.use(express.json())
app.use(passport.initialize())
app.use(passport.session())


const Porta = process.env.PORT || 3001


// Se a aplicação for subida pra nuvem, trocar esse valor
const link_aplicação = `https://auth-trash.herokuapp.com/`
// Link da paniga inicial da aplicação fontend, onde se faz o login
const link_frontend = 'http://localhost:3000/'


//Simulação de um Banco de dados e algumas funções
let DB = []
function AdicaoDeUsuario(banco_de_dados, perfil_usuario) {
    //Função para adicionar um usuario caso não esteja no banco
    let contador = 0
    banco_de_dados.map((usuario) => {
        if (perfil_usuario.id == usuario.id){
            contador += 1
        }
    })
    if (contador == 0){
        banco_de_dados.push(perfil_usuario)
    }
    return banco_de_dados
}
function RetornoDeDados(banco_de_dados, id_visitante, res   ) {
    //Função que retorna os dados do usuario, se o ID enviado estiver no "banco de dados"
    let contador = 0
    banco_de_dados.map((usuario) => {
        if(usuario.id == id_visitante) {
            contador +=1
            return res.send({'provider':usuario.provider, 'dados': usuario._json})
        }
    })
    if(contador == 0){
        return res.redirect(link_frontend)
    }
}



// Configurações do Passport
passport.serializeUser((user, cb) => {
    cb(null, user)
})
passport.deserializeUser((user, cb) => {
    return cb(user, id)
})


//Rota do Github
passport.use(new GH_Strategy({
    clientID: process.env.CLIENT_ID_GITHUB,
    clientSecret: process.env.CLIENT_SECRET_GITHUB,
    callbackURL: `${link_aplicação}auth/github/callback`

},  (access_token, refreshToken, profile, cb) => {
        AdicaoDeUsuario(DB, profile)
        return cb(null, profile)
    }
))
app.get('/auth/github', passport.authenticate('github'))
app.get('/auth/github/callback', 
    passport.authenticate('github', {failureRedirect: link_frontend}),// Rota de redirecionamento caso de algum problema no login
    (req,res) => {
        //Caso de certo ele redereciona com o ID
        res.redirect(link_frontend + 'logado/' + req.user.id + '/')
    }
)


//Rota do Facebook
passport.use(new FB_Strategy({
    clientID: process.env.CLIENT_ID_FACEBOOK,
    clientSecret: process.env.CLIENT_SECRET_FACEBOOK,
    callbackURL: `${link_aplicação}auth/facebook/callback`,
    // Pedindo informações a mais, sem isso so conseguimos o id e o nome
    profileFields: ['id', 'displayName', 'photos', 'link', 'emails']

},  (access_token, refreshToken, profile, cb) => {
        AdicaoDeUsuario(DB, profile)
        return cb(null, profile)
    }
))
app.get('/auth/facebook', passport.authenticate('facebook'))
app.get('/auth/facebook/callback', 
    passport.authenticate('facebook', {failureRedirect: link_frontend}),
    (req, res) => {
        res.redirect(link_frontend + 'logado/' + req.user.id + '/')
    }
)


//Rota do Gmail/Google
passport.use(new GO_Strategy({
    clientID: process.env.CLIENT_ID_GOOGLE,
    clientSecret: process.env.CLIENT_SECRET_GOOGLE,
    callbackURL: `${link_aplicação}auth/google/callback`

},  (access_token, refreshToken, profile, cb) => {
        AdicaoDeUsuario(DB, profile)
        return cb(null, profile)
    }  
))
// A rota Gmail/Google precisa de especificações na autenticação
app.get('/auth/google', passport.authenticate('google',{scope: ['profile', 'email']}))
app.get('/auth/google/callback', 
    passport.authenticate('google', {scope: ['profile', 'email'], failureRedirect: link_frontend}),
    (req, res) => {
        res.redirect(link_frontend + 'logado/' + req.user.id + '/')
    }
)


//Rota para recuperação de dados do frontend
app.get('/DB/login', (req, res) => {
    RetornoDeDados(DB, req.headers.authorization, res)
})


app.listen(Porta)