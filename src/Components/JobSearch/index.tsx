// src/Components/JobSearch.tsx
'use client';

import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import SearchBar from '../SearchBar';
import { JobSearchProps } from '@/types/homeInterfaces';
import { Button } from '../Button/Button';

export default function JobSearch({
  title,
  headline,
  description,
  buttonText,
}: JobSearchProps) {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 10 },
        py: { xs: 4, md: 8 },
        background: 'linear-gradient(0deg, #FFFFFF 0%, #132D46 46.76%)',
        color: 'white',
      }}
    >
      {/* Search Section */}
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={2}
        alignItems="center"
      >
        <Typography
          variant="h4"
          fontWeight={700}
          sx={{ width: { xs: '100%', md: '25%' }, textAlign: { xs: 'center', md: 'left' } }}
        >
          {title}
        </Typography>
        <Box sx={{ width: { xs: '100%', md: '75%' } }}>
          <SearchBar />
        </Box>
      </Stack>

      {/* Headline & Description Section */}
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={2}
        alignItems="flex-start"
        sx={{ mt: 6 }}
      >
        <Box sx={{ width: { xs: '100%', md: '30%' } }}>
          <Typography
            variant="h3"
            fontWeight={700}
            sx={{ textAlign: { xs: 'center', md: 'left' } }}
          >
            {headline}
          </Typography>
        </Box>
        <Box sx={{ width: { xs: '100%', md: '45%' } }}>
          {description.map((desc, idx) => (
            <Typography
              key={idx}
              variant={idx === 0 ? 'h5' : 'body1'}
              mb={2}
              sx={{ textAlign: { xs: 'center', md: 'left' } }}
            >
              {desc}
            </Typography>
          ))}
          <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <Button
              variantStyle="main"
              buttonColor="#FFFFFF"
              buttonBgColor="transparent"
              buttonBorderColor="#FFFFFF"
              onClick={() => {
                alert('Starting');
              }}
            >
              {buttonText}
            </Button>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
