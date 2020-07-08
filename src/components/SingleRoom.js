import React from 'react';
import defaultBcg from '../images/room-1.jpeg';
//import Hero from './Hero';
import Banner from './Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from './context';
import styled from 'styled-components';

export default class SingleRoom extends React.Component{
  constructor(props){
    super(props);
    //console.log(this.props);
    this.state = {
        slug: this.props.match.params.slug,
        defaultBcg,
    }
  }

  static contextType = RoomContext;
//  componentDidMount() {

//  }
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    console.log(room);
    if (!room) {
        return (
            <div className="error">
                <h3>No such room could be found...</h3>
                <Link to="/rooms" className="btn-primary">Back to rooms</Link>
            </div>
        );
    }
    const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;
    const [mainImg, ...defaultImg] = images;
    return (
        <>
        <Hero image={mainImg || this.state.defaultBcg }>
            <Banner title={`${name} room`}>
                <Link to="/rooms" className="btn-primary">Back to rooms</Link>
            </Banner>
        </Hero>
        <section className="single-room">
            <div className="single-room-images">
            {
                defaultImg.map((image, index) => <img src={image} key={index} alt={name} />)
            }
            </div>
            <div className="single-room-info">
                <article className="desc">
                    <h3>Details: </h3>
                    <p>{description}</p>
                </article>
                <article className="info">
                    <h3>Info</h3>
                    <h6>Price: $ {price}</h6>
                    <h6>Size: {size} SQFT</h6>
                    <h6>
                        Max Capacity: {
                            capacity > 1 ? `${capacity} people`: `${capacity} person`
                        }
                    </h6>
                    <h6>
                        {pets ? "Pets are allowed" : "No pets allowed"}
                    </h6>
                    <h6>
                        {breakfast && "Free Breakfast included"}
                    </h6>
                </article>
            </div>
        </section>
        <section className="room-extras">
            <h6>Extras</h6>
            {
                extras.map((item, index) => {
                    return <li key={index}>- {item}</li>
                })
            }
        </section>
        </>
    );
  }
}

const Hero = styled.div`
    min-height: calc(100vh - 66px);
    background: url(${props => props.image}) center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`;
//export default function SingleRoom(props) {
//    console.log(props);
//    return (
//        <div>
//            <h1>Welcome to single room</h1>
//        </div>
//    );
//}