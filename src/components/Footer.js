import React, { Component } from 'react';
import Title from './Title.js';
export default class Footer extends Component{
  state={
    footer_list: [
      {
        title:"Contact Us"
      },
      {
        title:"Future deals"
      },
      {
        title:"Free Serivces"
      },
      {
        title:"More"
      }
    ]
  }
  render(){
    return (
      <section className="features">
        <Title title="Our Features"/>
          <div className="our-features">
            {this.state.footer_list.map((item, index) => {
              return <article key={index} className="service">
                <h6>{item.title}</h6>
              </article>
            })}
          </div>
      </section>
    );
  }
  }
