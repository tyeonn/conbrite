import * as UserApiUtil from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_TICKETS = "RECEIVE_USER_TICKETS";
export const RECEIVE_USER_BOOKMARKS = "RECEIVE_USER_BOOKMARKS";

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});
export const receiveUserTickets = user => ({
  type: RECEIVE_USER_TICKETS,
  user
});
export const receiveUserBookmarks = user => ({
  type: RECEIVE_USER_BOOKMARKS,
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

export const addBookmark = (event, id )=> {
  return dispatch => {
    return UserApiUtil.addBookmark(event, id).then(user => 
      dispatch(receiveUserBookmarks(user))
    );
  };
};

export const removeBookmark = (event, id) => {
  return dispatch => {
    return UserApiUtil.removeBookmark(event, id).then(user => 
      dispatch(receiveUserBookmarks(user))
    );
  };
};
