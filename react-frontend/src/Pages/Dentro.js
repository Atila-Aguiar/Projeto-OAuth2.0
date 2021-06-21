import React, {useEffect, useState} from 'react'

const Dentro = () => {
    
    const [retorno, setRetorno] = useState('')

    const id = window.location.href.split('/')[window.location.href.split('/').length - 2]
    console.log(id)
    
    useEffect(async() => {
        const promessa = await fetch('http://localhost:3001/DB/login/', {
            method: "GET",
            headers: {
                "Content-type":"application/json",
                "Access-Control-Allow-Origin":"*",
                "Authorization": id
            }
        })
        const resposta = await promessa.json()
        setRetorno(resposta)
        console.log('resposta', resposta)
    }, [])
    
    if(retorno.provider == 'github'){
        var Print = (
            <>
                <div className="container text-center">
                    <img src={retorno.dados.avatar_url} className='rounded-circle w-25' />
                    <h1>Olá, {retorno.dados.login}! </h1>
                    <p>Você conseguiu entrar em nosso site com ajuda do {retorno.provider} né ?!</p>
                    <p>Ele nos passou algumas informações sobre você:</p>
                    <p>Bio: {retorno.dados.bio}</p>
                    <p>Você tem {retorno.dados.public_repos} repositorios publicos</p>
                    <p>O seu perfil também, é só <a href={retorno.dados.url} target='_blanck'>clicar aqui</a></p>
                </div>
            </>
        ) 
    }
    
    
    return(
        <>
            {Print}
        </>
    )
}

export default Dentro