import { connect } from "react-redux";
import Profile from "./profile";
import { logout } from "../../actions/session_actions";

const mapStateToProps = ({ session, entities: { users }, ownProps }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
