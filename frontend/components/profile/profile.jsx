import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ProfileItem from './profile_item';


class Profile extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e){
    this.props.history.push('/signin');
    window.location.reload();
  }
  render(){
    const { currentUser, logout } = this.props;
    if(currentUser){
      return(
        <div className='header-profile signedin'>
          <i className="fas fa-user-circle" ></i>

          {/* implement dropdown here */}

          <ul className='header-profile-dropdown hidden'>
            {/* <ProfileItem /> */}
            <li onClick={logout}>Logout</li>
            {/* <li><Link to='/login'>Sign In</Link></li>
            <li><Link to='/signup'>Sign Up</Link></li> */}
          </ul>
        </div>
      )
    }else{
      return(
        <div className='header-profile signedout'>
          <Link to='/signin' onClick={() => this.handleClick()}>Sign In</Link>
          {/* <Link to={{pathname: '/signin', state: 'flush' }}>Sign In</Link> */}
        </div>
      )
    }
  }

}


export default withRouter(Profile);