import React from 'react';
import Hero from './Hero.js';
import Banner from './Banner.js';
import { Link } from 'react-router-dom';
export default function ErrorPage(){
return(
  <Hero>
    <Banner title="Error 404!" subtitle="Page not found!">
      <Link to="/"><button type="button" className="btn-primary">Home Page</button></Link>
    </Banner>
  </Hero>
);
}
Hero.defaultProps = {
  hero: "defaultHero"
}
