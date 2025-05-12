import React from "react";
import { useNavigate } from "react-router-dom";
import myImage from "../assets/logo192.png";
import { Button } from "@mui/material";

function PageOne() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Page One</h1>
      <img
        src={myImage}
        alt="Page One"
        style={{ width: "300px", height: "auto", marginBottom: "20px" }}
      />
      <br />
      <Button onClick={() => navigate("/page-two")} sx={{
        backgroundColor: "#1B374C",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}>
        Go to Page Two
      </Button>
      <br /><br />
      <Button onClick={() => navigate("/page-two")} sx={{
        backgroundColor: "red",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}>
        Button 2
      </Button>
    </div>
  );
}

export default PageOne;