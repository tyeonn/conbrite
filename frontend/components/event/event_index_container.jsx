import { connect } from "react-redux";
import EventIndex from "./event_index";
import { retrieveEvents } from "../../actions/event_actions";

const mapStateToProps = ({ errors, entities: { events } }, ownProps) => ({
  errors: errors.eventError,
  events: Object.values(events)
});

const mapDispatchToProps = dispatch => ({
  retrieveEvents: () => dispatch(retrieveEvents())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventIndex);
