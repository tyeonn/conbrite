import { connect } from "react-redux";
import React from "react";
import EventForm from "./event_form";
import { retrieveEvent, updateEvent } from "../../actions/event_actions";

const _defaultEvent = {
  title: "",
  description: "",
  address: "",
  image_url: "",
  start_date: "",
  end_date: "",
  max_tickets: 0
};

const mapStateToProps = ({ errors, entities: { events, tickets } }, ownProps) => ({
  errors: errors.eventError,
  event: events[ownProps.match.params.eventId] || _defaultEvent,
  formType: "Edit Event"
});

const mapDispatchToProps = dispatch => ({
  updateEvent: event => dispatch(updateEvent(event))
});

class EditEventForm extends React.Component {
  componentDidMount() {
    retrieveEvent(this.props.match.params.eventId);
  }

  // componentDidUpdate(prevProps){
  //   if(prevProps.event.id != this.props.match.params.eventId){
  //     retrieveEvent(this.props.match.params.eventId);
  //   }
  // }

  render() {
    return (
      <EventForm
        event={this.props.event}
        formType={this.props.formType}
        updateEvent={this.props.updateEvent}
        retrieveEvent={retrieveEvent}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditEventForm);
