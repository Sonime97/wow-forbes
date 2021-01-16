
 import React, {Component} from 'react';
import {Nav,Navbar} from 'react-bootstrap';
import Slider from 'react-slick'; 
 class SliderComponent2 extends Component{
   constructor(props) {
     super(props)
     this.state = {
       men: []
     }
   } 
   
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      sliderToShow: 1,
      slideToScroll: 1
    }
    return (
      <div>
       <Slider {...settings}>
       <div className="text-center">
          <p>WELCOME TO MY FORBES PROJECT</p>
        </div>
       <div className="text-center">
         CHECK THE PROFILE TAB TO SEE ALL INFO
       </div>
       </Slider>
     </div>)
   }
 }


export default SliderComponent2;
