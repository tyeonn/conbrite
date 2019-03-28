import React from 'react';
import { withRouter } from 'react-router-dom'
class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: this.props.email || this.props.temp || '', 
      // flushed: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.receiveTempEmail(this.state.email);
    this.props.checkEmailExists(this.state.email).then(
      () => this.props.history.push('/signin/login'),
      () => this.props.history.push('/signin/signup/')
    );
  }

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // componentWillReceiveProps(nextProps){
  //   if(!this.state.flushed && nextProps.location.state === 'flush'){
  //     this.setState({flushed: true});
  //   }
  // }
  // componentDidUpdate(){
  //   this.setState({flushed: false});
  // }

  render(){
    return (
      <div className='session-form-container'>
        <form onSubmit={this.handleSubmit}>
          <h2>Let's get started</h2>
          <p>Enter your email address below</p>
          <input type="email"
            placeholder='Email Address'
            value={this.state.email}
            onChange={this.update('email')} 
            className='session-form-input'
            required
            autoFocus
            
          />
          <input type="submit" className='session-form-submit' value='Get Started'/>
        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm);