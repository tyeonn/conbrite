import React from 'react';
import Profile from './profile/profile_container';
import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util.js';
import SessionFormContainer from './session_form/session_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';

const App = () => (
  <>
    <header className='navBar'>
      <Link to='/' className='header-link'>
        <h2>Conbrite</h2>
      </Link>
      <Profile/>
    </header>
    <Switch>
      <AuthRoute exact path='/signin/login' component={LoginFormContainer} />
      <AuthRoute path='/signin/signup' component={SignupFormContainer} />
      <Route path='/signin' component={SessionFormContainer} />
    </Switch>


  </>
);

export default App;