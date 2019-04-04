import React from 'react';
import { withRouter } from 'react-router-dom';
import Typed from 'typed.js';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      //email is from login, temp is from signup
      email: this.props.email || this.props.temp || '', 
      // flushed: false
      active: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demologin = this.demologin.bind(this);
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
    
    return e => {
      if(e.currentTarget.value){
        this.setState({ active: true });
      }else{
        this.setState({ active: false });
      }
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  demologin(e){
    e.preventDefault();
    this.setState({active: true});
    new Typed( ".session-form-input", {
      strings: ['demo@demo.com'],
      typeSpeed: 70, 
    });
    setTimeout(() => {
      this.props.checkEmailExists('demo@demo.com').then(
        () => this.props.history.push('/signin/login')
      );
    }, 1200);
    
  }

  // componentWillReceiveProps(nextProps){
  //   if(!this.state.flushed && nextProps.location.state === 'flush'){
  //     this.setState({flushed: true});
  //   }
  // }
  componentDidMount(){
    if (this.state.email != '') {
      this.setState({ active: true });
    }  
  }

  render(){
    
    const activeClass = this.state.active ? 'active' : '';
    return (
      <div className='session-form-container'>
        <form onSubmit={this.handleSubmit} autoComplete='on'>
          <img src={window.c_logo} className='session-logo' />
          <h2>Let's get started</h2>
          <p>Enter your email address below</p>
          <div>
            <input type="email"
              value={this.state.email}
              onChange={this.update('email')} 
              className={`session-form-input ${activeClass}`}
              required
              
            />
            <label htmlFor="session-form-input">Email Address</label>
          </div>

          <input type="submit" className='session-form-submit' value='Get Started'/>
          <button className='demo-login-button' onClick={this.demologin}>
            Demo Login
          </button>
        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm);