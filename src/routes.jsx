import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ListCompany from './pages/ListCompany'
import AuthOrApp from './components/AuthOrApp'

const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={AuthOrApp} />
                <Route path="/signup" component={SignUp} />
            </Switch>
        </ BrowserRouter>
    )
}

export default Routes