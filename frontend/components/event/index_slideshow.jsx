import React from 'react';
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
    this.index = setInterval( this.incrementIndex ,5000);
  }

  componentWillUnmount(){
    clearInterval(this.index);
  }

  render(){
    return(
      <div className='slideshow-container'>
        { this.images[this.state.currentIndex] } 
      </div>

    )
  }

}

export default IndexSlider;