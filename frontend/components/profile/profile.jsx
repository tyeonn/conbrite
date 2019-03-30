import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';


class Profile extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.state = {
      hover: false,
      hidden: 'hidden'
    };
  }
  
  handleClick(e){
    this.props.history.push('/signin');
    window.location.reload();
  }
  
  handleLogout(e){
    this.props.logout();
    this.props.history.push('/signin');
    window.location.reload();
  }

  handleMouseEnter(){
    this.setState({hover: !this.state.hover});
  }
  
  
  render(){
    const { currentUser, logout } = this.props;
    const dropdownClass = this.state.hover ? '' : 'hidden';
    if(currentUser){
      return(
        <div 
          className='navbar-right-list-profile signedin'
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseEnter}
        >
          <i className="far fa-user-circle"></i>
          <i className="fas fa-chevron-down"></i>
          {/* ${dropdownClass} for class underneath */}
          <ul className={`navbar-right-list-profile-dropdown ${dropdownClass}`}>
            <li> <NavLink to=''>Browse Events</NavLink> </li>
            <li>  <NavLink
              to='/'
              onClick={this.handleLogout}
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