import React, { useState } from "react";
import banner from ".././../../public/banner.jpeg";
import "./banner.css";
import {Link} from "react-router-dom";
import {color} from "../Color";
import {useDispatch} from "react-redux";
import {getUsers} from "../../store/user/userSlice";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 950,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const Banner = () => {
  const dispatch = useDispatch();
  dispatch(getUsers());

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
            onClick={handleOpen}
          >
            Get Started
          </button>
          {/* </Link> */}
        </div>
      </div>


      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
          <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "240px",
              height: "100px",
              alignItems: "center",
              // backgroundColor: "red",
              border:"1px solid black"
              padding:"10px"
            }}
          >
            <i class="fa-solid fa-pen-to-square fa-2xl"></i>
            <h6 style={{width: "200px"}}>Proofreading and editing</h6>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "240px",
              height: "100px",
              alignItems: "center",
              backgroundColor: "red",
              padding:"10px"
            }}
          >
            <i class="fa-solid fa-pen-to-square fa-2xl"></i>
            <h6 style={{width: "200px"}}>Proofreading and editing</h6>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "240px",
              height: "100px",
              alignItems: "center",
              backgroundColor: "red",
              padding:"10px"
            }}
          >
            <i class="fa-solid fa-pen-to-square fa-2xl"></i>
            <h6 style={{width: "200px"}}>Proofreading and editing</h6>
          </div>
        </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Banner;
