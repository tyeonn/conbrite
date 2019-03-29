import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_EMAIL_EXISTS = 'RECEIVE_EMAIL_EXISTS';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RESET_SESSION_ERRORS = 'RESET_SESSION_ERRORS';
export const RECEIVE_TEMP_EMAIL = 'RECEIVE_TEMP_EMAIL';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

//Check if email exists on sign in
export const receiveEmailExists = email => ({
  type: RECEIVE_EMAIL_EXISTS,
  email,
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

// Takes in an array of errors
export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors: [errors]
});

//Reset the error of email not existing on sign in
export const resetSessionErrors = () => ({
  type: RESET_SESSION_ERRORS,
});

//Email to be transferred to the login/signup form
export const receiveTempEmail = temp => ({
  type: RECEIVE_TEMP_EMAIL,
  temp,
});

export const signup = user => {
  return dispatch => {
    SessionAPIUtil.signup(user).then(
      user => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveSessionErrors(errors.responseJSON))
    );
  };
};

export const login = user => {
  return dispatch => {
    SessionAPIUtil.login(user).then(
      user => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveSessionErrors(errors.responseJSON))
    );
  };
};

export const logout = () => {
  return dispatch => {
    SessionAPIUtil.logout().then(
      () => dispatch(logoutCurrentUser())
    );
  };
};


export const checkEmailExists = (email) => {
  return dispatch => {
    return SessionAPIUtil.checkEmailExists(email).then(
      email => dispatch(receiveEmailExists(email))
      // errors => dispatch(receiveSessionErrors(errors.responseJSON))
      // () => dispatch(resetSessionErrors())
    );
  };
};

