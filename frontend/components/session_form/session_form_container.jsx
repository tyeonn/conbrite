import React from 'react';
import { connect } from 'react-redux';
import { checkEmailExists, saveTempEmail } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';


const mapStateToProps = ({ errors }, ownProps) => ({
  formType: 'SignIn',
  errors: errors.session,
});

const mapDispatchToProps = dispatch => ({
  checkEmailExists: email => dispatch(checkEmailExists(email)),
  saveTempEmail: email => dispatch(saveTempEmail(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);