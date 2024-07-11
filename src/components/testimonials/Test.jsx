import React from "react";
import "./test.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import test from "../../../public/testperson.png";
import appos from "../../../public/appos.png";
import apposleft from "../../../public/apposleft.png";
// import { Carousel } from "react-responsive-carousel";
import {color} from "../Color";

const Test = () => {
  return (
    <div
      id="testimonials"
      className="test-outest"
      style={{
        width: "100%",

        // backgroundColor: "yellow",
        height: "auto",
        padding: "100px",
      }}
    >
      <div
        className="test-title"
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <p className="title-test" style={{fontSize: "16px"}}>
          Testimonials
        </p>
        <p
          className="ms-2"
          style={{
            fontSize: "clamp(1.25rem, -0.3125rem + 5vw, 2.5rem)",
            fontWeight: "600",
            marginTop: "0px",
            // marginBottom: "20px",
          }}
        >
          Committed to Your{" "}
          <span style={{color: color.main}}> Proofreading Services </span>{" "}
        </p>
      </div>
      <div
        className="test-content"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "end  ",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div
          className="left-test-text"
          style={{
            width: "65%",
            textAlign: "justify",
            padding: "60px 60px",
            backgroundColor: color.secondary,
            // height: "300px",
            zIndex: "8  ",
            position: "absolute",
            left: "0px",
          }}
        >
          <img
            className="appos-left"
            src={appos}
            alt=""
            style={{position: "absolute", left: "60px", top: "20px"}}
          />
          <p
            className="disc-test"
            style={{
              marginTop: "0px",
              marginBottom: "20px",
              fontSize: "clamp(0.75rem, 0.4375rem + 1vw, 1rem)",
            }}
          >
            The proofreading services provided were exceptional. Every document
            was meticulously reviewed, ensuring clarity and coherence. The
            attention to detail was outstanding, catching errors that would have
            otherwise been overlooked. Highly recommend for anyone seeking to
            enhance the quality of their written work.
          </p>
          <p
            className="name-test"
            style={{
              color: color.main,
              margin: "0px",
              fontSize: "clamp(0.75rem, 0.4375rem + 1vw, 1rem)",
            }}
          >
            Anna Catherine
          </p>
          <p
            className="design-test"
            style={{
              color: color.main,
              margin: "0px",
              fontSize: "clamp(0.75rem, 0.4375rem + 1vw, 1rem)",
            }}
          >
            CEO, A&A Associates
          </p>
          <img
            className="appos-right"
            src={apposleft}
            style={{position: "absolute", right: "60px", bottom: "20px"}}
            alt=""
          />
        </div>
        <div className="test-pic" style={{width: "50%", height: "550px"}}>
          <img
            src={test}
            style={{width: "100%", height: "100%", objectFit: "cover"}}
            alt=""
          />
        </div>
        {/* <Carousel
          showThumbs={false}
          dynamicHeight={true}
          showArrows={true}
          infiniteLoop={true}
          swipeable={true}
          // animationHandler="fade"
          showStatus={false}
          autoPlay={true}
          stopOnHover={false}
        >


          KIDS

          <div
            className="banner-outer-div"
            style={{
              position: "relative",
              height: "700px",
              width: "100%",
            }}
          >
            <div
              className="banner-text-div"
              style={{
                display: "flex",
                height: "600px",
                width: "400px",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "start",
                position: "absolute",
                top: "200px",
                left: "100px",
                textAlign: "start",
              }}
            >
              <p
                className="text-start"
                style={{ color: "black", fontSize: "35px" }}
              >
                Bold and Confident: Fashion-Forward Men's Wear
              </p>
              <div style={{ width: "100%", height: "auto" }}></div>
            </div>
          </div>
        </Carousel> */}
      </div>
    </div>
  );
};

export default Test;
