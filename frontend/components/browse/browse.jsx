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
          <div>
            <i className="fas fa-search" />
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
