import { connect } from 'react-redux';
import React from 'react';
import EventForm from './event_form';
import { retrieveEvent, updateEvent } from '../../actions/event_actions';

const mapStateToProps = ({ errors, entities: { events } }, ownProps) => ({
  errors: errors.eventError,
  event: events[ownProps.match.params.eventId],
  formType: 'Edit Event'
});

const mapDispatchToProps = dispatch => ({
  updateEvent: event => dispatch(updateEvent(event)),
});

class EditEventForm extends React.Component{
  constructor(props){
    super(props);

  }
  componentDidMount(){
    retrieveEvent(this.props.match.params.eventId);
  }

  componentDidUpdate(prevProps){
    if(prevProps.event.id != this.props.match.params.eventId){
      retrieveEvent(this.props.match.params.eventId);
    }
  }

  render(){
    return(
      <EventForm
        event={event}
        formType={formType}
        updateEvent={updateEvent}
      />
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditEventForm);