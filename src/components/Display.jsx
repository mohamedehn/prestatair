// file where I put the image carousel for the company activities.
// Carousel is made with react bootstrap

import Carousel from 'react-bootstrap/Carousel';

export default function Display() {
  return (
    <Carousel className='w-75 h-2/4 object-cover justify-center flex m-auto'>
      <Carousel.Item>
        <img
          className="d-block w-100 h-auto"
          src="https://www.silveralliance.com/wp-content/uploads/2020/09/Laide-a-domicile-pour-les-personnes-agees.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <p>Préparation de repas à domicile.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          alt="Second slide"
        />

        <Carousel.Caption>
          <p>Assistance informatique à domicile.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://senior-compagnie.fr/wp-content/uploads/2021/03/FD23731-scaled-1.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <p>Assistance administrative à domicile.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
