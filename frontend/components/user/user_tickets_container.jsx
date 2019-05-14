import React from 'react';
import { connect } from 'react-redux';
import { retrieveUser } from '../../actions/user_actions';
import { refundTicket } from '../../actions/ticket_actions';
import UserTickets from './user_tickets';

const mapStateToProps = ({ session, entities: { users }}, ownProps) => ({
  user: users[session.id],
  tickets: users[session.id].registered_tickets
});

const mapDispatchToProps = dispatch => ({
  retrieveUser: id => dispatch(retrieveUser(id)),
  refundTicket: ticket => dispatch(refundTicket(ticket))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserTickets);