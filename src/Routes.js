import React from 'react';
import { isAuthenticated } from './Auth.js';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route { ...rest } render={props => (
    isAuthenticated() ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )
  )} />
)

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={() => <h1>Opa meu bomm</h1>} />
      <Route exact path='/login' component={() => <h1>login</h1>} />
      <PrivateRoute path='/perfil' component={() => <h1>Autenticadissimo</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;