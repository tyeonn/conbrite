import React from 'react';
import { connect } from 'react-redux';
import { retrieveUser } from '../../actions/user_actions';
import UserTickets from './user_tickets';

const mapStateToProps = ({ entities: { users }}, ownProps) => ({
  users: users,
});

const mapDispatchToProps = dispatch => ({
  retrieveUser: id => dispatch(retrieveUser(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserTickets);