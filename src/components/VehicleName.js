import { Box } from "@mui/material";
import React from "react";
import logo1 from "./../assets/rangerover_logo.png";

function VehicleName({ logo, make, model }) {
  return (
    <Box sx={{ width: "100%", height: "20%", display: "flex", justifyContent:'space-between' }}>
      <Box
        sx={{
          backgroundImage: `url(${logo1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          width: "25%",
          height: "100%",
          backgroundPosition: "center",
          borderRadius:'50%',
          backgroundColor:'#eee'
        }}
      ></Box>
      <Box sx={{width:'60%', height:'100%'}}>
        <Box>{make}</Box>
        <Box>{model}</Box>
      </Box>
    </Box>
  );
}

export default VehicleName;
