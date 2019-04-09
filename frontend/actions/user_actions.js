import * as UserApiUtil from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const retrieveUser = id => {
  return dispatch => {
    return UserApiUtil.retrieveUser(id).then(user =>
      dispatch(receiveUser(user))
    );
  };
};
