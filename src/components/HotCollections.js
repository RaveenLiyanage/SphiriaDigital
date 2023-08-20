import { Box } from "@mui/material";
import React from "react";
import HotIcon from "./../assets/hot.png";
import HotCollectionCard from "./HotCollectionCard";

const vehicles = [
  {
    make: "Range Rover",
    model: "Evoque",
    logo: "./../assets/rangerover_logo.png",
    engineCapacity: 1997,
    horsePower: 246.74,
    transmission: 6,
    cylinders: 4,
    mileage: 12500,
    askingPrice: "$38700",
    image: "./../assets/orange-range-rover-evoque-convertible-car-min.png",
  },
  {
    make: "Nissan GTR",
    model: "R35 Nismo",
    logo: "./../assets/nissan_logo.png",
    engineCapacity: 3799,
    horsePower: 591.4,
    transmission: 6,
    cylinders: 6,
    mileage: 9254,
    askingPrice: "$187900",
    image: "./../assets/R35.png",
  },
];

function HotCollections() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "45%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            height: "25px",
            width: "25px",
            backgroundImage: `url(${HotIcon})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></Box>
        <Box marginLeft="2%">Hot Collections</Box>
      </Box>
      <Box sx={{height:'100%', display:'flex', justifyContent:'space-between'}}>
        <HotCollectionCard vehicle={vehicles[0]} />
        <HotCollectionCard vehicle={vehicles[1]} />
      </Box>
    </Box>
  );
}

export default HotCollections;
