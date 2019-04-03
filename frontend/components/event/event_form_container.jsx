import { connect } from 'react-redux';
import EventForm from './event_form';
import { createEvent, updateEvent } from '../../actions/event_actions';

const mapStateToProps = ({errors, entities: { events }}, ownProps) => ({
  errors: errors.eventError,
  events,
});

const mapDispatchToProps = dispatch => ({
  createEvent: event => dispatch(createEvent(event)),
  updateEvent: event => dispatch(updateEvent(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);