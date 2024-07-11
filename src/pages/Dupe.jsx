import React, { useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import { color } from "../components/Color";

function Dupe() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      style={{
        width: "100%",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center ",
        backgroundColor: "rgba(128, 128, 128, 0.5)",
        flexDirection: "column",
      }}
    >
      <strong style={{ fontSize: "clamp(1rem, 0.4355rem + 2.5806vw, 2.5rem)" }}>
        Sorry for the inconvenience...
      </strong>
      <h4
        style={{fontSize: "clamp(0.875rem, 0.6868rem + 0.8602vw, 1.375rem)" }}
      >
        This page will be added in the future...
      </h4>

      <div
        style={{ width: "100%", display: "flex", justifyContent: "center " }}
      >
        <Button
          style={{
            backgroundColor: color.main,
            padding: "10px 15px",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "clamp(0.75rem, 0.4375rem + 1vw, 1rem)",
          }}
        >
          <Link to={"/"} style={{ color: "white", textDecoration: "none" }}>
            Go to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default Dupe;
