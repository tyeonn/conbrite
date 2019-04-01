import React from 'react';
import { NavLink } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email,
      password: '', 
      hasError: true,
      active: false,
    };
    if(!this.props.email){
      this.props.history.push(`/signin`);
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push(`/signin`);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
      if (e.currentTarget.value) {
        this.setState({ active: true });
      } else {
        this.setState({ active: false});
      }
    };
  }

  renderErrors() {
    return (
      <div className={`error-message`}>
        {this.props.errors[0]}
      </div>
      // {this.props.errors}
      // <ul>
      //   {this.props.errors.map((error, i) => (
      //     <li key={`error-${i}`} className='error-message'>
      //       {error}
      //     </li>
      //   ))}
      // </ul>
    );
  }

  componentDidMount() {
    this.props.resetSessionErrors();
    if (this.state.password != '') {
      this.setState({ active: true });
    }  
    
  }

  render() {
    const activeClass = this.state.active ? 'active' : '';
    const error = this.props.errors.length  != 0 ? 'error' : '';
    return (
      <div className='login-form-container'>
        <form onSubmit={this.handleSubmit}>
          <img src={window.c_logo} className='login-logo' />
          <h2>Welcome back</h2>
          <p>Please enter your password to log in</p>
          <div id='login-form-input-container'>
            <input type="email"
              value={this.state.email}
              readOnly
              className='login-form-input'
              id='login-form-input-email'
            />
            <button type='button' 
              className='edit-email-button' 
              onClick={this.handleClick}
            >
              <i className="fas fa-pencil-alt"></i>
            </button>
          </div>
          <div className='login-form-input-password'>
            <input type="password"
              // placeholder='Password'
              value={this.state.password}
              onChange={this.update('password')}
              className={`login-form-input ${error} ${activeClass}`}
              required 
              minLength='6'
              autoFocus
            />
            <label htmlFor="login-form-input">Password</label>
            {this.renderErrors()}
          </div>
          <input type="submit" className='login-form-submit' value={this.props.formType} />
        </form>
      </div>

    )
  }
}

export default LoginForm;