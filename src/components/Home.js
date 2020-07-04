import React from 'react';
import Hero from './Hero.js';
import Banner from './Banner.js';
import { Link } from 'react-router-dom';
import Services from './Services.js';
import FeatureRooms from './FeatureRooms';

export default function Home(){
  return(
    <>
      <Hero>
        <Banner title="Luxurios Rooms" subtitle="deluxe rooms available starting at $299">
          <Link to="rooms"><button type="button" className="btn-primary">Show Rooms</button></Link>
        </Banner>
      </Hero>
      <Services />
      <FeatureRooms />
    </>
  );
}
// export default Home;
