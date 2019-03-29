import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.temp,
      first_name: '',
      last_name: '',
      password: '',
    };
    if(!this.props.temp){
      this.props.history.push(`/signin`);
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setErrorMessage = this.setErrorMessage.bind(this);
    this.resetErrorMessage = this.resetErrorMessage.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.submitForm(this.state);
  }
  handleClick(e){
    e.preventDefault();
    this.props.history.push('/signin');
  }
  

  update(field){
    return e => {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }
  
  setErrorMessage(field){
    return e => {
      if(e.currentTarget.value == ''){
        return e.currentTarget.setCustomValidity(`${field} cannot be blank`);
  
      } 
    };
  }

  resetErrorMessage(e){
    return e.currentTarget.setCustomValidity('');
  }

  renderErrors(field){
    return(
      // {this.props.errors}
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
      
    )
  }
  componentDidMount(){
    this.props.resetSessionErrors();
  }

  render() {

    return (
      <div className='signup-form-container'>
        <form onSubmit={this.handleSubmit}>
          <img src={window.c_logo} className='signup-logo' />
          <h2>Welcome</h2>
          <p>Create an account</p>
          {this.renderErrors()}
          <div className='signup-form-input-container'>
            <input type="email"
              value={this.state.email}
              readOnly
              className='signup-form-input'
            />
            <button type='button' onClick={this.handleClick}>hi</button>
          </div>
          <input type="text"
            placeholder='First Name'
            value={this.state.first_name}
            onChange={this.update('first_name')}
            className='signup-form-input'
            pattern='[A-Za-z]{3,20}'
            title='Enter 3 or more letters'
            onInvalid={this.setErrorMessage('First Name')}
            onInput={this.resetErrorMessage}
            required
          />
          <input type="text"
            placeholder='Last Name'
            value={this.state.last_name}
            onChange={this.update('last_name')}
            className='signup-form-input'
            pattern='[A-Za-z]{3,20}'
            title='Enter 3 or more letters'
            onInvalid={this.setErrorMessage('Last Name')}
            onInput={this.resetErrorMessage}
            required
          />
          <input type="password"
            placeholder='Password'
            value={this.state.password}
            onChange={this.update('password')}
            className='signup-form-input'
            required 
            minLength='6'

          />
          <input type="submit" className='signup-form-submit' value={this.props.formType} />
        </form>
      </div>

    )
  }
}

export default SignupForm;