import * as EventApiUtil from "../util/event_api_util";

export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const REMOVE_EVENT = "REMOVE_EVENT";
export const RECEIVE_EVENT_ERRORS = "RECEIVE_EVENT_ERRORS";
export const RESET_EVENT_ERRORS = "RESET_EVENT_ERRORS";

export const receiveEvent = event => ({
  type: RECEIVE_EVENT,
  event
});

export const receiveEvents = events => ({
  type: RECEIVE_EVENTS,
  events
});

export const removeEvent = event => ({
  type: REMOVE_EVENT,
  eventId: event.id
});

export const receiveEventErrors = errors => ({
  type: RECEIVE_EVENT_ERRORS,
  errors
});

export const resetEventErrors = () => ({
  type: RESET_EVENT_ERRORS
});

export const retrieveEvent = id => {
  return dispatch => {
    return EventApiUtil.retrieveEvent(id).then(
      event => dispatch(receiveEvent(event)),
      errors => dispatch(receiveEventErrors(errors.responseJSON))
    );
  };
};

//add filter later maybe
export const retrieveEvents = () => {
  return dispatch => {
    return EventApiUtil.retrieveEvents().then(
      events => dispatch(receiveEvents(events)),
      errors => dispatch(receiveEventErrors(errors.responseJSON))
    );
  };
};

export const createEvent = event => {
  return dispatch => {
    return EventApiUtil.createEvent(event).then(
      event => dispatch(receiveEvent(event)),
      errors => dispatch(receiveEventErrors(errors.responseJSON))
    );
  };
};

export const updateEvent = event => {
  return dispatch => {
    return EventApiUtil.updateEvent(event).then(
      event => dispatch(receiveEvent(event)),
      errors => dispatch(receiveEventErrors(errors.responseJSON))
    );
  };
};

export const deleteEvent = id => {
  return dispatch => {
    return EventApiUtil.deleteEvent(id).then(
      event => dispatch(removeEvent(event)),
      errors => dispatch(receiveEventErrors(errors.responseJSON))
    );
  };
};

export const searchEvents = searchValue => {
  return dispatch => {
    return EventApiUtil.searchEvents(searchValue).then(
      events => dispatch(receiveEvents(events)),
      errors => dispatch(receiveEventErrors(errors.responseJSON))
    );
  };
};


