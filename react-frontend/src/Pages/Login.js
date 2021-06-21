import React from 'react'

const Login = () => {
    const link_backend = 'https://auth-trash.herokuapp.com'
    return(
        <>
            <div className='container'>
                <a href={link_backend + '/auth/github'} className='btn btn-secondary btn-sm'>
                <h3>Entrar com <span class="fa fa-github"></span>Github</h3>
                </a>
            </div>
            <div className='container'>
                <a href={link_backend + '/auth/facebook'} className='btn btn-primary btn-sm'>
                <h3>Entrar com <span class="fa fa-facebook"></span>acebook</h3>
                </a>
            </div>
            <div className='container'>
                <a href={link_backend + '/auth/google'} className='btn btn-danger btn-sm'>
                <h3>Entrar com <span class="fa fa-google"></span>oogle</h3>
                </a>
            </div>
        </>
    )
}

export default Login