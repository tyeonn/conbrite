import React from 'react';
import { connect } from 'react-redux';
import { signup, resetSessionErrors } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import SignupForm from './signup_form';

const mapStateToProps = ({errors, session: { temp }}, ownProps) => {
  return({
    formType: 'Signup',
    errors: errors.session,
    temp,
  });
};

const mapDispatchToProps = dispatch => ({
  submitForm: user => dispatch(signup(user)),
  resetSessionErrors: () => dispatch(resetSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);