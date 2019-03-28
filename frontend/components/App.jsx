import React from 'react';
import Profile from './profile/profile_container';
import { Route, Link, Switch } from 'react-router-dom';
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
      <Route path='/signin/login'><LoginFormContainer/></Route>
      <Route path='/signin/signup'><SignupFormContainer/></Route>
      <Route path='/signin'><SessionFormContainer/></Route>
    </Switch>


  </>
);

export default App;