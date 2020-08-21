import React from 'react';
import { Route , Switch, Redirect } from 'react-router-dom'

import { useAuthContext } from './contexts/AuthContext'

import Login from './pages/Login'
import Home from './pages/Home'
import CreateNaver from './pages/CreateNaver'
import EditNaver from './pages/EditNavers'

export default () => {
    const { isAuth } = useAuthContext()

    if(!isAuth){
        return (
            <Switch>
                <Route exact path="/login" component={Login} />
                <Redirect to="/login"/>
            </Switch>
        )
    }else {
        return (
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/navers/create" component={CreateNaver} />
                <Route exact path="/navers/edit/:id" component={EditNaver} />
                <Redirect to="/home"/>
            </Switch>
        )
    }
}
