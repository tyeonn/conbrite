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
    image_url: "https://cnet1.cbsistatic.com/img/xBshnVs6E1cL8i_shQt9OoAPVus=/1600x900/2018/06/13/792de549-6718-438c-8359-4e4989606bc5/fortnite-booth-e3-2018-7646.jpg",
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
