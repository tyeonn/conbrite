import { connect } from "react-redux";
import Profile from "./profile";
import { logout } from "../../actions/session_actions";
import { retrieveUser } from '../../actions/user_actions';

const mapStateToProps = ({ session, entities: { users }, ownProps }) => {
  return {
    currentUser: users[session.id],
    tickets: session.id != null ? users[session.id].registered_tickets : null
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  retrieveUser: id => dispatch(retrieveUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
