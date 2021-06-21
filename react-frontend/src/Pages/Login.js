import React from 'react'

const Login = () => {
    const link_backend = 'http://localhost:3001'
    return(
        <>
            <div className='container'>
                <a href={link_backend + '/auth/github'} className='btn btn-secondary btn-sm'>
                <h3>Entrar com <span class="fa fa-github"></span>Github</h3>
                </a>
            </div>
        </>
    )
}

export default Login