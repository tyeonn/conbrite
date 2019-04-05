import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, OrganizerRoute } from '../util/route_util.js';
import SessionFormContainer from './session_form/session_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import EventIndexContainer from './event/event_index_container';
import EventShowContainer from './event/event_show_container';
import CreateEventFormContainer from './event/create_event_form_container';
import EditEventFormContainer from './event/edit_event_form_container';
import NavBar from './navbar';
import Footer from './footer';

const App = () => (
  <div className='app'>
    <NavBar/>
    <div className='app-main'>
      <Switch>
        <AuthRoute exact path='/signin/login' component={LoginFormContainer} />
        <AuthRoute exact path='/signin/signup' component={SignupFormContainer} />
        <AuthRoute exact path='/signin' component={SessionFormContainer} />
        <ProtectedRoute exact path='/create' component={CreateEventFormContainer} />
        <OrganizerRoute exact path='/event/:eventId/edit' component={EditEventFormContainer} />
        <Route exact path='/event/:eventId' component={EventShowContainer}/>
        <Route exact path='/' component={EventIndexContainer}/>
      </Switch>

      <Footer />

    </div>

  </div>
);

export default App;