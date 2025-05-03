import React from "react";
import { useNavigate } from "react-router-dom";

function PageOne() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Page One</h1>
      <img
        src="/image/logo192.png"  // Correct path to the image in public/images
        alt="Page One"
        style={{ width: "300px", height: "auto", marginBottom: "20px" }}
      />
      <br />
      <button onClick={() => navigate("/page-two")}>Go to Page Two</button>
    </div>
  );
}

export default PageOne;
