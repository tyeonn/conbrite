import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import TicketForm from '../ticket/ticket_form_container';

class EventShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hidden: true,
      red: false,
      modalOpen: false,
    };
    this.heartClick = this.heartClick.bind(this);
    this.ticketModalClick = this.ticketModalClick.bind(this);
  }

  heartClick(e) {
      e.preventDefault();
      if(this.props.currentUser) {
        if(this.state.red) {
          this.props.removeBookmark(this.props.event, this.props.currentUser.id);
        } else {
          this.props.addBookmark(this.props.event, this.props.currentUser.id);
        }
        this.setState({red: !this.state.red});
      } else {
        this.props.history.push('/signin');
        window.location.reload();
      }
  }

  ticketModalClick(e) {
    if(this.props.currentUser) {
      this.setState({modalOpen: !this.state.modalOpen});
    } else {
      this.props.history.push('/signin');
      window.location.reload();
    }
  }

  componentDidMount(){
    this.props.retrieveEvent(this.props.match.params.eventId).then( props => {
      return this.props.retrieveUser(props.event.organizer_id);
    }).then( () => {
      return this.props.retrieveTickets(this.props.match.params.eventId);
    }).then( () => {
        let {event, users} = this.props;
        if(this.props.currentUser) {
          users[this.props.currentUser.id].bookmarks.forEach( bookmark => {
            if(bookmark.id === event.id) {
              return this.setState({red: true});
            }
          });
        }
    });
    window.scrollTo(0, 0);
    
  }

  render(){
    const { event } = this.props;
    let sDateArray, sDayOfWeek, sYear, sDay, sMonth, sTime;
    let eDateArray, eDayOfWeek, eYear, eDay, eMonth, eTime;
    // let first_name, last_name = '';
    let organizer = null;
    if (this.props.event && this.props.users[event.organizer_id] != null){
      organizer = this.props.users[event.organizer_id];

    }
    if(event){
      sDateArray = event.start_date.split(' ');
      eDateArray = event.end_date.split(' ');
      [sDayOfWeek, sYear, sMonth, sDay] = sDateArray;
      [eDayOfWeek, eYear, eMonth, eDay] = eDateArray;
      
      if (sDay < 10) sDay = sDay % 10;
      if (eDay < 10) eDay = eDay % 10;
      if (sMonth < 10) sMonth = sMonth % 10;
      if (eMonth < 10) eMonth = eMonth % 10;
      sTime = sDateArray[4];
      eTime = eDateArray[4];
    }
    
    const hidden = (this.props.event && this.props.currentUser && this.props.event.organizer_id === this.props.currentUser.id);
    const activeClass = hidden ? '' : 'hidden';
    // let heartShow = this.props.currentUser ? '' : 'hidden';
    let heartClass = this.state.red ? 'red' : '';
    return (event && organizer) ? (
      <div className='event-show-container'>
        <div className='event-show-background-image'>
            <img src={event.image_url}/>
        </div>
        <div className='event-show'>
          <div className='event-show-header'>
            <div className='event-show-header-left'>
              <img src={event.image_url} className='event-show-header-img'/>
            </div>
            <div className='event-show-header-right'>
              <div className='event-show-header-info'>
                <div className='event-show-header-info-date'>
                  {sMonth} {sDay}
                </div>
                <div className='event-show-header-info-title'>
                  {event.title}
                </div>
                <div className='event-show-header-info-organizer'>
                  
                  <p className='event-show-header-info-organizer-name'>
                    by {organizer.first_name} {organizer.last_name}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='event-show-ticket-bar'>
            {/* icons */}
            <div className ='event-show-ticket-bar-icons'>
              <div className={`event-show-ticket-bar-edit-icon ${activeClass}`}>
                <Link to={`/event/${event.id}/edit`}>
                  <i id={'show-edit'} className={`fas fa-pencil-alt `}></i> 
                </Link>
              </div>
                <i className={`far fa-heart ${heartClass}`} onClick={this.heartClick}></i>

            </div>
            <button className='event-show-ticket-button' onClick={this.ticketModalClick}>Register</button>
            <div className="ticket-modal-container">
              <Modal
                isOpen={this.state.modalOpen}
                onRequestClose={this.ticketModalClick}
                contentLabel="Ticket Modal"
                overlayClassName="ReactModal__Overlay"
                className="ReactModal__Content"
                // bodyOpenClassName="ReactModal__Body--open"
                shouldCloseOnOverlayClick={true}
                closeTimeoutMS={400}
                // style={Modal.defaultStyles}
              >
                <div className="ticket-modal-header">
                  <h2>Select Ticket</h2>
                  <button 
                    className="close-modal-btn"
                    onClick={this.ticketModalClick}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                <div className="ticket-modal-form-container">
                  <TicketForm modalClose={this.ticketModalClick}/>
                </div>
              </Modal>

            </div>
          </div>

          <div className='event-show-content'>
            <div className='event-show-content-main'>
              <div className='event-show-content-left'>
                <h3>Description</h3>
                <p>{event.description}</p>
              </div>
              <div className='event-show-content-right'>
                <div className='event-show-content-right-date'>
                  <h3>Date And Time</h3>
                  <p>{sDayOfWeek}, {sMonth} {sDay}, {sYear}, {sTime} </p>
                  <p>{eDayOfWeek}, {eMonth} {eDay}, {eYear}, {eTime}</p>
                </div>
                <div className='event-show-content-right-location'>
                  <h3>Location</h3>
                  <p>{event.address}</p>
                </div>
              </div>
            </div>
            <div className='event-show-content-links'>
              <div>
                <p>Category</p> 
              </div>
              <div>
                <Link to={`/browse/${event.category}`}>{event.category}</Link>
                {/* <Link to=''>Convention</Link>
                <Link to=''>Entertainment</Link> */}
              </div>
            </div>
            <div className='event-show-content-share-links'>
              <div>
                <p>Share With Friends</p>
              </div>
              <div>
                <Link to=''> <i className="fab fa-facebook-f"></i> </Link>
                <Link to=''> <i className="fab fa-facebook-messenger"></i> </Link>
                <Link to=''> <i className="fab fa-linkedin-in"></i> </Link>
                <Link to=''> <i className="fab fa-twitter"></i> </Link>
                <Link to=''> <i className="fas fa-envelope"></i> </Link>
              </div>
            </div>
            <div className='event-show-content-organizer-info'>
              <p>{organizer.first_name} {organizer.last_name}</p>
              <p>Organizer of {event.title}</p>
              <div>
                {/* <button className='organizer-follow-button'> Follow </button>
                <button className='organizer-contact-button'> Contact </button> */}

              </div>
            </div>
          </div>
        </div>
      </div>

    ) : (
      <> </>
    )
  }
}

export default EventShow;