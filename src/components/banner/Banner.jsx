import React from "react";
import banner from ".././../../public/banner.jpeg";
import "./banner.css";
import {Link} from "react-router-dom";
import {color} from "../Color";
import {useDispatch} from "react-redux";
import {getUsers} from "../../store/user/userSlice";
const Banner = () => {
  const dispatch = useDispatch();
  const test = () => {
    dispatch(getUsers());
  };
  return (
    <div
      style={{height: "1000px", width: "100%", position: "relative"}}
      className="banner-outer-fin"
      id="home"
    >
      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.3)",
        }}
      ></div>
      <img
        src={banner}
        alt=""
        style={{height: "100%", width: "100%", objectFit: "cover"}}
      />
      {/* <div
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "rgb(41,38,38,0.1)",
          position: "absolute",
          top:"0px"
        }}
      ></div> */}
      <div
        className="banner-text-div-b"
        style={{
          display: "flex",
          // height: "600px",
          width: "580px",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "start",
          position: "absolute",
          top: "350px",
          left: "100px",
          textAlign: "justify",
          // backgroundColor: "rgba(128, 128, 128, 0.8)",
          padding: "20px 20px",
          borderRadius: "10px",
        }}
      >
        <p
          className="text-start"
          style={{
            color: "white",
            fontSize: "clamp(1rem, 0.2314rem + 3.617vw, 3.125rem)",
            fontWeight: "600",
          }}
        >
          Your path to academic success ...
        </p>
        <p
          className="small-text-banner"
          style={{
            color: "white",
            fontSize: "clamp(0.75rem, 0.5156rem + 0.75vw, 0.9375rem)",
            textAlign: "justify",
          }}
        >
          Improve your paper with our award-winning Proofreading Services,
          Plagiarism Checker, Citation Generator, AI Detector & Knowledge Base.
        </p>
        <div style={{width: "100%", height: "auto"}}>
          {/* <Link to={"/collections/Ladies"}> */}
          <button
            className=""
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
              style={{textDecoration: "none", color: "white"}}
              to={"/coming-soon"}
              onClick={() => test()}
            >
              Get Started
            </Link>
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
