import { connect } from 'react-redux';
import { retrieveUser } from '../../actions/user_actions';
import { removeBookmark } from '../../actions/user_actions';
import UserBookmarks from './user_bookmarks';

const mapStateToProps = ({ session, entities: { users }}, ownProps) => ({
  user: users[session.id],
  bookmarks: users[session.id].bookmarks,
  tickets: users[session.id].registered_tickets,
});

const mapDispatchToProps = dispatch => ({
  retrieveUser: id => dispatch(retrieveUser(id)),
  removeBookmark: (event, id) => dispatch(removeBookmark(event, id))
}); 

export default connect(mapStateToProps, mapDispatchToProps)(UserBookmarks);