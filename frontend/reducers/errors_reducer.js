import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import eventErrorsReducer from "./event_errors_reducer";
import ticketErrorsReducer from "./ticket_errors_reducer";

const errorsReducer = combineReducers({
  sessionError: sessionErrorsReducer,
  eventError: eventErrorsReducer,
  ticketError: ticketErrorsReducer,
});

export default errorsReducer;
