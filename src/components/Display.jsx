// file where I put the image carousel for the company activities.
// Carousel is made with react bootstrap

import dog from "../assets/carousel/dog.jpg"
import garden from "../assets/carousel/garden.jpg"
// import hammer from "../assets/carousel/hammer.jpg"
import plumber from "../assets/carousel/plumber.jpg"


import Carousel from 'react-bootstrap/Carousel';

export default function Display() {
  return (
    <Carousel className='md:w-[70%] h-auto w-full object-cover justify-center flex m-auto'>
      <Carousel.Item>
        <img
          className="d-block w-100 h-auto"
          src={dog}
          alt="First slide"
        />
        <Carousel.Caption>
          <p>Soin et promenade d'animaux de compagnie</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={garden}
          alt="Second slide"
        />

        <Carousel.Caption>
          <p>Petits travaux de jardinage</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={plumber}
          alt="Third slide"
        />

        <Carousel.Caption>
          <p>Petits travaux de bricolage</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
