import React from 'react';
import { isAuthenticated } from './Auth.js';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import Initial from './pages/Initial';
import Perfil from './pages/Perfil';

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
      <PrivateRoute exact path='/' component={() => <Initial/>} />
      <Route exact path='/login' component={() => <Login/>} />
      <PrivateRoute path='/perfil' component={() => <Perfil/>} />
      <Route component={ () => <Login /> } /> 
    </Switch>
  </BrowserRouter>
);

export default Routes;