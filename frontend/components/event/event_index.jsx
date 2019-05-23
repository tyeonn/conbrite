import React from "react";
import IndexSlider from "./index_slideshow";
import EventIndexItem from "./event_index_item";

class EventIndex extends React.Component {
  constructor(props) {
    super(props);
    this.compareDate = this.compareDate.bind(this);
    this.sortByDate = this.sortByDate.bind(this);
  }

  componentDidMount() {
    this.props.retrieveEvents();
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
    let sortedEvents = this.sortByDate(this.props.events);
    const events = sortedEvents.map(event => (
      <EventIndexItem event={event} key={event.id} />
    ));
    return (
      <div className="event-index-container">
        <IndexSlider />
        <div className="event-index-live-life">
          <h1>Live Your Best Life</h1>
        </div>
        <div className="event-index-events-grid">{events}</div>
      </div>
    );
  }
}

export default EventIndex;
