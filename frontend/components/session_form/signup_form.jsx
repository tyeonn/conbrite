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
    return e => this.setState({
      [field]: e.currentTarget.value
    });
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
          />
          <input type="text"
            placeholder='Last Name'
            value={this.state.last_name}
            onChange={this.update('last_name')}
            className='signup-form-input'
          />
          <input type="password"
            placeholder='Password'
            value={this.state.password}
            onChange={this.update('password')}
            className='signup-form-input'
          />
          <input type="submit" className='signup-form-submit' value={this.props.formType} />
        </form>
      </div>

    )
  }
}

export default SignupForm;