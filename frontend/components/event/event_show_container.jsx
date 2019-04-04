import { connect } from 'react-redux';
import EventShow from './event_show';
import { retrieveEvent, deleteEvent } from '../../actions/event_actions';

const mapStateToProps = ({errors, entities: { events }}, ownProps) => ({
  errors: errors.eventError,
  event: events[ownProps.match.params.eventId],
});

const mapDispatchToProps = dispatch => ({
  retrieveEvent: id => dispatch(retrieveEvent(id)),
  deleteEvent: id => dispatch(deleteEvent(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);