"use client";

import React from "react";
import { Box, Grid } from "@mui/material";
import HeroSection from "@/Components/Hero/Hero";
import JobDetails from "@/Components/Job/JobDetails";
import ApplicationForm from "@/Components/Job/ApplicationForm";

import { jobAppHero, jobDetailsData } from "@/data/jobApplicationData";

export default function JobApplicationPage() {
  return (
    <>
      <HeroSection {...jobAppHero} />

      <Box
        sx={{
          px: { xs: 2, md: 10 },
          py: { xs: 4, md: 8 },
          background: "linear-gradient(0deg, #EEEEF2 0%, #132D46 46.76%)",
          color: "white",
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <JobDetails {...jobDetailsData} />
          </Grid>
          <Grid item xs={12} md={4}>
            <ApplicationForm />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}