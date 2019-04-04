import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return(
    <div className='footer-container'>
      <div className='footer-info'>
        <div className='footer-links'>
          <Link to=''> About </Link>
          <Link to=''> Blog </Link>
          <Link to=''> Help </Link>
          <Link to=''> Careers </Link>
          <Link to=''> Press </Link>
          <Link to=''> Developers </Link>
          <Link to=''> Terms </Link>
          <Link to=''> Privacy </Link>
          <Link to=''> Cookies </Link>
        </div>
        <select className='footer-dropdown'>
          <option value="Gaming"> United States </option>
          <option value="Canada"> Canada </option>
          <option value="United Kingdom"> United Kingdom </option>
          
        </select>
      </div>
      <p><i className="far fa-copyright"></i> 2019 Conbrite</p>
      <img src={window.c_logo} className='footer-logo' />
    </div>
  )
};
export default Footer;