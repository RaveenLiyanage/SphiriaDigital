import { Box, Card, useMediaQuery } from "@mui/material";
import React from "react";
import VehicleName from "./VehicleName";
import VehicleImage from "./VehicleImage";
import VehiclePrice from "./VehiclePrice";
import DetailIcon from "./DetailIcon";
import MinorCrashSharpIcon from "@mui/icons-material/MinorCrashSharp";

function HotCollectionCard({ vehicle }) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Card
      sx={{
        width: "48%",
        height: "100%",
        display: "flex",
        justifyContent: "space-around",
        marginRight: "2%",
      }}
    >
      <Box
        sx={{
          width: "45%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <VehicleName
          logo={vehicle.logo}
          make={vehicle.make}
          model={vehicle.model}
        />
        <VehicleImage />
        <VehiclePrice askingPrice={vehicle.askingPrice} />
      </Box>
      <Box
        sx={{
          width: "45%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "70%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Box
            sx={{
              width: "45%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <DetailIcon
              icon={"engineCapacity"}
              value={vehicle.engineCapacity}
            />
            <DetailIcon icon={"transmission"} value={vehicle.transmission} />
          </Box>
          <Box
            sx={{
              width: "45%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <DetailIcon icon={"horsePower"} value={vehicle.horsePower} />
            <DetailIcon icon={"cylinders"} value={vehicle.transmission} />
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "20%",
            display: "flex",
            alignItems: "center",
            backgroundColor:
              vehicle.mileage > 10000
                ? "rgba(0,0,100,0.2)"
                : "rgba(0,100,0,0.5)",
            borderRadius: "10px",
          }}
        >
          <Box>
            <MinorCrashSharpIcon />
          </Box>
          <Box>Total Run: {vehicle.mileage} km</Box>
        </Box>
      </Box>
    </Card>
  );
}

export default HotCollectionCard;
