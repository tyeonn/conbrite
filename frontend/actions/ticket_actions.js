import * as TicketApiUtil from '../util/ticket_api_util';
import * as UserActions from '../actions/user_actions';
export const RECEIVE_TICKET = "RECEIVE_TICKET";
export const RECEIVE_TICKETS = "RECEIVE_TICKETS";
export const REMOVE_TICKET = "REMOVE_TICKET";
export const RECEIVE_TICKET_ERRORS = "RECEIVE_TICKET_ERRORS";

export const receiveTicket = ticket => ({
  type: RECEIVE_TICKET,
  ticket,
});
export const receiveTickets = tickets => ({
  type: RECEIVE_TICKETS,
  tickets,
});
export const removeTicket = ticket => ({
  type: REMOVE_TICKET,
  ticketId: ticket.id,
});
export const receiveTicketErrors = errors => ({
  type: RECEIVE_TICKET_ERRORS,
  errors,
});

export const retrieveTicket = id => {
  return dispatch => {
    TicketApiUtil.retrieveTicket(id).then(
      ticket => dispatch(receiveTicket(ticket)),
      errors => dispatch(receiveTicketErrors(errors.responseJSON))
    );
  };
};
export const retrieveTickets = (eventId) => {
  return dispatch => {
    TicketApiUtil.retrieveTickets(eventId).then(
      tickets => dispatch(receiveTickets(tickets)),
      errors => dispatch(receiveTicketErrors(errors.responseJSON))
    );
  };
};
export const deleteTicket = (id) => {
  return dispatch => {
    TicketApiUtil.deleteTicket(id).then(
      ticket => dispatch(removeTicket(ticket)),
      errors => dispatch(receiveTicketErrors(errors.responseJSON))
    );
  };
};

export const createTicket = ticket => {
  return dispatch => {
    TicketApiUtil.createTicket(ticket).then(
      ticket => dispatch(receiveTicket(ticket)),
      errors => dispatch(receiveTicketErrors(errors.responseJSON))
    );
  };
};

export const updateTicket = ticket => {
  return dispatch => {
    TicketApiUtil.updateTicket(ticket).then(
      ticket => dispatch(receiveTicket(ticket)),
      errors => dispatch(receiveTicketErrors(errors.responseJSON))
    );
  };
};

export const sellTicket = ticket => {
  return (dispatch, getState) => {
    TicketApiUtil.sellTicket(ticket).then(
      ticket => dispatch(receiveTicket(ticket)),
      errors => dispatch(receiveTicketErrors(errors.responseJSON))
    ).then(() => {
      // debugger
      dispatch(UserActions.retrieveUser(getState().session.id));
    });
  };
};

export const refundTicket = ticket => {
  return dispatch => {
    TicketApiUtil.refundTicket(ticket).then(
      ticket => dispatch(receiveTicket(ticket)),
      errors => dispatch(receiveTicketErrors(errors.responseJSON))
    ).then(() => {
      // debugger
      dispatch(UserActions.retrieveUser(getState().session.id));
    });
  };
};

