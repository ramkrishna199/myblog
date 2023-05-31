import { Box } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "black",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ color: "#fafafa" }}>Footer</Box>
      </Box>
    </>
  );
};

export default Footer;
