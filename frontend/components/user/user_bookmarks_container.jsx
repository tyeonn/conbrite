import { connect } from 'react-redux';
import { retrieveUser } from '../../actions/user_actions';
import { removeBookmark } from '../../actions/user_actions';
import UserBookmarks from './user_bookmarks';

const mapStateToProps = ({ session, entities: { users }}, ownProps) => ({
  user: users[session.id],
  bookmarks: users[session.id].bookmarks
});

const mapDispatchToProps = dispatch => ({
  retrieveUser: id => dispatch(retrieveUser(id)),
  removeBookmark: event => dispatch(removeBookmark(event))
}); 

export default connect(mapStateToProps, mapDispatchToProps)(UserBookmarks);