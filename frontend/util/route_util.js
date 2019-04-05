import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  
  const eventId = ownProps.computedMatch.params.eventId;
  const organizerId = state.entities.events[eventId] ? 
    state.entities.events[eventId].organizer_id : '';
  return ({
    loggedIn: Boolean(state.session.id),
    isOrganizer: Boolean(state.session.id == organizerId),
    eventId: eventId
  });
};

//Can only see if not logged in. Used for auth
const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={ (props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to='/' />
    )
  )} />
)

//Can only see if logged in. 
const Protected = ({ component: Component, path, exact, loggedIn }) => (
  <Route path={path} exact={exact} render={ (props) => (
    loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to='/signin' />
    )
  )} />
)

const Organizer = ({ component: Component, path, exact, isOrganizer, eventId }) => {
  return(
  <Route path={path} exact={exact} render={(props) => (
    isOrganizer ? (
      <Component {...props} />
    ) : (
          <Redirect to={`/event/${parseInt(eventId)}`} />
      )
  )} />
)
    }


export const OrganizerRoute = withRouter(connect(mapStateToProps)(Organizer));
export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
