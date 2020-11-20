import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/signup" component={SignUp} />
            </Switch>
        </ BrowserRouter>
    )
}

export default Routes