import { Box, Avatar } from "@mui/material";
import React from "react";
import SideBarButton from "./SideBarButton";

function SideBar({userImage}) {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "black",
        borderRadius: "20px",
      }}
    >
      <Box 
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
        <SideBarButton icon={1} />
        <SideBarButton icon={2} />
        <SideBarButton icon={3} />
        <SideBarButton icon={4} />
        <SideBarButton icon={5} />
      </Box>
      <Box sx={{marginBottom:'15%'}}>
        <Avatar src={userImage}></Avatar>
      </Box>
    </Box>
  );
}

export default SideBar;
