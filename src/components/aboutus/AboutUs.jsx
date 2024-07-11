import React from "react";
import "./aboutUs.css";
import aboutus from "../../../public/aboutus.png";
import rectangle from "../../../public/rectangle.png";
import {Link} from "react-router-dom";
import {color} from "../Color";

const AboutUs = () => {
  return (
    <div
      id="aboutUs"
      className="about-outer"
      style={{
        height: "600px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "450px",
        padding: "0px 100px",
        alignItems: "start",
      }}
    >
      <div
        className="image-rectangle"
        style={{
          position: "relative",
          backgroundColor: "blue",
          height: "auto",
        }}
      >
        <img
          className="real-image"
          src={aboutus}
          alt=""
          style={{zIndex: "8", width: "450px", position: "absolute"}}
        />
        <img
          className="rectanle"
          src={rectangle}
          alt=""
          style={{
            position: "absolute",
            top: "210px",
            left: "350px",
            zIndex: "3",
          }}
        />
      </div>
      <div className="text-aboutus" style={{width: "40%", marginTop: "50px"}}>
        {" "}
        {"             "}
        <p
          className="title-about"
          style={{
            fontSize: "16px",
            fontWeight: "600",
            marginLeft: "110px",
            width: "200px",
          }}
        >
          About Us
        </p>
        <p
          style={{
            fontSize: "clamp(1.25rem, -0.3125rem + 5vw, 2.5rem)",
            fontWeight: "600",
          }}
        >
          Experienced and <span style={{color: color.main}}>Trusted</span>{" "}
        </p>
        <p
          style={{
            textAlign: "justify",
            fontSize: "clamp(0.75rem, 0.6596rem + 0.4255vw, 1rem)",
          }}
        >
          We are dedicated to perfecting your writing. Our platform offers
          expert proofreading services tailored to enhance clarity, grammar, and
          style. Trust us to elevate your text with precision and
          professionalism.
        </p>
        <button
          style={{
            backgroundColor: color.main,
            padding: "10px 15px",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "clamp(0.75rem, 0.4375rem + 1vw, 1rem)",
          }}
        >
          <Link
            to={"/coming-soon"}
            style={{color: "white", textDecoration: "none"}}
          >
            Know More
          </Link>
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
