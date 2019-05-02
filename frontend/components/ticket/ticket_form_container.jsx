import { connect } from "react-redux";
import TicketForm from "./ticket_form";
import { sellTicket } from "../../actions/ticket_actions";

const mapStateToProps = ({ entities: { tickets } }) => ({
  tickets: tickets,
});

const mapDispatchToProps = dispatch => ({
  sellTicket: ticket => dispatch(sellTicket(ticket)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketForm);
