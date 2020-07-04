import React, { Component } from 'react';
import { RoomContext } from './context.js';
import Title from './Title';
import Room from './Room';

class FeatureRooms extends Component {
  static contextType = RoomContext;
render(){
  const { featuredRooms } = this.context;
  console.log("Featured rooms", featuredRooms);

  return(
    <section className="featured-rooms">
    <Title title="featured rooms" />
    {
        featuredRooms.map(myroom => 
            <Room room={myroom} />
        )
    }
    </section>
  );
}
}
FeatureRooms.contextType = RoomContext;
export default FeatureRooms;
