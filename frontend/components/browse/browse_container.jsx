import {connect} from 'react-redux';
import Browse from './browse';
import { searchEvents, retrieveEvents } from '../../actions/event_actions';

const mapStateToProps = ({entities: {events} }, ownProps) => ({
  events,
});

const mapDispatchToProps = dispatch => ({
  searchEvents: searchValue => dispatch(searchEvents(searchValue)),
  retrieveEvents: () => dispatch(retrieveEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
