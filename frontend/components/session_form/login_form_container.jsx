import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import LoginForm from './login_form';

const mapStateToProps = ({errors}, ownProps) => ({
  formType: 'Login',
  errors: errors.session,
});

const mapDispatchToProps = dispatch => ({
  submitForm: user => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);