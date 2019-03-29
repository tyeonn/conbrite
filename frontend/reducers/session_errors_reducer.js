import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, RESET_SESSION_ERRORS} from '../actions/session_actions';

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SESSION_ERRORS: 
      return action.errors || [];
    case RECEIVE_CURRENT_USER:
      return [];
    case RESET_SESSION_ERRORS:
      return [];
    default:
      return [];
  }
};

export default sessionErrorsReducer;