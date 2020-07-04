import React, { Component} from 'react';
import items from '../data.js';
const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true
  };
  componentDidMount(){
    let rooms = this.formatData(items);
    console.log(rooms);
    let featuredRooms = rooms.filter(room => {
    if(room.featured === true)
    {
        return room
    }});
    this.setState({
        rooms: rooms,
        sortedRooms: rooms,
        featuredRooms: featuredRooms,
        loading: false
    });
    console.log(rooms);
    console.log(featuredRooms);
  }
  formatData(items){
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let room = {...item.fields, images, id};
      console.log(room);
      return room;
    });
   return tempItems;
  }
  render(){
    return(
    <RoomContext.Provider value={{...this.state}}>
        {this.props.children}
    </RoomContext.Provider>
  );
  }
}
const RoomConsumer = RoomContext.Consumer;
export { RoomContext, RoomConsumer, RoomProvider };
