import { connect } from 'react-redux';
import EventShow from './event_show';
import { retrieveEvent, deleteEvent } from '../../actions/event_actions';
import { retrieveUser } from '../../actions/user_actions';

const mapStateToProps = ({errors, entities: { events, users }, session}, ownProps) => ({
  errors: errors.eventError,
  event: events[ownProps.match.params.eventId],
  currentUser: users[session.id],
  users,
});


const mapDispatchToProps = dispatch => ({
  retrieveEvent: id => dispatch(retrieveEvent(id)),
  deleteEvent: id => dispatch(deleteEvent(id)),
  retrieveUser: id => dispatch(retrieveUser(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);