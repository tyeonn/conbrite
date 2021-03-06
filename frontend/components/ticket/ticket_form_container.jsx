import { connect } from "react-redux";
import TicketForm from "./ticket_form";
import { sellTicket } from "../../actions/ticket_actions";

const mapStateToProps = ({ session, entities: { tickets, users } }, ownProps) => ({
  currentUser: users[session.id],
  tickets: tickets,
  modalClose: ownProps.modalClose
});

const mapDispatchToProps = dispatch => ({
  sellTicket: ticket => dispatch(sellTicket(ticket)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketForm);
