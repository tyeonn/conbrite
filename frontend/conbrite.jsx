// Entry file
import React from "react";
import ReactDOM from "react-dom";
import configureStore from "../frontend/store/store";
import Root from "./components/root";

//TESTING - REMOVE BEFORE PRODUCTION
import * as sessionActions from "../frontend/actions/session_actions";
import { checkEmailExists } from "./util/session_api_util";
import * as eventActions from "../frontend/actions/event_actions";
import * as eventApiUtil from "../frontend/util/event_api_util";

//TESTING - REMOVE BEFORE PRODUCTION

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
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

  // TESTING - REMOVE BEFORE PRODUCTION

  ReactDOM.render(<Root store={store} />, root);
});
