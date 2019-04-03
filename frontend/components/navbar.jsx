import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import Profile from './profile/profile_container';
import Search from './search';


class NavBar extends React.Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.signedInNavLinks = this.signedInNavLinks.bind(this);
  }

  handleClick(e) {
    this.props.history.push('/');
    // window.location.reload();
  }

  signedInNavLinks(){
    const { currentUser } = this.props;
    if (currentUser) {
      return (
        <>
          <li> <NavLink to='/create' id='createEvent'>Create Event</NavLink> </li>
         
        </>
      )
    }
  }

  render(){
      return (
        <div className='navbar'>
          <div className='navbar-left'>
            <NavLink to='/' className='navbar-logo-link' onClick={() => this.handleClick()}>
              <img src={window.conbrite} className='navbar-logo' />
            </NavLink>
          </div>
          <div className='navbar-middle'>
            <Search />
          </div>
          <div className='navbar-right'>
            <ul className='navbar-right-list'>
              <li> <NavLink to=''>Browse Events</NavLink> </li>
              {this.signedInNavLinks()}
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