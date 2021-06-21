import React from 'react'
import { Route, Switch} from 'react-router-dom'
import Login from './Pages/Login'
import Dentro from './Pages/Dentro'

const Rotas = () => {
    return(
        <Switch>
            <Route path='/' component={Login} exact/>
            <Route path='/logado' component={Dentro} />
        </Switch>
    )
}

export default Rotas