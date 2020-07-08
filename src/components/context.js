import React, { Component} from 'react';
import items from '../data.js';

const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };

  componentDidMount(){
    let rooms = this.formatData(items);
    console.log(rooms);
    let featuredRooms = rooms.filter(room => {
    if(room.featured === true)
    {
        return room
    }});

    let maxPrice = Math.max(...rooms.map(item => item.price));
    let maxSize = Math.max(...rooms.map(item => item.size));
    
    this.setState({
        rooms: rooms,
        sortedRooms: rooms,
        featuredRooms: featuredRooms,
        loading: false,
        price: maxPrice,
        maxPrice,
        maxSize
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

  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  }

  handleChange = (event) => {
      const target = event.target;
      const value = event.type === 'checkbox' ? target.checked : target.value;
      const name = event.target.name;
      console.log(name, value);
      this.setState({
        [name]: value,
      }, this.filterRooms);
  }

  filterRooms = () => {
    console.log('Filter rooms');
    let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } = this.state;
    let tempRooms = [...rooms];
    if (type !== 'all'){
        tempRooms = tempRooms.filter(item => item.type === type);
    }
    this.setState({
        sortedRooms: tempRooms
    });
  }

  render(){
    return(
    <RoomContext.Provider 
    value={{
        ...this.state,
         getRoom: this.getRoom,
         handleChange: this.handleChange,
         filterRooms: this.filterRooms
    }}>
        {this.props.children}
    </RoomContext.Provider>
  );
  }
}

const RoomConsumer = RoomContext.Consumer;
export { RoomContext, RoomConsumer, RoomProvider };
