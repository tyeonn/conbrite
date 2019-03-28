import React from 'react';
import { Link } from 'react-router-dom';
import ProfileItem from './profile_item';


class Profile extends React.Component{
  constructor(props){
    super(props);
  }
  
  
  render(){
    const { currentUser, logout } = this.props;
    if(currentUser){
      return(
        <div id='header-profile-signedin'>
          <h2>Hi {currentUser.first_name}!</h2>
          <i class="fas fa-user-circle" ></i>

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
        <div id='header-profile-signedout'>
          <Link to='/signin'>Sign In</Link>
        </div>
      )
    }
  }

}


export default Profile;