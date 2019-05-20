import React from 'react';

class UserBookmarks extends React.Component {
  constructor(props) {
    super(props);
    this.sortByDate = this.sortByDate.bind(this);
    this.compareDate = this.compareDate.bind(this);
  }

  componentDidMount() {
    this.props.retrieveUser(this.props.user.id);
  }

  compareDate(a, b) {
    debugger
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

  sortByDate(bookmarks) {
    return bookmarks.sort( this.compareDate );
  }

  render() {
    let { user, bookmarks } = this.props;
    let bookmarkIndex = [];
    debugger
    if(bookmarks) {
      bookmarks = this.sortByDate(bookmarks);
      debugger
      // for(let i = 0; i < bookmarks.length; i++){
      //   ticketIndex.push(this.displayTicket(bookmarks[i], i));
      // }

    }
    return (
      <div>hi</div>
    )
  }
}

export default UserBookmarks;