import { Box } from "@mui/material";
import React from "react";

import vimage from "./../assets/orange-range-rover-evoque-convertible-car-min.png";

function VehicleImage({ image }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "50%",
        backgroundImage: `url(${vimage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    ></Box>
  );
}

export default VehicleImage;
