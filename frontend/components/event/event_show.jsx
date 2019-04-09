import React from 'react';
import { Link } from 'react-router-dom';

class EventShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hidden: true,
    };
    // if (this.props.match.params.eventId === current_user.id)
  }

  componentDidMount(){
    this.props.retrieveEvent(this.props.match.params.eventId).then( props =>{
      this.props.retrieveUser(props.event.organizer_id);
    });
    
    

    window.scrollTo(0, 0);
    
  }
  componentDidUpdate(){
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
    const hidden = (this.props.event && this.props.event.organizer_id === this.props.currentUser.id);
    const activeClass = hidden ? '' : 'hidden';
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
                <i className="far fa-heart"></i>

            </div>
            <button className='event-show-ticket-button'> Register</button>
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
                  <p>{sDayOfWeek}, {sMonth} {sDay}, {sYear}, {sTime} -</p>
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
                <p>Tags</p> 
              </div>
              <div>
                <Link to=''>Things to do in the area</Link>
                <Link to=''>Convention</Link>
                <Link to=''>Entertainment</Link>
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
              <p>Organizer information goes here</p>
              <div>
                <button className='organizer-follow-button'> Follow </button>
                <button className='organizer-contact-button'> Contact </button>

              </div>
            </div>
            {/* <div> MAP GOES HERE </div> */}
          </div>
        </div>
      </div>

    ) : (
      <> </>
    )
  }
}

export default EventShow;