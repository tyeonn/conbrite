import { connect } from "react-redux";
import React from "react";
import EventForm from "./event_form";
import { retrieveEvent, updateEvent } from "../../actions/event_actions";
import { receiveTickets, createTicket, deleteTicket } from "../../actions/ticket_actions";

const _defaultEvent = {
  title: "",
  description: "",
  address: "",
  image_url: "",
  start_date: "",
  end_date: "",
};

const mapStateToProps = ({ errors, entities: { events, tickets } }, ownProps) => ({
  errors: errors.eventError,
  event: events[ownProps.match.params.eventId] || _defaultEvent,
  tickets,
  formType: "Edit Event"
});

const mapDispatchToProps = dispatch => ({
  receiveTickets: tickets => dispatch(receiveTickets(tickets)),
  updateEvent: event => dispatch(updateEvent(event)),
  createTicket: ticket => dispatch(createTicket(ticket)),
  deleteTicket: id => dispatch(deleteTicket(id)),
});

class EditEventForm extends React.Component {
  componentDidMount() {
    retrieveEvent(this.props.match.params.eventId);
  }

  render() {
    return (
      <EventForm
        event={this.props.event}
        formType={this.props.formType}
        updateEvent={this.props.updateEvent}
        retrieveEvent={retrieveEvent}
        tickets={this.props.tickets}
        receiveTickets={this.props.receiveTickets}
        createTicket={this.props.createTicket}
        deleteTicket={this.props.deleteTicket}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditEventForm);
