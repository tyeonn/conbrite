import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class EventIndexItem extends React.Component{
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    const eventId = this.props.event.id;
    this.props.history.push(`/event/${eventId}`);
  }

  componentDidMount(){
    
  }

  render(){
    const MONTH = ['', 'Jan','Feb','Mar','Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const DAY = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
    const { event } = this.props;
    let date = event.end_date.split('-');
    let dayOfWeek = DAY[new Date(`${event.end_date} 00:00`).getDay()];
    let [year, month, day] = date;
    if(day < 10) day = day%10;
    if(month < 10) month = month%10;
    month = MONTH[month];
    return(
      <div 
        className='event-index-item-container'
      >
      {/* Change cursor for img link */}
        <img src={window.overwatch} onClick={this.handleClick}/>
        <div className='event-index-item-info'>
          <div className='event-index-item-circledate'> {month} {day} </div>
          <Link to={`/event/${event.id}`}> {event.title} </Link>
          <p> {dayOfWeek}, {month} {day} </p>
          <p> {event.address} </p>
        </div>
      </div>
    )

  }
}

export default withRouter(EventIndexItem);