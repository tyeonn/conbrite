import { connect } from 'react-redux';
import EventForm from './event_form';
import { createEvent } from '../../actions/event_actions';

const mapStateToProps = ({errors}, ownProps) => ({
  errors: errors.eventError,
  // ADD CATEGORY ID AND LOCATION ID LATER
  event: {
    title: '',
    description: '',
    address: '',
    image_url: '',
    start_date: '',
    end_date: '',
    max_tickets: 0,
  },
  formType: 'Create Event'
});

const mapDispatchToProps = dispatch => ({
  createEvent: event => dispatch(createEvent(event)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);