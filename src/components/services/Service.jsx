import React from "react";
import "./service.css";
import audit from "../../../public/audit.png";
import book from "../../../public/book.png";
import bussiness from "../../../public/bussiness.png";
import corpo from "../../../public/corpo.png";
import payroll from "../../../public/payroll.png";
import tax from "../../../public/tax.png";
import center from "../../../public/center-service.png";
import {color} from "../Color";

const Service = () => {
  return (
    <div
      id="service"
      className="service-outest"
      style={{width: "100%", height: "auto"}}
    >
      <div
        className="title-service-headings"
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <p className="title-service" style={{fontSize: "16px"}}>
          Our Services
        </p>
        <p
          className="ms-3"
          style={{
            fontSize: "clamp(1.25rem, -0.3125rem + 5vw, 2.5rem)",
            fontWeight: "600",
          }}
        >
          Committed to Your{" "}
          <span style={{color: color.main}}>Proofreading Excellence</span>{" "}
        </p>
      </div>

      {/* MAIN DIV */}
      <div
        className="outer-service-rows"
        style={{
          display: "flex",
          justifyContent: "space-between",
          //   backgroundColor: "yellow",
          padding: "50px",
          alignItems: "center",
        }}
      >
        {/* LEFT */}
        <div className="left-service" style={{width: "30%"}}>
          <div
            className="each-text"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div className="icon">
              <img src={tax} alt="" className="service-icon" />
            </div>
            <div className="text-only" style={{width: "80%"}}>
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "clamp(1rem, 0.9548rem + 0.2128vw, 1.125rem)",
                  color: color.main,
                }}
              >
                Expert Proofreading Services
              </p>
              <p
                style={{
                  fontSize: "clamp(0.75rem, 0.6596rem + 0.4255vw, 1rem)",
                }}
              >
                Our dedicated team provides meticulous proofreading services for
                all types of documents.
              </p>
            </div>
          </div>
          <div
            className="each-text"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div className="icon">
              <img src={tax} alt="" className="service-icon" />
            </div>
            <div className="text-only" style={{width: "80%"}}>
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "clamp(1rem, 0.9548rem + 0.2128vw, 1.125rem)",
                  color: color.main,
                }}
              >
                Expert Proofreading Services
              </p>
              <p
                style={{
                  fontSize: "clamp(0.75rem, 0.6596rem + 0.4255vw, 1rem)",
                }}
              >
                Our dedicated team provides meticulous proofreading services for
                all types of documents.
              </p>
            </div>
          </div>
          <div
            className="each-text"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div className="icon">
              <img src={tax} alt="" className="service-icon" />
            </div>
            <div className="text-only" style={{width: "80%"}}>
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "clamp(1rem, 0.9548rem + 0.2128vw, 1.125rem)",
                  color: color.main,
                }}
              >
                Expert Proofreading Services
              </p>
              <p
                style={{
                  fontSize: "clamp(0.75rem, 0.6596rem + 0.4255vw, 1rem)",
                }}
              >
                Our dedicated team provides meticulous proofreading services for
                all types of documents.
              </p>
            </div>
          </div>
        </div>

        {/* CENTER */}
        <div className="center-image" style={{width: "30%"}}>
          <img src={center} alt="" style={{width: "100%"}} />
        </div>
        {/* RIGHT */}
        <div className="right-service" style={{width: "30%"}}>
          <div
            className="each-text"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div className="icon">
              <img src={tax} alt="" className="service-icon" />
            </div>
            <div className="text-only" style={{width: "80%"}}>
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "clamp(1rem, 0.9548rem + 0.2128vw, 1.125rem)",
                  color: color.main,
                }}
              >
                Expert Proofreading Services
              </p>
              <p
                style={{
                  fontSize: "clamp(0.75rem, 0.6596rem + 0.4255vw, 1rem)",
                }}
              >
                Our dedicated team provides meticulous proofreading services for
                all types of documents.
              </p>
            </div>
          </div>
          <div
            className="each-text"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div className="icon">
              <img src={tax} alt="" className="service-icon" />
            </div>
            <div className="text-only" style={{width: "80%"}}>
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "clamp(1rem, 0.9548rem + 0.2128vw, 1.125rem)",
                  color: color.main,
                }}
              >
                Expert Proofreading Services
              </p>
              <p
                style={{
                  fontSize: "clamp(0.75rem, 0.6596rem + 0.4255vw, 1rem)",
                }}
              >
                Our dedicated team provides meticulous proofreading services for
                all types of documents.
              </p>
            </div>
          </div>
          <div
            className="each-text"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div className="icon">
              <img src={tax} alt="" className="service-icon" />
            </div>
            <div className="text-only" style={{width: "80%"}}>
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "clamp(1rem, 0.9548rem + 0.2128vw, 1.125rem)",
                  color: color.main,
                }}
              >
                Expert Proofreading Services
              </p>
              <p
                style={{
                  fontSize: "clamp(0.75rem, 0.6596rem + 0.4255vw, 1rem)",
                }}
              >
                Our dedicated team provides meticulous proofreading services for
                all types of documents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
