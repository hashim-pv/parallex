import React from 'react'
import Slider from 'react-slick';
import './index.css'
import a2 from './image/c1.jpg'
import "slick-carousel/slick/slick.css";         // Import slick styles
import "slick-carousel/slick/slick-theme.css";   // Import slick theme styles
import slide1 from './image/sliderc1.jpg'
import slide2 from './image/sliderc2.webp'
import slide3 from './image/sliderc3.jpg'





const Imgsl = () => {
    const settings = {
        // Enable dots navigation
infinite: true,       // Infinite looping
speed: 500,           // Transition speed
slidesToShow: 1,      // Number of slides to show
slidesToScroll: 1,    // Number of slides to scroll at a time
autoplay: true,       // Autoplay slider
autoplaySpeed: 2000 // Autoplay speed in ms
};


  return (
    <div className="slider-container  ">
          <Slider  {...settings}>
            <div className='p6'>
              <img  src={slide1} alt="Slide 1" />
            </div>
            <div className='p6'>
              <img  src={slide2} alt="Slide 2" />
            </div>
            <div className='p6'>
              <img  src={slide3} alt="Slide 3" />
            </div>
           
          </Slider>
        </div>

  )
}

export default Imgsl