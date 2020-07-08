import React from 'react';
import Hero from './Hero.js';
import Banner from './Banner.js';
import { Link } from 'react-router-dom';
import RoomsContainer from './RoomsContainer';

const Rooms = () => {
  return(
      <>
        <Hero hero="roomsHero">
            <Banner title="Our Rooms" subtitle="Rooms are clean and affordable">
            <Link to="/"><button type="button" className="btn-primary">Back to Home</button></Link>
            </Banner>
        </Hero>
        <RoomsContainer />
      </>
  );
}
export default Rooms;
