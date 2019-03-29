import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions';
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER: 
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case LOGOUT_CURRENT_USER:
      const newState = merge({}, state);
      //deletes the first index which is current user
      delete newState[1];
      return newState;
    default:
      return state;
  }
};

export default usersReducer;