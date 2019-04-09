import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER,} from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { merge } from 'lodash';

const _nullUser = {};
const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER: 
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    case RECEIVE_USER:
      return merge({}, state, { [action.user.id]: action.user });
    default:
      return state;
  }
};

export default usersReducer;