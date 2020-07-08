import React, { Component } from 'react';
import { RoomContext } from './context.js';
import Title from './Title';
import Room from './Room';
import Loading from './Loading';

class FeatureRooms extends Component {
  static contextType = RoomContext;
render(){
  const { featuredRooms, loading } = this.context;
  console.log("Featured rooms", featuredRooms);

  const rooms = featuredRooms.map(room => {
    return <Room key={room.id} room={room} />
  });

  return(
    <section className="featured-rooms">
    <Title title="featured rooms" />
    <div className="featured-rooms-center">
        {
            loading ? <Loading /> : rooms
        }
    </div>
    </section>
  );
}
}
FeatureRooms.contextType = RoomContext;
export default FeatureRooms;
