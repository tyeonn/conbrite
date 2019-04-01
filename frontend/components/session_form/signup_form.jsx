import React from 'react';
import { NavLink } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.temp,
      first_name: '',
      last_name: '',
      password: '',
      activef: false,
      activel: false,
      activep: false
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
      this.setState({ [field]: e.currentTarget.value });
      if(e.currentTarget.value){
        if(field === 'first_name'){
          this.setState({ activef: true });
        }else if(field === 'last_name'){
          this.setState({ activel: true });
        }else if(field === 'password'){
          this.setState({ activep: true });
        }
      } else {
        if (field === 'first_name') {
          this.setState({ activef: false });
        } else if (field === 'last_name') {
          this.setState({ activel: false });
        } else if (field === 'password') {
          this.setState({ activep: false });
        }
      }
    };
  }
  
  setErrorMessage(field){
    return e => {
      if(e.currentTarget.value == ''){
        return e.currentTarget.setCustomValidity(`${field} cannot be blank`);
  
      }else if(e.currentTarget.size < 3){
        return e.currentTarget.setCustomValidity(`Enter 2 or more characters`);
      }
    };
  }

  resetErrorMessage(e){
    return e.currentTarget.setCustomValidity('');
  }

  // renderErrors(field){
  //   return(
  //     // {this.props.errors}
  //     <ul>
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
      
  //   )
  // }
  
  componentDidMount(){
    this.props.resetSessionErrors();

    if (this.state.first_name != '') {
      this.setState({ activef: true });
    } 
    if (this.state.last_name != '') {
      this.setState({ activel: true });
    } 
    if (this.state.password != '') {
      this.setState({ activep: true });
    } 
  }

  render() {
    const activeClassf = this.state.activef ? 'active' : '';
    const activeClassl = this.state.activel ? 'active' : '';
    const activeClassp = this.state.activep ? 'active' : '';
    const error = this.props.errors.length != 0 ? 'error' : '';
    return (
      <div className='signup-form-container'>
        <form onSubmit={this.handleSubmit} >
          <img src={window.c_logo} className='signup-logo' />
          <h2>Welcome</h2>
          <p>Create an account</p>
          {/* {this.renderErrors()} */}
          <div id='signup-form-input-container'>
            <input type="email"
              value={this.state.email}
              readOnly
              className='signup-form-input'
              id='signup-form-input-email'
            />
            <button type='button'
              className='edit-email-button'
              onClick={this.handleClick}
            >
              <i className="fas fa-pencil-alt"></i>
            </button>
          </div>
          <div className='signup-name-container'>
            <div className='signup-form-input-fname'>
              <input type="text"
                value={this.state.first_name}
                onChange={this.update('first_name')}
                className={`signup-form-input ${activeClassf}`}
                pattern='[A-Za-z]{2,20}'
                title='Enter 2 or more letters'
                onInvalid={this.setErrorMessage('First Name')}
                onInput={this.resetErrorMessage}
                required
              />
              <label htmlFor="signup-form-input">First Name</label>
            </div>
            <div className='signup-form-input-lname'>
              <input type="text"
                value={this.state.last_name}
                onChange={this.update('last_name')}
                className={`signup-form-input ${activeClassl}`}
                pattern='[A-Za-z]{2,20}'
                title='Enter 2 or more letters'
                onInvalid={this.setErrorMessage('Last Name')}
                onInput={this.resetErrorMessage}
                required
              />
              <label htmlFor="signup-form-input">Last Name</label>
            </div>
          </div>
          <div className='signup-form-input-password'>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className={`signup-form-input ${activeClassp}`}
            required 
            minLength='6'
          />
            <label htmlFor="signup-form-input">Password</label>
            {/* {this.renderErrors()} */}
          </div>
          <input type="submit" className='signup-form-submit' value={this.props.formType} />
        </form>
      </div>

    )
  }
}

export default SignupForm;