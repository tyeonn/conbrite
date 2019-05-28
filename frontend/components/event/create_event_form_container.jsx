import { connect } from "react-redux";
import EventForm from "./event_form";
import { createEvent } from "../../actions/event_actions";
import { receiveTickets, createTicket, deleteTicket } from "../../actions/ticket_actions";

const mapStateToProps = ({ errors, entities: { tickets } }, ownProps) => ({
  errors: errors.eventError,
  // ADD CATEGORY ID AND LOCATION ID LATER
  event: {
    title: "",
    description: "",
    address: "",
    image_url: "https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    start_date: "",
    end_date: "",
    category_id: 1,
    
  },
  tickets,
  formType: "Create Event"
});

const mapDispatchToProps = dispatch => ({
  receiveTickets: tickets => dispatch(receiveTickets(tickets)),
  createEvent: event => dispatch(createEvent(event)),
  createTicket: ticket => dispatch(createTicket(ticket)),
  deleteTicket: id => dispatch(deleteTicket(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm);
