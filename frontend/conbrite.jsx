// Entry file
import React from "react";
import ReactDOM from "react-dom";
import configureStore from "../frontend/store/store";
import Root from "./components/root";
import Modal from 'react-modal';

//TESTING - REMOVE BEFORE PRODUCTION
import * as sessionActions from "../frontend/actions/session_actions";
import { checkEmailExists } from "./util/session_api_util";
import * as eventActions from "../frontend/actions/event_actions";
import * as userApiUtil from '../frontend/util/user_api_util';
import * as userActions from '../frontend/actions/user_actions';
import * as eventApiUtil from "../frontend/util/event_api_util";
import * as ticketApiUtil from "../frontend/util/ticket_api_util";
import * as ticketActions from '../frontend/actions/ticket_actions';

//TESTING - REMOVE BEFORE PRODUCTION
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  Modal.setAppElement(root);
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // TESTING - REMOVE BEFORE PRODUCTION
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  window.eventActions = eventActions;
  window.eventApiUtil = eventApiUtil;
  window.signup = sessionActions.signup;
  window.checkEmailExists = sessionActions.checkEmailExists;
  window.userApiUtil = userApiUtil;
  window.userActions = userActions;
  window.ticketActions = ticketActions;
  window.ticketApiUtil = ticketApiUtil;

  // TESTING - REMOVE BEFORE PRODUCTION

  ReactDOM.render(<Root store={store} />, root);
});
