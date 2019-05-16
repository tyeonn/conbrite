import React from 'react';
import {Link} from 'react-router-dom';

class UserTickets extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      tickets: this.props.tickets
    };
    this.displayTicket = this.displayTicket.bind(this);
    this.sortByDate = this.sortByDate.bind(this);
    this.compareDate = this.compareDate.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.refundTicket = this.refundTicket.bind(this);
  }

  handleClick(id){
    return e => {
      e.preventDefault();
      this.props.history.push(`/event/${id}`);

    };
  }
  
  refundTicket(ticket) {

    return e => {
      e.preventDefault();
      let tick = ticket;
      tick.quantity = 1;
      this.props.refundTicket(tick);
      this.setState({
        tickets: this.props.tickets,
      });

    };
  }

  displayTicket(ticket, i) {
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
      <div key={i} className='user-tickets-info-container'>
        <div className='user-tickets-info-date'>
          <p>{sMonth}</p>
          <p>{sDay}</p> 
        </div>
        <div className='user-tickets-info-img'>
          <img src={event.image_url} onClick={this.handleClick(event.id)}/>
        </div>
        <div className='user-tickets-info'>
          <div className='user-tickets-info-title'>
          <Link to={`/event/${event.id}`}> {event.title} </Link>
          </div>
          <div className='user-tickets-info-ticket'>
            <p>{event.address}</p>
            <span>
              <p>{ticket.name} Ticket</p>
              {/* <p>{ticket.price}</p> */}
              {/* <p>{ticket.ticket_type}</p> */}
              <button onClick={this.refundTicket(ticket)}>
                Refund
              </button>

            </span>
          </div>
        </div>
      </div>
    )
  }

  compareDate(a, b) {
    a = new Date(a.event.start_date);
    b = new Date(b.event.start_date);
    if(a < b) {
      return -1;
    }else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  }

  sortByDate(tickets) {
    return tickets.sort( this.compareDate );
  }

  componentDidMount() {
    this.props.retrieveUser(this.props.user.id);
  }

  render() {
    let { user, tickets } = this.props;
    let ticketIndex = [];
    if(tickets) {
      tickets = this.sortByDate(tickets);
      for(let i = 0; i < tickets.length; i++){
        ticketIndex.push(this.displayTicket(tickets[i], i));
      }

    }
    

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