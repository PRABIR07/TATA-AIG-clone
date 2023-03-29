import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from "../components/Card"
const Customers = () => {
  return (
   
    <Carousel
      infiniteLoop
      autoPlay
      showStatus={false}
      showArrows={false}
      interval={4000}
      centerMode={true}
      centerSlidePercentage={40}
      className=""
    
    >
      <div>
       <Card/>
      </div>
      <div>
      <Card/>
      </div>
      <div>
      <Card/>
      </div>
      <div>
        <Card/>
      </div>
    </Carousel>
   
  );
};

export default Customers;
