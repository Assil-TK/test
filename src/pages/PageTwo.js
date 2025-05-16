import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { styled } from "@mui/system";

const RedButton = styled(Button)({
  backgroundColor: 'blue',
  '&:hover': {
    backgroundColor: '#F39325',
  },
});

function PageTwo() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Page Two</h1>
      <RedButton
        variant="contained"
        onClick={() => navigate("/")}
      >
        Go to Page 1
      </RedButton>
    </div>
  );
}

export default PageTwo;