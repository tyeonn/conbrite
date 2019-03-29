import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Profile from './profile/profile_container';
import Search from './search';


class NavBar extends React.Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.signinNavLinks = this.signinNavLinks.bind(this);
  }

  handleClick(e) {
    this.props.history.push('/');
    window.location.reload();
  }

  signinNavLinks(){
    const { currentUser } = this.props;
    if (currentUser) {
      return (
        <div id='header-profile-signedin'>
          hi
        </div>
      )
    }
  }

  render(){
      return (
        <div className='navbar'>
          <div className='navbar-left'>
            <Link to='/' className='navbar-logo-link' onClick={() => this.handleClick()}>
              <img src={window.conbrite} className='navbar-logo' />
            </Link>
          </div>
          <div className='navbar-middle'>
            <Search />
          </div>
          <div className='navbar-right'>
            <ul className='navbar-right-list'>
              {/* Add link to events later */}
              <li> <Link to=''>Browse Events</Link> </li>
              <li> {this.signinNavLinks()} </li>
              <li> <Profile /> </li>
            </ul>
          </div>
        </div>
      )
  }
}

const mapStateToProps = ({ session, entities: { users }, ownProps }) => {
  return ({
    currentUser: users[session.id],
  });
};
  

export default withRouter(connect(mapStateToProps)(NavBar));