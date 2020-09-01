import React , { Component } from 'react';
import { Carousel ,  } from 'react-bootstrap';
import '../App.css';
import WOW from 'wowjs';



class slider extends React.Component {
  componentDidMount(){
    new WOW.WOW().init();
  }
  render(){
    return(
      <Carousel className="carosel" controls={true}  indicators={false} nextIcon={<img src={require('../img/next.png')}/>}
      prevIcon={<img src={require('../img/back.png')}/>}>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={require('../img/leather2.jpg')}
    alt="First slide"
  />
  <Carousel.Caption className="carosel-caption">
    <p className="text-white">Top Leather For you</p>
    <p className="text-white">With best quality</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={require('../img/show14.jpg')}
    alt="Third slide"
  />

<Carousel.Caption className="carosel-caption">
    <p>Top Leather For you</p>
    <p>With best quality</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={require('../img/tshirt55.jpg')}
    alt="Third slide"
  />

<Carousel.Caption className="carosel-caption">
    <p>Top Leather For you</p>
    <p>With best cost</p>
  </Carousel.Caption>
</Carousel.Item>
</Carousel>
  )
  }
    

}
    


export default slider;