import React from "react";
import IndexSlider from "./index_slideshow";
import EventIndexItem from "./event_index_item";

class EventIndex extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {}

  componentDidMount() {
    this.props.retrieveEvents();
  }

  render() {
    const events = this.props.events.map(event => (
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
