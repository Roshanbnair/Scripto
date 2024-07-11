import React from "react";
import "./team.css";
import jacob from "../../../public/teamjacob.png";
import ron from "../../../public/teamronaldo.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Carousell from "../carousel/Carousell";
// import Carousell from "../carousel/Carousell";

import {color} from "../Color"

const Team = () => {
  return (
    <div
      id="team"
      className="team-outer "
      style={{
        backgroundColor: color.secondary,
        width: "100%",
        height: "500px",
        padding: "100px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {/* LEFT */}
      <div className="text-left-side" style={{ width: "40%", height: "auto" }}>
        <p className="title-team">Our Team</p>
        <p
          style={{
            fontSize: "clamp(1.25rem, -0.3125rem + 5vw, 2.5rem)",
            fontWeight: "600",
          }}
        >
          Meet with Our{" "}
          <span style={{ color: color.main }}>Expert Editors</span>{" "}
        </p>
        <p
          style={{
            textAlign: "justify",
            fontSize: "clamp(0.75rem, 0.6596rem + 0.4255vw, 1rem)",
          }}
        >
          Our team of expert editors and proofreaders are here to ensure that
          your documents are polished and professional. We offer a range of
          proofreading services to catch grammatical errors, enhance clarity,
          and improve overall coherence. Each member of our team brings a wealth
          of experience and a keen eye for detail, making sure that your work
          stands out for its precision and readability.
        </p>
      </div>
      <div
        className="caroausel"
        style={{
          width: "45%",
          height: "auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Carousell />
        {/* <img className="first-pic" src={jacob} alt="" style={{width:'250px',height:'250px'}} />
        <img className="second-pic" src={ron} alt="" style={{width:'250px',height:'250px'}}  /> */}
      </div>
    </div>
  );
};

export default Team;
//
