// src/Components/SearchBar.tsx
'use client';

import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Divider, TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

const locations = ['New York', 'London', 'Sydney', 'Remote']; // Customize as needed

export default function SearchBar() {
  const [keywords, setKeywords] = useState('');
  const [location, setLocation] = useState<string | null>(null);

  const handleSearch = () => {
    console.log('Searching:', { keywords, location });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        bgcolor: 'white',
        borderRadius: 1,
        boxShadow: 1,
        overflow: 'hidden',
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
        sx={{
          flex: 1,
        }}
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
        sx={{
          flex: 1,
        }}
      />

      {/* Divider before button */}
      <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

      {/* Search Button */}
      <Button
        onClick={handleSearch}
        sx={{
          height: '100%',
          flexBasis: '150px',
          borderRadius: 0,
          bgcolor: 'black',
          color: 'white',
          px: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&:hover': { bgcolor: '#333' },
        }}
      >
        Search Jobs&nbsp;<SearchIcon fontSize="small" />
      </Button>
    </Box>
  );
}
