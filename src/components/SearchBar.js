import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  return (
    <TextField
      sx={{
        border: "none",
        "& fieldset": { border: "none" },
        borderRadius: "25px",
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
