import {
  RECEIVE_EVENT,
  RECEIVE_EVENTS,
  REMOVE_EVENT
} from "../actions/event_actions";
import { merge } from "lodash";

// const _nullEvent = {};
const eventsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EVENT:
      return merge({}, state, { [action.event.id]: action.event });
    case RECEIVE_EVENTS:
      return action.events;
      // return merge({}, state, action.events);
    case REMOVE_EVENT:
      const newState = merge({}, state);
      delete newState[action.eventId];
      return newState;

    default:
      return state;
  }
};

export default eventsReducer;
