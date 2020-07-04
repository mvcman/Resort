import React, { Component } from 'react';
import Title from './Title.js';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Services extends Component{
  state={
    services: [
      {
        icon: <FaCocktail/>,
        title:"Free Cocktails",
        info: "fas fasfklj f kjsjl jfkljk js a!"
      },
      {
        icon: <FaHiking/>,
        title:"Endless Hiking",
        info: "fas fasfklj f kjsjl jfkljk js a!"
      },
      {
        icon: <FaShuttleVan/>,
        title:"Free ShuttleVan",
        info: "fas fasfklj f kjsjl jfkljk js a!"
      },
      {
        icon: <FaBeer/>,
        title:"Strongest Beer",
        info: "fas fasfklj f kjsjl jfkljk js a!"
      }
    ]
  }
  render(){
    return (
      <section className="services">
        <Title title="Services"/>
          <div className="services-center">
            {this.state.services.map((item, index) => {
              return <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            })}
          </div>
      </section>
    );
  }
}
