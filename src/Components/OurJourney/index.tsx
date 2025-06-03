"use client";
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ImageCard from "../ImageCard";
import Heading from "../Heading/Heading";
import { Button } from "../Button/Button";
import { OurJourneyProps } from "@/types/aboutUsInterface";

const OurJourney: React.FC<OurJourneyProps> = ({
  headingText,
  heading,
  introText,
  whoSubHeading,
  whoHeading,
  whoDescription,
  services,
}) => {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 10 },
        py: { xs: 4, md: 8 },
        background: "#D4E1EF66",
      }}
    >
      <Heading text={headingText} textColor="#132D46" dividerColor="#132D46" />
      <Grid container spacing={4} alignItems="flex-end">
        <Grid item xs={12} md={6}>
          {heading && (
            <Typography variant="h2" color="#132D46">
              {heading}
            </Typography>
          )}
          {introText && (
            <Typography
              variant="h6"
              
              color="#132D46"
              mt={4}
              sx={{ whiteSpace: "pre-line" }}
            >
              {introText}
            </Typography>
          )}
        </Grid>

        <Grid item xs={12} md={heading ? 6 : 12}>
          {whoHeading && (
            <Typography
              variant="body1"
              gutterBottom
              color="#132D46"
            >
              {whoHeading}
            </Typography>
          )}
          {whoSubHeading && (
            <Typography
              variant="h6"
              gutterBottom
              color="#132D46"
              
              sx={{ whiteSpace: "pre-line" , fontWeight: 600 }}
            >
              {whoSubHeading}
            </Typography>
          )}
          {whoDescription && (
            <Typography variant="body1" color="#132D46">
              {whoDescription}
            </Typography>
          )}
        </Grid>
      </Grid>

      <Grid container spacing={4} justifyContent="center" mt={4}>
        {services.map((service, idx) => (
          <ImageCard
            key={idx}
            service={service}
            background="linear-gradient(180deg, rgba(19, 45, 70, 0.48) 0%, rgba(19, 45, 70, 0.6) 97.16%)"
          />
        ))}
      </Grid>
    </Box>
  );
};

export default OurJourney;
