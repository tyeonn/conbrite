import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email,
      password: '' 
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
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors(field) {
    return (
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

  componentDidMount() {
    this.props.resetSessionErrors();
  }

  render() {
    return (
      <div className='login-form-container'>
        <form onSubmit={this.handleSubmit}>
          <h2>Welcome back</h2>
          <p>Please enter your password to log in</p>
          {this.renderErrors()}
          <div className='login-form-input-container'>
            <input type="email"
              value={this.state.email}
              readOnly
              className='login-form-input'
            />
            <button type='button' onClick={this.handleClick}>hi</button>
          </div>
          
          <input type="password"
            placeholder='Password'
            value={this.state.password}
            onChange={this.update('password')}
            className='login-form-input'
          />
          <input type="submit" className='login-form-submit' value={this.props.formType} />
        </form>
      </div>

    )
  }
}

export default LoginForm;