import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";

const RedButton = styled(Button)({
  backgroundColor: 'red',
  '&:hover': {
    backgroundColor: '#F39325',
  },
});

function PageTwo() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px", textAlign: "center", backgroundColor: '#F5F5F6', fontFamily: 'Fira Sans' }}>
      <h1>Page Two</h1>
      <RedButton
        variant="contained"
        onClick={() => navigate("/")}
        sx={{ fontFamily: 'Fira Sans' }}
      >
        Go to Page 1
      </RedButton>
      <Typography sx={{ fontFamily: 'Fira Sans', color: '#1B374C' }}>Hello</Typography>
    </div>
  );
}

export default PageTwo;