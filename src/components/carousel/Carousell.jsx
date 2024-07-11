import React from "react";
import jacob from "../../../public/teamjacob.png";
import ron from "../../../public/teamronaldo.png";
import { Carousel } from "react-responsive-carousel";
import "./carousell.css"


const Carousell = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button onClick={() => onClick()} style={{color:"red",backgroundColor:"red"}} />;
  };
  return (


      <Carousel showStatus={false}  customRightArrow={<CustomRightArrow />}
        swipeable={true} 
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        showThumbs={false}
      >
        <img
          className="first-pic"
          src={jacob}
          alt=""
          style={{ width: "250px", height: "250px" }}
        />
        <img
          className="second-pic"
          src={ron}
          alt=""
          style={{ width: "250px", height: "250px" }}
        />
  
      </Carousel>
      
  
  );
};

export default Carousell;
