import React from 'react';
import { connect } from 'react-redux';
import { login, resetSessionErrors } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = ({errors, session: { email }}, ownProps) => ({
  formType: 'Login',
  errors: errors.sessionError,
  email,
});

const mapDispatchToProps = dispatch => ({
  submitForm: user => dispatch(login(user)),
  resetSessionErrors: () => dispatch(resetSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);