import { connect } from "react-redux";
import {
  checkEmailExists,
  saveTempEmail,
  receiveTempEmail
} from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = ({ errors, session: { email, temp } }, ownProps) => ({
  formType: "SignIn",
  errors: errors.sessionError,
  email,
  temp
});

const mapDispatchToProps = dispatch => ({
  checkEmailExists: email => dispatch(checkEmailExists(email)),
  receiveTempEmail: email => dispatch(receiveTempEmail(email))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
