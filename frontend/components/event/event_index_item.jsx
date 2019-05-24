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

  render(){
    const { event } = this.props;
    let sDateArray, sDayOfWeek, sYear, sDay, sMonth, sTime;
    let eDateArray, eDayOfWeek, eYear, eDay, eMonth, eTime;

    if (event) {
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
    // const MONTH = ['', 'Jan','Feb','Mar','Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    // const DAY = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
    // let date = event.end_date.split('-');
    // let dayOfWeek = DAY[new Date(`${event.end_date} 00:00`).getDay()];
    // let [year, month, day] = date;
    // if(day < 10) day = day%10;
    // if(month < 10) month = month%10;
    // month = MONTH[month];
    return(
      <div 
        className='event-index-item-container'
      >
        <img src={event.image_url} onClick={this.handleClick}/>
        <div className='event-index-item-info'>
          <div className='event-index-item-info-left'>
            <div className='event-index-item-circledate'> {sMonth} {sDay} </div>
          </div>
          <div className='event-index-item-info-right'>
            <Link to={`/event/${event.id}`}> {event.title} </Link>
            <p> {sDayOfWeek}, {sMonth} {sDay} </p>
            <p> {event.address} </p>
          </div>
        </div>
      </div>
    )

  }
}

export default withRouter(EventIndexItem);