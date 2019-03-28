import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.id),
});

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



export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
