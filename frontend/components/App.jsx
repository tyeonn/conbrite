import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util.js';
import SessionFormContainer from './session_form/session_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import NavBar from './navbar';

const App = () => (
  <div className='app'>
    <NavBar/>

    <Switch>
      <AuthRoute exact path='/signin/login' component={LoginFormContainer} />
      <AuthRoute exact path='/signin/signup' component={SignupFormContainer} />
      <AuthRoute exact path='/signin' component={SessionFormContainer} />
      <Route exact path='/' />
    </Switch>

  </div>
);

export default App;