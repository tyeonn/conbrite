import React from "react";
import EventIndexItem from "../event/event_index_item";

class Browse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVal: this.props.match.params.search,
      loaded: false
    };
    this.compareDate = this.compareDate.bind(this);
    this.sortByDate = this.sortByDate.bind(this);
  }

  componentDidMount() {
    if (this.props.match.params.search) {
      this.props.searchEvents(this.props.match.params.search).then(() => {
        return this.setState({ loaded: true });
      });
    } else {
      this.props.retrieveEvents().then(() => {
        return this.setState({ loaded: true });
      });
    }
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps);
    if (prevProps.match.params.search != this.props.match.params.search) {
      this.props.searchEvents(this.props.match.params.search);
      this.setState({ searchVal: this.props.match.params.search });
    }
  }

  compareDate(a, b) {
    a = new Date(a.start_date);
    b = new Date(b.start_date);
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  }

  sortByDate(events) {
    return events.sort(this.compareDate);
  }

  render() {
    let categories = {};
    let categoriesIndex = [];
    let header;
  
    if (this.state.loaded) {
      Object.values(this.props.events).forEach(event => {
        if (categories[event.category]) {
          categories[event.category].push(event);
        } else {
          categories[event.category] = [event];
        }
      });
      if (Object.keys(categories).length == 0) {
        categoriesIndex = (
          <div className='no-results'>
            {/* <i className="fas fa-search" /> */}
            <svg id='search-img' xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 66 66"><g fill="none" fillRule="evenodd" transform="translate(1)"><circle cx="35.5" cy="29.5" r="29.5" fill="#EFF2F5"></circle><g transform="translate(0 14)"><path stroke="#363A43" strokeLinejoin="round" strokeWidth="2" d="M30.9998,19.9883 L20.9998,29.9883"></path><polygon fill="#F6682F" points="0 48.988 0 46.988 19 27.988 23 31.988 4 50.988 2 50.988"></polygon><polygon stroke="#363A43" strokeLinejoin="round" strokeWidth="2" points="0 48.988 0 46.988 19 27.988 23 31.988 4 50.988 2 50.988"></polygon><path fill="#FFF" d="M50.2498,14.9883 C50.2498,23.0653 43.7018,29.6133 35.6248,29.6133 C27.5478,29.6133 20.9998,23.0653 20.9998,14.9883 C20.9998,6.9113 27.5478,0.3633 35.6248,0.3633 C43.7018,0.3633 50.2498,6.9113 50.2498,14.9883"></path><path stroke="#363A43" strokeWidth="2" d="M50.2498,14.9883 C50.2498,23.0653 43.7018,29.6133 35.6248,29.6133 C27.5478,29.6133 20.9998,23.0653 20.9998,14.9883 C20.9998,6.9113 27.5478,0.3633 35.6248,0.3633 C43.7018,0.3633 50.2498,6.9113 50.2498,14.9883 Z"></path><path stroke="#363A43" strokeLinecap="round" strokeWidth="1.59" d="M34.7884,5.8252 C30.2794,5.8252 26.6244,9.4802 26.6244,13.9882"></path></g></g></svg>
            <h2>No Results Found</h2>
          </div>
        );
      } else {
        Object.keys(categories).forEach(category => {
          let sortedEvents = this.sortByDate(categories[category]);
          let events = sortedEvents.map(event => (
            <EventIndexItem event={event} key={event.id} />
          ));

          categoriesIndex.push(
            <div className="browse-index" key={category}>
              <h2>{category}</h2>
              <div className="event-index-events-grid">{events}</div>
            </div>
          );
        });
      }
    } else {
      categoriesIndex = <></>;
    }
    if (this.props.match.params.search) {
      header = (
        <header>
          <h2>
            Browsing for <span>{this.state.searchVal}</span>
          </h2>
        </header>
      );
    } else {
      header = <></>;
    }

    return (
      <div className="browse-container">
        {header}
        {categoriesIndex}
      </div>
    );
  }
}

export default Browse;
