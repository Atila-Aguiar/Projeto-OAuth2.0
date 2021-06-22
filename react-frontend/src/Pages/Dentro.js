import React, {useEffect, useState} from 'react'
import link_backend from './link'

const Dentro = () => {
    
    const [retorno, setRetorno] = useState('')

    const id = window.location.href.split('/')[window.location.href.split('/').length - 2]
    
    useEffect(async() => {
        const promessa = await fetch(`${link_backend}/DB/login/`, {
            method: "GET",
            headers: {
                "Content-type":"application/json",
                "Access-Control-Allow-Origin":"*",
                "Authorization": id
            }
        })
        const resposta = await promessa.json()
        setRetorno(resposta)
    }, [])
    
    if(retorno.provider == 'github'){
        var Print = (
                <div className="container text-center p-2 bg bg-dark w-50 text-light">
                    <img src={retorno.dados.avatar_url} className='rounded-circle w-25' />
                    <h1>Olá, {retorno.dados.login}! </h1>
                    <p>Você conseguiu entrar em nosso site com ajuda do {retorno.provider} né?!</p>
                    <p>Ele nos passou algumas informações sobre você:</p>
                    <p>Bio: {retorno.dados.bio}</p>
                    <p>Você tem {retorno.dados.public_repos} repositorios publicos</p>
                    <p>O seu perfil também, é só <a href={retorno.dados.html_url} target='_blanck'>clicar aqui</a></p>
                </div>
        ) 
    }
    if(retorno.provider == 'facebook'){
        var Print = (
                <div className="container text-center p-2 bg bg-dark w-50 text-light">
                    <img src={retorno.dados.picture.data.url} className='rounded-circle w-25' />
                    <h1>Olá, {retorno.dados.name}! </h1>
                    <p>Você conseguiu entrar em nosso site com ajuda do {retorno.provider} né?!</p>
                    <p>Ele praticamente não nos passou informações sobre você, além do nome e foto.</p>
                </div>
        )
    }
    if(retorno.provider == 'google'){
        var Print = (
                <div className="container text-center p-2 bg bg-dark w-50 text-light">
                    <img src={retorno.dados.picture} className='rounded-circle w-25' />
                    <h1>Olá, {retorno.dados.name}! </h1>
                    <p>Você conseguiu entrar em nosso site com ajuda do {retorno.provider} né?!</p>
                    <p>Ele nos passou informações basicas sobre você:</p>
                    <p>Seu email: {retorno.dados.email}</p>
                    <p>E a localização do seu email {retorno.dados.locale}</p>
                </div>
        )
    }
    
    
    return(
        <div className='bg bg-warning pt-5' style={{'height':'2000px'}}>
            {Print}
        </div>
    )
}

export default Dentro