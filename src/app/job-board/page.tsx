"use client";

import React, { useMemo } from "react";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import HeroSection from "@/Components/Hero/Hero";
import SearchBar from "@/Components/SearchBar";
import FilterSidebar from "@/Components/Job/FilterSidebar";
import { JobList } from "@/Components/Job/JobList";
import { jobBoardData } from "@/data/jobBoardData";

export default function JobBoardPage() {
  const { hero, jobs, categoryOptions, locationOptions, workTypeOptions } = jobBoardData;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // these never change at runtime, but memoizing guards against accidental re-renders
  const filters = useMemo(
    () => ({ categoryOptions, locationOptions, workTypeOptions }),
    [categoryOptions, locationOptions, workTypeOptions]
  );

  return (
    <>
      <HeroSection {...hero} />

      <Box
        sx={{
          px: { xs: 2, md: 10 },
          py: { xs: 4, md: 8 },
          background: "linear-gradient(0deg, #EEEEF2 0%, #132D46 46.76%)",
          color: "#fff",
        }}
      >
          <Box display="flex" flexDirection={{ xs: "column", md: "row" }} alignItems="center" mb={6} gap={4}>
            <Typography variant="h4" fontWeight={700} flex="1">
              Search Jobs. Build Your Future.
            </Typography>
            <Box flex="2">
              <SearchBar />
            </Box>
          </Box>

          <Grid container spacing={3}>
            {!isMobile && (
              <Grid item xs={12} md={3}>
                <FilterSidebar {...filters} />
              </Grid>
            )}
            <Grid item xs={12} md={isMobile ? 12 : 9}>
              <JobList jobs={jobs} />
            </Grid>
          </Grid>
      </Box>
    </>
  );
}
