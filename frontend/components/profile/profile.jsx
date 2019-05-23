import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    // this.handleLogout = this.handleLogout.bind(this);
    this.state = {
      hover: false,
    };
  }
  
  handleClick(e) {
    this.props.history.push('/signin');
    window.location.reload();
  }
  
  // handleLogout(e){
  //   this.props.logout();
  //   // this.props.history.push('/signin');
  //   // window.location.reload();
  // }

  handleMouseEnter(){
    this.setState({hover: true});
  }
  handleMouseLeave(){
    this.setState({hover: false});
  }

  componentDidMount() {
    if(this.props.currentUser) {
      this.props.retrieveUser(this.props.currentUser.id);
    }
  }
  
  
  render() {
    const { currentUser, logout } = this.props;
    const dropdownClass = this.state.hover ? '' : 'hidden';
    let tickets = this.props.tickets ? this.props.tickets.length : 0;
    let bookmarks = this.props.bookmarks ? this.props.bookmarks.length : 0;
    
    if(currentUser) {
      return(
        <div 
          className='navbar-right-list-profile signedin'
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <i className="far fa-user-circle"></i>
          <i className="fas fa-chevron-down"></i>
          <ul className={`navbar-right-list-profile-dropdown ${dropdownClass}`}>
            <li> <Link to='/browse'>Browse Events</Link> </li>
            <li> <NavLink to={`/${currentUser.id}/tickets`}>Tickets ({tickets})</NavLink> </li>
            <li> <NavLink to={`/${currentUser.id}/favorites`}>Likes ({bookmarks})</NavLink> </li>
            {/* <li> <NavLink to=''>Following (0)</NavLink> </li> */}
            {/* <li> <NavLink to=''>Manage Events</NavLink> </li> */}
            {/* <li> <NavLink to=''>Organizer Profile</NavLink> </li> */}
            {/* <li> <NavLink to=''>Account Settings</NavLink> </li> */}
            {/* <li> <NavLink to=''>Create Event</NavLink> </li> */}
            <li>  <NavLink
              to='/signin'
              onClick={logout}
            >
              Logout
              </NavLink>
            </li>
          </ul>
        </div>
      )
    }else{
      return(
        <div className='navbar-right-list-profile signedout'>
          <NavLink to='/signin' onClick={this.handleClick}>Sign In</NavLink>
        </div>
      )
    }
  }

}


export default withRouter(Profile);