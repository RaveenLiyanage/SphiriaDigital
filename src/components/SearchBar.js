import { InputAdornment, TextField, useMediaQuery } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <TextField
      sx={{
        width:isMobile?'40vw':'20vw',
        height:isMobile?'5vh':'auto',
        border: "none",
        "& fieldset": { border: "none" },
        borderRadius: isMobile? '15px':'25px',
        backgroundColor: "white",
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      placeholder='Search here'
    ></TextField>
  );
}

export default SearchBar;
