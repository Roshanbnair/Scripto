import React, {useEffect} from "react";
import {useState} from "react";
import {NavLink} from "react-router-dom";
import "./navbar.css";
import logo from "../../../public/sLogo.png";
import Nav from "react-bootstrap/Nav";
import useSmoothScroll from "../UseSmoothScroll";
import {color} from "../Color";

const Navbar = () => {
  const [click, setClick] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  const handleClickMenu = () => setClick(!click);

  const handleItemClick = (index) => {
    setActiveIndex(index);
    setClick(true); // Close menu after clicking item
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useSmoothScroll();
  return (
    <>
      {/* <img src={logo} alt="" /> */}
      <nav
        className="navbar"
        style={{
          height: "80px",
          position: "fixed",
          backgroundColor: color.secondary,
          // transition: "background-color 0.3s ease",
          zIndex: "10",
          width: "100%",
        }}
      >
        <div
          className={click ? "nav-container nav-burger-color" : "nav-container"}
          style={{width: "100%"}}
        >
          <NavLink exact to="/" className="nav-logo">
            <div
              style={{
                height: "100px",
                display: "flex",
                width: "155px",
                justifyContent: "space-around",
                alignItems: "center",
                paddingTop: "10px",
                marginBottom: "10px",
              }}
              className="logo-size"
            >
              <img
                src={logo}
                alt=""
                style={{
                  width: "150px",
                  objectFit: "contain",
                }}
              />{" "}
            </div>
            <p></p>
          </NavLink>
          <div
            className="left-nav-content"
            style={{
              display: "flex",
              justifyContent: "center",
              width: "55%",
              alignItems: "center",
              height: "50%",
              fontFamily: "Mulish, sans-serif",
              fontWeight: "400",
              FontStyle: "normal",
              // backgroundColor: "rgba(128, 128, 128, 0.8)",
              borderRadius: "10px 0 0 10px",
            }}
          >
            <ul className={!click ? "nav-menu active" : "nav-menu"}>
              <li className={`nav-item`} onClick={() => handleItemClick(0)}>
                <Nav.Link
                  href="#home"
                  style={{
                    fontSize: "clamp(0.75rem, 0.703rem + 0.2151vw, 0.875rem)",
                  }}
                  className="nav-links"
                >
                  <div
                    className={` ${
                      activeIndex === 0 ? "underline-active" : "underline"
                    }`}
                  ></div>
                  Home
                </Nav.Link>
              </li>
              <li className={`nav-item `} onClick={() => handleItemClick(1)}>
                <Nav.Link
                  href="#aboutUs"
                  style={{
                    fontSize: "clamp(0.75rem, 0.703rem + 0.2151vw, 0.875rem)",
                  }}
                  className="nav-links"
                >
                  {" "}
                  <div
                    className={` ${
                      activeIndex === 1 ? "underline-active" : "underline"
                    }`}
                  ></div>
                  About us
                </Nav.Link>
              </li>
              <li className={`nav-item`} onClick={() => handleItemClick(2)}>
                <Nav.Link
                  href="#service"
                  style={{
                    fontSize: "clamp(0.75rem, 0.703rem + 0.2151vw, 0.875rem)",
                  }}
                  className="nav-links"
                >
                  {" "}
                  <div
                    className={` ${
                      activeIndex === 2 ? "underline-active" : "underline"
                    }`}
                  ></div>
                  Services
                </Nav.Link>
              </li>
              <li className={`nav-item `} onClick={() => handleItemClick(3)}>
                <Nav.Link
                  href="#testimonials"
                  style={{
                    fontSize: "clamp(0.75rem, 0.703rem + 0.2151vw, 0.875rem)",
                  }}
                  className="nav-links"
                >
                  {" "}
                  <div
                    className={` ${
                      activeIndex === 3 ? "underline-active" : "underline"
                    }`}
                  ></div>
                  Testimonials
                </Nav.Link>
              </li>
              <li className={`nav-item `} onClick={() => handleItemClick(4)}>
                <Nav.Link
                  href="#contactUs"
                  style={{
                    fontSize: "clamp(0.75rem, 0.703rem + 0.2151vw, 0.875rem)",
                  }}
                  className="nav-links"
                >
                  {" "}
                  <div
                    className={` ${
                      activeIndex === 4 ? "underline-active" : "underline"
                    }`}
                  ></div>
                  Contact us
                </Nav.Link>
              </li>
            </ul>

            <div
              className="nav-icon"
              style={{color: "black"}}
              onClick={handleClickMenu}
            >
              {click ? (
                <i className="fa-solid fa-bars"></i>
              ) : (
                <i className="fa-solid fa-xmark"></i>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
