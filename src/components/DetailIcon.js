import { Box } from "@mui/material";
import React from "react";
import BoltIcon from "@mui/icons-material/Bolt";
import HeightIcon from "@mui/icons-material/Height";
import PistonIcon from "./../bin/pistonIcon";
import WaterDropSharpIcon from "@mui/icons-material/WaterDropSharp";

function IconSelector(icon) {
  switch (icon) {
    case "engineCapacity":
      return <BoltIcon />;
      break;
    case "horsePower":
      return <HeightIcon />;
      break;
    case "cylinders":
      return <PistonIcon />;
      break;
    case "transmission":
      return <WaterDropSharpIcon />;
      break;
  }
}
function UnitSelector(icon) {
  switch (icon) {
    case "engineCapacity":
      return 'CC';
      break;
    case "horsePower":
      return 'BHP';
      break;
    case "cylinders":
      return 'Cylinder';
      break;
    case "transmission":
      return 'Speed';
      break;
  }
}

function BackgroundColorSelector(icon, value) {
    if (icon=='engineCapacity') {
        if (value>1000) {
            return ('#fe1');
        } else {
            return ('#11f');
        }
    }
    if (icon=='horsePower') {
        if (value>300) {
            return ('#11f');
        } else {
            return ('#41f');
        }
    }
    if (icon=='cylinders') {
        if (value>1000) {
            return ('#fe1');
        } else {
            return ('#11f');
        }
    }
    if (icon=='transmission ') {
        if (value>1000) {
            return ('#fe1');
        } else {
            return ('#11f');
        }
    }
}

function DetailIcon({ icon, value }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "45%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:'#fcc',
        borderRadius:'15px'
      }}
    >
      <Box
        sx={{
          width: "30%",
          height: "35%",
          borderRadius: "50%",
          backgroundColor: "#eee",
        }}
      >
        {IconSelector(icon)}
      </Box>
      <Box >
        {value}{UnitSelector(icon)}
      </Box>
    </Box>
  );
}

export default DetailIcon;
