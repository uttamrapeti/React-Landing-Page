import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


const HomeSlider = () => {
  return (
    <div className='slider'>
      <div className='sliders'>
        <Carousel>
          <Carousel.Item>
            <img src='/images/hero-banner-web-1.jpg' className='sliderI'></img>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/images/hero-banner-web-2.png'></img>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/images/hero-banner-web-3.png'></img>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

    </div>

  )
}

export default HomeSlider