import * as UserApiUtil from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_TICKETS = "RECEIVE_USER_TICKETS";

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});
export const receiveUserTickets = user => ({
  type: RECEIVE_USER_TICKETS,
  user
});

export const retrieveUser = id => {
  return dispatch => {
    return UserApiUtil.retrieveUser(id).then(user =>
      dispatch(receiveUser(user))
    );
  };
};
export const retrieveUserTickets = id => {
  return dispatch => {
    return UserApiUtil.retrieveUser(id).then(user =>
      dispatch(receiveUserTickets(user))
    );
  };
};
