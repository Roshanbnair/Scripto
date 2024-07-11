import React from "react";
import "./navigate.css";
import proff from "../../../public/proff.png";
import innov from "../../../public/innov.png";
import {Link} from "react-router-dom";
import {color} from "../Color";

const Navigate = () => {
  return (
    <div style={{height: "auto", width: "100%", position: "relative"}}>
      <div
        className="black"
        style={{
          width: "100%",
          height: "500px",
          backgroundColor: "rgba(0,0,0,0.7)",
          padding: "100px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          className="navigator-heading"
          style={{width: "60%", height: "auto"}}
        >
          <p
            style={{
              color: color.main,
              fontSize: "clamp(1.125rem, -0.9844rem + 6.75vw, 1.8125rem)",
              fontWeight: "600",
            }}
          >
            When you work with Scriptoproof, you know you'll be getting the best
            possible editorial service.
          </p>
        </div>
        <div
          className="navigator-text"
          style={{
            width: "40%",
            height: "auto",
            padding: "20px 10px",
            color: "white",
            textAlign: " justify",
          }}
        >
          <p style={{fontSize: "clamp(0.75rem, 0.4375rem + 1vw, 1rem)"}}>
            We have editorial services designed to meet the specific needs of
            corporate clients. Our range of services can be customized to fit
            the individual requirements of a project. Best of all, our editors
            are highly experienced and have a proven track record.
            {/* Whether you're planning for retirement, managing investments, or
            navigating complex financial decisions, we're here to provide expert
            advice and support every step of the way. Let's build your financial
            future, together. */}
          </p>
        </div>
      </div>
      <div
        className="cards-outer"
        style={{
          width: "100%",
          display: "flex",
          padding: "20px 50px",
          //   backgroundColor: "yellow",
          position: "absolute",
          top: "300px",
          height: "auto",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <div
          className="single-card"
          style={{
            height: "400px",
            width: "300px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "white",
            padding: "60px 30px",
            borderRadius: "5px",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          }}
        >

            <i class="icon fa-solid fa-pen-to-square " style={{
              color: color.main,
              fontSize: "clamp(2.5rem, 1.7188rem + 2.5vw, 3.125rem)",
            }}></i>

          <div
            className="heading"
            style={{
              fontSize: "clamp(1rem, 0.9096rem + 0.4255vw, 1.25rem)",
              fontWeight: "600",
            }}
          >
            
            Proofreading & Editing
          </div>
          <p
            className="text"
            style={{
              textAlign: "center",
              fontSize: "clamp(0.875rem, 0.8524rem + 0.1064vw, 0.9375rem) ",
            }}
          >
            Get expert help from our academic editors, who will proofread
            and edit your essay, papers to perfection.
          </p>
          <button
            className="button-nav"
            style={{
              color: color.main,
              border: "none",
              backgroundColor: "transparent",
              fontSize: "clamp(0.75rem, 0.4375rem + 1vw, 1rem)",
              cursor: "default",
            }}
          >
            Read More
            <Link
              to={"/coming-soon"}
              style={{color: "white", textDecoration: "none"}}
            >
              <i className="arrow fa-solid fa-arrow-right-long ms-2"></i>
            </Link>
          </button>
        </div>
        <div
          className="single-card"
          style={{
            height: "400px",
            width: "300px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "white",
            padding: "60px 30px",
            borderRadius: "5px",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          }}
        >
          <i
            class="icon fa-solid fa-language"
            style={{
              color: color.main,
              fontSize: "clamp(2.5rem, 1.7188rem + 2.5vw, 3.125rem)",
            }}
          ></i>
          <div
            className="heading"
            style={{
              fontSize: "clamp(1rem, 0.9096rem + 0.4255vw, 1.25rem)",
              fontWeight: "600",
            }}
          >
            Translation
          </div>
          <p
            className="text"
            style={{
              textAlign: "center",
              fontSize: "clamp(0.875rem, 0.8524rem + 0.1064vw, 0.9375rem) ",
            }}
          >
            Professional translation services to help you convey your message
            accurately and effectively across languages.
          </p>
          <button
            className="button-nav"
            style={{
              color: color.main,
              border: "none",
              backgroundColor: "transparent",
              fontSize: "clamp(0.75rem, 0.4375rem + 1vw, 1rem)",
              cursor: "default",
            }}
          >
            Read More
            <Link
              to={"/coming-soon"}
              style={{color: "white", textDecoration: "none"}}
            >
              <i className="arrow  fa-solid fa-arrow-right-long ms-2"></i>
            </Link>
          </button>
        </div>
        <div
          className="single-card"
          style={{
            height: "400px",
            width: "300px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "white",
            padding: "60px 30px",
            borderRadius: "5px",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          }}
        >
          <i
            class="icon fa-solid fa-file-word"
            style={{
              color: color.main,
              fontSize: "clamp(2.5rem, 1.7188rem + 2.5vw, 3.125rem)",
            }}
          ></i>
          <div
            className="heading"
            style={{
              fontSize: "clamp(1rem, 0.9096rem + 0.4255vw, 1.25rem)",
              fontWeight: "600",
            }}
          >
            English Consultancy
          </div>
          <p
            className="text"
            style={{
              textAlign: "center",
              fontSize: "clamp(0.875rem, 0.8524rem + 0.1064vw, 0.9375rem) ",
            }}
          >
            Tailored English language consultancy to support your communication
            needs and enhance your writing.
          </p>
          <button
            className="button-nav"
            style={{
              color: color.main,
              border: "none",
              backgroundColor: "transparent",
              fontSize: "clamp(0.75rem, 0.4375rem + 1vw, 1rem)",
              cursor: "default",
            }}
          >
            Read More
            <Link
              to={"/coming-soon"}
              style={{color: "white", textDecoration: "none"}}
            >
              <i className="arrow  fa-solid fa-arrow-right-long ms-2"></i>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigate;
