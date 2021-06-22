import React from 'react'
import link_backend from './link'
import logo from './logoazul.png'

const Login = () => {
    return(
            <div className='bg-info' style={{'height': '2000px'}}>
                <div className='container text-center'>
                    <h1>OAuth Trash, seu serviço de autenticação favorito!</h1>
                    <div className='row mt-5'>
                        <div className='col-lg'>
                            <h2 className='border border-dark bg bg-white w-25 d-inline'>Entra aí!</h2>
                            <img src={logo} className='w-50'/>
                            
                        </div>
                        <div className='col-sm align-items-center mt-5'>
                            <a href={link_backend + '/auth/github'} className='btn btn-secondary btn-sm w-75'>
                            <h3><span class="fa fa-github"></span> Entrar com Github </h3>
                            </a>
                            <a href={link_backend + '/auth/facebook'} className='btn btn-primary btn-sm w-75'>
                            <h3><span class="fa fa-facebook"></span> Entrar com Facebook  </h3>
                            </a>
                            <a href={link_backend + '/auth/google'} className='btn btn-danger btn-sm w-75'>
                            <h3><span class="fa fa-envelope-o"></span> Entrar com Gmail </h3>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Login