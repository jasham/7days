// prettier-ignore
'use client';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, Divider, TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";

const locations = ["New York", "London", "Sydney", "Remote"]; // You can customize this list

export default function SearchBar() {
  const [keywords, setKeywords] = useState("");
  const [location, setLocation] = useState<string | null>(null);

  const handleSearch = () => {
    console.log("Searching:", { keywords, location });
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        borderRadius: 1,
        boxShadow: 1,
        overflow: "hidden",
        width: "100%",
        height: 56,
      }}
    >
      {/* Keywords Input */}
      <TextField
        variant="standard"
        placeholder="Keywords"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        InputProps={{
          disableUnderline: true,
          sx: { px: 2, py: 1.5 },
        }}
        sx={{ width:"40%"}}
      />

      {/* Divider between inputs */}
      <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

      {/* Location Autocomplete */}
      <Autocomplete
        options={locations}
        value={location}
        onChange={(e, newVal) => setLocation(newVal)}
        popupIcon={<ExpandMoreIcon />}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Location"
            variant="standard"
            InputProps={{
              ...params.InputProps,
              disableUnderline: true,
              sx: { px: 2, py: 1.5 },
            }}
          />
        )}
        sx={{ width:"40%"}}
      />

      {/* Search Button */}
      <Button
        onClick={handleSearch}
        sx={{
          height: "100%",
          width: "20%",
          borderRadius: 0,
          backgroundColor: "black",
          color: "white",
          px: 3,
          py: 2,
          "&:hover": {
            backgroundColor: "#333",
          },
        }}
      >
        Search Jobs&nbsp;
        <SearchIcon fontSize="small" />
      </Button>
    </Box>
  );
}
