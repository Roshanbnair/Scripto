import React from "react";
import "./contact.css";
import { Link } from "react-router-dom";
import {color} from "../Color"

const Contact = () => {
  return (
    <div
      id="contactUs"
      className="outer-contact"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "yellow",
        height: "auto",
        padding: "100px",
        position: "relative",
        alignItems: "center",
      }}
    >
      <div
        className="black-blur"
        style={{ width: "100%", height: "100%" }}
      ></div>

      {/* LEFT */}
      <div
        className="left-form"
        style={{ width: "40%", height: "auto", zIndex: "3" }}
      >
        <form
          action=""
          style={{
            width: "100%",
            height: "400px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            zIndex: "10",
          }}
        >
          <input
            className="input-field"
            type="text"
            placeholder="Name"
            style={{
              border: "none",
              backgroundColor: "transparent",
              borderBottom: "2px solid white",
              outline: "none",
              fontSize: "clamp(0.75rem, 0.6596rem + 0.4255vw, 1rem)",
              color: "white",
            }}
          />
          <input
            className="input-field"
            type="text"
            placeholder="E mail"
            style={{
              border: "none",
              backgroundColor: "transparent",
              borderBottom: "2px solid white",
              outline: "none",
              fontSize: "clamp(0.75rem, 0.6596rem + 0.4255vw, 1rem)",
              color: "white",
            }}
          />
          <input
            className="input-field"
            type="text"
            placeholder="Contact Number"
            style={{
              border: "none",
              backgroundColor: "transparent",
              borderBottom: "2px solid white",
              outline: "none",
              fontSize: "clamp(0.75rem, 0.6596rem + 0.4255vw, 1rem)",
              color: "white",
            }}
          />
          <textarea
            className="input-field"
            rows="6"
            cols="20"
            type="t"
            placeholder="Your Message"
            style={{
              border: "none",
              backgroundColor: "transparent",
              borderBottom: "2px solid white",
              outline: "none",
              fontSize: "clamp(0.75rem, 0.6596rem + 0.4255vw, 1rem)",
              color: "white",
            }}
          />
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={"/coming-soon"}
          >
            <button
              style={{
                backgroundColor: color.main,
                padding: "10px 15px",
                color: "white",
                border: "none",
                borderRadius: "5px",
                fontSize: "clamp(0.75rem, 0.4375rem + 1vw, 1rem)",
                width: "150px",
              }}
            >
              Submit
            </button>
          </Link>
        </form>
      </div>

      {/* RIGHT */}
      <div
        className="right-contact"
        style={{ width: "50%", height: "auto", zIndex: "3" }}
      >
        <p className="title-team" style={{ color: "white" }}>
          Contact US
        </p>
        <p
          style={{
            fontSize: "clamp(1.25rem, -0.3125rem + 5vw, 2.5rem)",
            fontWeight: "600",
            color: "white",
            marginTop: "0px",
          }}
        >
          Reach Our <span style={{ color: color.main }}>Support Team</span>{" "}
        </p>
        <p
          style={{
            color: "white",
            textAlign: "justify",
            fontSize: "clamp(0.75rem, 0.6596rem + 0.4255vw, 1rem)",
          }}
        >
          We understand that companies and institutions have large volumes of written content, and our editorial services can help you stay on top of this mountain of material.
        </p>
      </div>
    </div>
  );
};

export default Contact;
