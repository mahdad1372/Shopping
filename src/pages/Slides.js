import React, { Component } from "react";
import Slider from "react-slick";

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (
      <div>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          <div>
          <div className="d-flex justify-content-center">
                   <div className="container5">
                   <img src={require('../img/shoe3.jpg')} className="img-size6"/>
                   </div>
                       
                       </div>
          </div>
          <div>
          <div className="d-flex justify-content-center">
                   
          <div className="container5">
                   <img src={require('../img/shoe4.jpg')} className="img-size6"/>
                   </div>
                  </div>
          </div>
          <div>
          <div className="d-flex justify-content-center">
                   
          <div className="container5">
                   <img src={require('../img/shoe5.jpg')} className="img-size6"/>
                   </div>
                       </div>
          </div>
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={false}
          focusOnSelect={true}
        >
          <div>
          <div className="d-flex justify-content-center">
          <div className="container8">
                   <img src={require('../img/shoe3.jpg')} className="img-size7"/>
                   </div>
                       </div>
          </div>
          <div>
          <div className="d-flex justify-content-center">
                   
          <div className="container8">
                   <img src={require('../img/shoe4.jpg')} className="img-size7"/>
                   </div>
                       </div>
          </div>
          <div>
          <div className="d-flex justify-content-center">
                   
          <div className="container8">
                   <img src={require('../img/shoe5.jpg')} className="img-size7"/>
                   </div>
                       </div>
          </div>
        </Slider>
      </div>
    );
  }
}