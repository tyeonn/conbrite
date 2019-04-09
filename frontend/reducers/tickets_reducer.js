import {
  RECEIVE_TICKET,
  RECEIVE_TICKETS,
  REMOVE_TICKET
} from "../actions/ticket_actions";
import { merge } from 'lodash';

const ticketsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_TICKET:
      return merge({}, state, action.ticket);
    case RECEIVE_TICKETS:
      return merge({}, state, action.tickets);
    case REMOVE_TICKET:
      let newState = merge({}, state);
      delete newState[action.ticketId];
      return newState;
    default:
      return state;
  }
};

export default ticketsReducer;