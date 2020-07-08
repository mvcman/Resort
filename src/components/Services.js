import React, { Component } from 'react';
import Title from './Title.js';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Services extends Component{
  state={
    services: [
      {
        icon: <FaCocktail/>,
        title:"Free Cocktails",
        info: "At a minimum, most inclusive resorts include lodging, unlimited food, drink, sports activities, and entertainment for the fixed price. ... An all-inclusive resort includes three meals daily, soft drinks, most alcoholic drinks, gratuities, and usually other services in the price."
      },
      {
        icon: <FaHiking/>,
        title:"Endless Hiking",
        info: "At a minimum, most inclusive resorts include lodging, unlimited food, drink, sports activities, and entertainment for the fixed price. ... An all-inclusive resort includes three meals daily, soft drinks, most alcoholic drinks, gratuities, and usually other services in the price."
      },
      {
        icon: <FaShuttleVan/>,
        title:"Free ShuttleVan",
        info: "At a minimum, most inclusive resorts include lodging, unlimited food, drink, sports activities, and entertainment for the fixed price. ... An all-inclusive resort includes three meals daily, soft drinks, most alcoholic drinks, gratuities, and usually other services in the price."
      },
      {
        icon: <FaBeer/>,
        title:"Strongest Beer",
        info: "At a minimum, most inclusive resorts include lodging, unlimited food, drink, sports activities, and entertainment for the fixed price. ... An all-inclusive resort includes three meals daily, soft drinks, most alcoholic drinks, gratuities, and usually other services in the price."
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
