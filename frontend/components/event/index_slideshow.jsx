import React from 'react';
import Typed from 'typed.js';
// import Slider from 'react-slick';

// const IndexSlider = () => {
//   const sliderSettings = {
//     autoplay: true,
//     autoplaySpeed: 5000,
//     fade: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     infinite: true,

//   };
//   return(
//     <div className='slideshow-container'>
//       <Slider {...sliderSettings}>
//         <div>
//           <img src={window.overwatch} className='slideshow-img' />
//         </div>
//         <div>
//           <img src={window.theater} className='slideshow-img' />
//         </div>
//         <div>
//           <img src={window.conference} className='slideshow-img' />
//         </div>
//       </Slider>
//       <div className='event-index-image-text-container'>
//         <span className="event-index-image-text"></span>

//       </div>
//     </div>
//   )
// };

// export default IndexSlider;

class IndexSlider extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      // aws images later
      currentIndex: 0,
      translateVal: 0,
    };
    this.images = [
      <img src={window.overwatch}/>, 
      <img src={window.theater}/>, 
      <img src={window.conference}/>, 
    ];
    this.incrementIndex = this.incrementIndex.bind(this);
  }

  incrementIndex(){

    this.setState(prevState =>({
      currentIndex: (prevState.currentIndex + 1) % 3,
    }));
  }

  componentDidMount(){
    this.index = setInterval( this.incrementIndex ,7000);

    
    this.typed = new Typed(".event-index-image-text", {
      strings: [ 'Conventions', 'Concerts', 'Conferences' ],
      typeSpeed: 100,
      smartBackspace: true,
      backSpeed: 80,
      backDelay: 5100,
      fadeOut: true,
      loop: true,
    });
  }

  componentWillUnmount(){
    clearInterval(this.index);
    this.typed.destroy();
  }

  render(){
    return(
      <div className='slideshow-container'>
        { this.images[this.state.currentIndex] } 
        <div className='event-index-image-text-container'>
          <span className="event-index-image-text"></span>
        </div>
      </div>

    )
  }

}

export default IndexSlider;