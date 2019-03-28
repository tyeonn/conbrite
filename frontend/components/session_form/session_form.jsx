import React from 'react';
import { withRouter } from 'react-router-dom'
class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '', 
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.saveTempEmail(this.state.email);
    this.props.checkEmailExists(this.state.email).then(
      this.props.history.push('/signin/login'),
      this.props.history.push('/signin/signup/')
    );
  }

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render(){
    return (
      <div className='session-form-container'>
        <form onSubmit={this.handleSubmit}>
          <h2>Let's get started</h2>
          <p>Enter your email address below</p>
          <input type="text" 
            placeholder='Email Address'
            value={this.state.email}
            onChange={this.update('email')} 
            className='session-form-input'
          />
          <input type="submit" className='session-form-submit' value='Get Started'/>
        </form>
      </div>

    )

  }
}

export default withRouter(SessionForm);