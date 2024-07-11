import React from "react";
import "./footer.css";
import logo from "../../../public/sLogo.png";
import fb from "../../../public/fb.png";
import insta from "../../../public/insta.png";
import li from "../../../public/li.png";
import twi from "../../../public/twi.png";
import phone from "../../../public/phone.png";
import mail from "../../../public/mail.png";
import locat from "../../../public/locat.png";
import copy from "../../../public/copy.png";
import Nav from "react-bootstrap/Nav";
import {color} from "../Color";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div style={{backgroundColor: color.secondary}}>
      <div
        className="footer-outest"
        style={{
          width: "100%",
          height: "300px",
          padding: "60px 100px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* LEFT */}
        <div
          className="main-footer"
          style={{
            width: "40%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <img
            className="footer-logo"
            src={logo}
            style={{width: "200px"}}
            alt=""
          />
          <p
            style={{
              color: "black",
              textAlign: "justify",
              fontSize: "clamp(0.75rem, 0.6596rem + 0.4255vw, 1rem)",
            }}
          >
            Select your turnaround time and upload your document. Our
            proofreaders will thoroughly review your document, track their
            changes, and email it to you. All orders are covered by our 100%
            satisfaction guarantee.
          </p>
          <div
            className="icons"
            style={{
              width: "150px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <a href="/coming-soon">
              <i
                className="fa-brands fa-facebook-f fa-xl"
                style={{
                  color: color.main,
                  // marginTop: "10px"
                }}
              ></i>
            </a>
            <a
              href={"https://instagram.com/scriptoproof/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fa-brands fa-instagram fa-xl"
                style={{
                  color: color.main,
                  // marginTop: "10px"
                }}
              ></i>
            </a>
            <a href="/coming-soon">
              <i
                className="fa-brands fa-linkedin-in fa-xl"
                style={{
                  color: color.main,
                  // marginTop: "10px"
                }}
              ></i>
            </a>
            <a href="/coming-soon">
              <i
                className="fa-brands fa-x-twitter fa-xl"
                style={{
                  color: color.main,
                  // marginTop: "10px"
                }}
              ></i>
            </a>
          </div>
        </div>
        {/* RIGHT */}
        <div
          className="right-footer"
          style={{
            width: "50%",
            height: "auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            className="first"
            style={{
              width: "50%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p
              style={{
                fontWeight: "600",
                color: "black",
                marginBottom: "20px",
              }}
            >
              Quicklinks
            </p>
            <Nav.Link href="#aboutUs">
              <p
                style={{
                  color: "black",
                  fontSize: "clamp(0.75rem, 0.6596rem + 0.4255vw, 1rem)",
                }}
              >
                About us
              </p>
            </Nav.Link>
            <Nav.Link href="#service">
              <p
                style={{
                  color: "black",
                  fontSize: "clamp(0.75rem, 0.6596rem + 0.4255vw, 1rem)",
                }}
              >
                Services
              </p>
            </Nav.Link>

            {/* <p
                style={{
                  fontSize: "clamp(0.75rem, 0.6596rem + 0.4255vw, 1rem)",
                }}
              >
                Blogs
              </p> */}
            <Nav.Link href="#testimonials">
              <p
                style={{
                  color: "black",
                  fontSize: "clamp(0.75rem, 0.6596rem + 0.4255vw, 1rem)",
                }}
              >
                Testimonials
              </p>
            </Nav.Link>
            <Nav.Link href="#contactUs">
              <p
                style={{
                  color: "black",
                  fontSize: "clamp(0.75rem, 0.6596rem + 0.4255vw, 1rem)",
                }}
              >
                Contact us
              </p>
            </Nav.Link>
          </div>
          <div
            className="last"
            style={{
              width: "50%",
              height: "250px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              className="one"
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "start",
                height: "auto",
              }}
            >
              {/* <img className="me-2 mt-1 img-footer-icon" src={locat} alt="" /> */}
              <i
                className="fa-solid fa-location-dot fa-xl mt-3 ms- me-2"
                style={{fontSize: "26px", color: color.main}}
              ></i>

              <p
                style={{
                  color: "black",
                  fontSize: "clamp(0.75rem, 0.6596rem + 0.4255vw, 1rem)",
                }}
              >
                Surabhi, Konat Road, North Gate Vaikom, Kottayam ,Kerala <br />
                Pincode : 686141
              </p>
            </div>
            <div
              className="two"
              style={{
                display: "flex",
                width: "100%",
                // justifyContent: "space-between",
                alignItems: "start",
              }}
            >
              {/* <img src={phone} alt="" className="mt-1 me-2 img-footer-icon" /> */}
              <i
                className="fa-solid fa-phone fa-lg mt-2 me-2"
                style={{color: color.main}}
              ></i>

              <p
                style={{
                  color: "black",
                  fontSize: "clamp(0.75rem, 0.6596rem + 0.4255vw, 1rem)",
                }}
              >
                +91 7744851223
              </p>
            </div>
            <div
              className="three"
              style={{
                display: "flex",
                width: "100%",
                // justifyContent: "space-between",
                alignItems: "start",
                marginTop: "5px",
              }}
            >
              {/* <img src={mail} alt="" className=" me-2 img-footericon" /> */}
              <i
                className="fa-regular fa-envelope fa-xl mt-2 me-2"
                style={{color: color.main}}
              ></i>
              <p
                style={{
                  color: "black",
                  fontSize: "clamp(0.75rem, 0.6596rem + 0.4255vw, 1rem)",
                }}
              >
                scriptoproof@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr style={{color: color.main, width: "90%", margin: "10px"}} />
      <div
        style={{
          width: "100%",
          display: "flex",
          height: "30px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <i
          className="fa-regular fa-copyright fa-sm me-1"
          style={{color: color.main}}
        ></i>
        <p
          style={{
            margin: "0px",
            color: "black",
            fontSize: "clamp(0.75rem, 0.6596rem + 0.4255vw, 1rem)",
          }}
        >
          2024 scriptoproof.com - All rights reserved.
        </p>
      </div>{" "}
    </div>
  );
};

export default Footer;
