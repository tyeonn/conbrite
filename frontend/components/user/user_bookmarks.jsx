import React from 'react';
import {Link} from 'react-router-dom';

class UserBookmarks extends React.Component {
  constructor(props) {
    super(props);
    this.sortByDate = this.sortByDate.bind(this);
    this.compareDate = this.compareDate.bind(this);
    this.displayEvent = this.displayEvent.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.heartClick = this.heartClick.bind(this);

  }

  componentDidMount() {
    this.props.retrieveUser(this.props.user.id);
  }

  compareDate(a, b) {
    debugger
    a = new Date(a.start_date);
    b = new Date(b.start_date);
    if(a < b) {
      return -1;
    }else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  }

  sortByDate(bookmarks) {
    return bookmarks.sort( this.compareDate );
  }

  handleClick(id){
    return e => {
      e.preventDefault();
      this.props.history.push(`/event/${id}`);

    };
  }

  heartClick(event) {
    return e => {
      e.preventDefault();
      console.log(this.props.user);
      debugger
      this.props.removeBookmark(event, this.props.user.id);

    };
  }

  displayEvent(event, i) {
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
      <div key={i} className='user-bookmarks-info-container'>
        <div className='user-bookmarks-info-date'>
          <div>
            <p>{sMonth}</p>
            <p>{sDay}</p> 
          </div>
          <div className='user-bookmarks-info-like-btn'>
            <i className={`far fa-heart red`} onClick={this.heartClick(event)}></i>
          </div>
        </div>
        <div className='user-bookmarks-info-img'>
          <img src={event.image_url} onClick={this.handleClick(event.id)}/>
        </div>
        <div className='user-bookmarks-info'>
          <div className='user-bookmarks-info-title'>
          <Link to={`/event/${event.id}`}> {event.title} </Link>
          </div>
          <div className='user-bookmarks-info-ticket'>
            <p>{sDayOfWeek}, {sMonth} {sDay}, {sTime}</p>
            <p>{event.address}</p>
            <span>
              
            </span>
          </div>
        </div>
      </div>
    )
  }

  render() {
    let { user, bookmarks, tickets } = this.props;
    let bookmarkIndex = [];
    debugger
    if(bookmarks) {
      bookmarks = this.sortByDate(bookmarks);
      debugger
      for(let i = 0; i < bookmarks.length; i++){
        bookmarkIndex.push(this.displayEvent(bookmarks[i], i));
      }

    }
    return user && bookmarks ? (
      <div className='user-bookmarks-container'>
        <header className='user-bookmarks-header'>
          <div className='user-bookmarks-header-profile-pic'><i className="far fa-user"></i></div>
          <div className='user-bookmarks-header-info'>
            <h2>{user.first_name} {user.last_name}</h2>
            <div className='user-bookmarks-header-links'>
              <Link to={`/${user.id}/tickets`}>Tickets ({tickets.length})</Link>
              <Link to={`/${user.id}/favorites`}>Likes ({bookmarks.length})</Link>
            </div>
            {/* <p>{tickets.length} tickets</p> */}

          </div>
        </header>
        <div className='user-bookmarks-index'>
          <h2>Events</h2>
          {bookmarkIndex}
        </div>
      </div>
    ) : (
      <></>
    )
  }
}

export default UserBookmarks;