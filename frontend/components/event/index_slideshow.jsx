import React from "react";
import Typed from "typed.js";

class IndexSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // aws images later
      currentIndex: 0,
      translateVal: 0
    };
    this.images = [
      <img src={window.overwatch} />,
      <img src={window.theater} />,
      <img src={window.conference} />
    ];
    this.incrementIndex = this.incrementIndex.bind(this);
  }

  incrementIndex() {
    $(".slideshow-image").animate({ opacity: 0.1 }, 0);
    $(".slideshow-image").animate({ opacity: 1 }, 1500);

    this.setState(prevState => ({
      currentIndex: (prevState.currentIndex + 1) % 3
    }));
  }

  componentDidMount() {
    this.index = setInterval(this.incrementIndex, 7000);

    this.typed = new Typed(".event-index-image-text", {
      strings: ["Conventions", "Concerts", "Conferences"],
      typeSpeed: 100,
      smartBackspace: true,
      backSpeed: 80,
      backDelay: 5100,
      fadeOut: true,
      loop: true
    });
  }

  componentWillUnmount() {
    clearInterval(this.index);
    this.typed.destroy();
  }

  render() {
    return (
      <div className="slideshow-container">
        <div className="slideshow-image">
          {this.images[this.state.currentIndex]}
        </div>
        <div className="event-index-image-text-container">
          <span className="event-index-image-text" />
        </div>
      </div>
    );
  }
}

export default IndexSlider;
