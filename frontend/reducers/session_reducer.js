import {
  RECEIVE_CURRENT_USER, 
  LOGOUT_CURRENT_USER, 
  RECEIVE_EMAIL_EXISTS,
  RECEIVE_TEMP_EMAIL
} from '../actions/session_actions';

const _nullUser = Object.freeze({id: null});
const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER: 
      return {id: action.currentUser.id};
    case RECEIVE_EMAIL_EXISTS:
      return action.email;
    case RECEIVE_TEMP_EMAIL:
      return {temp: action.temp};
    // case sadfjs
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default: 
      return state;
  }
};

export default sessionReducer;