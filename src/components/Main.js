import { Box, ThemeProvider, createTheme, useMediaQuery } from "@mui/material";
import Main_Bg from "./../assets/main_bg.jpg";
import SideBar from "./SideBar";
import Header from "./Header";
import SearchBar from "./SearchBar";
import HotCollections from "./HotCollections";
import RegularCollections from "./RegularCollections";

function Greeting() {
  let today = new Date();
  let currentHour = today.getHours();

  if (currentHour < 12) {
    return "Good Morning";
  } else {
    return "Good Evening";
  }
}

let Username = "Jeff Reeves";
let userImage = './../assets/elon-musk-masks-now-available-to-public-alt-az-732169.png';

let theme = createTheme();

function Main() {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <Box
      component="div"
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundImage: `url(${Main_Bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width:"90%",
          height:"95%",
          borderRadius: "20px",
          backgroundColor: "#efefff",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <Box
          sx={{
            height: "90%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: "10%", height: "98%", marginLeft: "1%" }}>
            <SideBar userimage={userImage}/>
          </Box>
          <Box
            sx={{
              width: "85%",
              height: "98%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box>{Greeting()},</Box>
                <Box>{Username}</Box>
              </Box>
              <Box sx={{ marginRight: "2%" }}>
                <SearchBar />
              </Box>
            </Box>
            <HotCollections />
            <RegularCollections />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Main;
