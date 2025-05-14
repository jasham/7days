"use client";

import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Heading from "../Heading/Heading";

const SpecialistExpertise: React.FC = () => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const sectors = [
    "Property & Development",
    "Construction",
    "Engineering",
    "Facilities Management",
    "Resources",
    "Renewables",
    "Not For Profit",
    "Corporate",
    "Government",
  ];

  const handleMouseEnter = (sector: string) => {
    setHoveredButton(sector);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  return (
    <>
      <Box
        sx={{
          background: "#ffffff",
          px: { xs: 2, md: 10 },
          py: { xs: 4, md: 8 },
        }}
      >
        <Heading
          text="SPECIALIST EXPERTISE"
          textColor="#132D46"
          dividerColor="#132D46"
          dividerHeight="1px"
        />

        <Box sx={{ textAlign: "center", mb: 6 }}></Box>
        <Typography
          variant="h3"
          sx={{
            color: "#132D46",
            textAlign: "center",
            fontWeight: 600,
            mb: 4,
          }}
        >
          Sector-Specific Recruitment. Permanent Impact.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#132D46",
            fontSize: "1.1rem",
            textAlign: "center",
          }}
        >
          Deep industry knowledge, precise candidate alignment - built for
          long-term success in your sector.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 4,
          mb: 4,
          width: "70%",
          flexWrap: "wrap",
          mx: "auto",
        }}
      >
        {sectors.map((sector) => (
          <Box key={sector}>
            <Button
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              onMouseEnter={() => handleMouseEnter(sector)}
              onMouseLeave={handleMouseLeave}
              sx={{
                color: hoveredButton === sector ? "white" : "#132D46",
                borderColor: "#132D46",
                backgroundColor:
                  hoveredButton === sector ? "#132D46" : "transparent",
                "&:hover": {
                  backgroundColor: "#132D46",
                  color: "white",
                  borderColor: "#132D46",
                },
                textTransform: "none",
                px: 2,
                py: 1,
                whiteSpace: "nowrap",
              }}
            >
              {sector}
            </Button>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default SpecialistExpertise;
