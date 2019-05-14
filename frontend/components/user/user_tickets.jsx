import React from 'react';

class UserTickets extends React.Component {
  constructor(props) {
    super(props); 
    this.displayTicket = this.displayTicket.bind(this);

  }

  displayTicket(ticket, i) {
    debugger
    let event = ticket.event;
    let sDateArray, sDayOfWeek, sYear, sDay, sMonth, sTime;
    let eDateArray, eDayOfWeek, eYear, eDay, eMonth, eTime;
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
    return(
      <div key={i} className='user-tickets-info'>
        <div className='user-tickets-info-date'>
          {sMonth} {sDay}
        </div>
        <div>
          <img src={event.image_url} className='event-show-header-img'/>
        </div>
        <div>
          <div className='event-show-header-info-title'>
            {event.title}
          </div>
          <div>
            <p>{ticket.name}</p>
            <p>{ticket.price}</p>
            <p>{ticket.ticket_type}</p>
            <button>
              Refund
            </button>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.props.retrieveUser(this.props.user.id);
  }

  render() {
    let { user, tickets } = this.props;
    let ticketIndex = [];
    if(tickets) {
      for(let i = 0; i < tickets.length; i++){
        ticketIndex.push(this.displayTicket(tickets[i], i));
      }

    }
    
    debugger

    return user && tickets ? (
      <div className='user-tickets-container'>
        <header className='user-tickets-header'>
          <div className='user-tickets-header-profile-pic'><i className="far fa-user"></i></div>
          <div className='user-tickets-header-info'>
            <h2>{user.first_name} {user.last_name}</h2>
            <p>{tickets.length} tickets</p>

          </div>
        </header>
        <div className='user-tickets-index'>
          <h2>Tickets</h2>
          {ticketIndex}
        </div>
      </div>
    ) : (
      <></>
    )
  }
}

export default UserTickets;