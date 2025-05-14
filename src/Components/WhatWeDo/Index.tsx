"use client";

import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Heading from "../Heading/Heading";
import { Button } from "../Button/Button";

interface WhatWeDoProps {
  cards?: boolean;
  permanentRecruitment?: boolean;
  heading?: string;
  description?: string;
  subHeading?: string;
  description2?: string;
}

const roleCards = [
  {
    title: "Technical Roles",
    description: "Engineering, construction management, project delivery",
  },
  {
    title: "Commercial and Leadership Roles",
    description: "Finance, strategy, operations, general management",
  },
  {
    title: "Business-Critical and Confidential Roles",
    description: "Executive search, senior appointments, succession placements",
  },
];

const WhatWeDo: React.FC<WhatWeDoProps> = ({
  cards = true,
  permanentRecruitment = false,
  heading,
  description,
  subHeading,
  description2,
}) => {
  return (
    <Box
      sx={{
        background: "linear-gradient(0deg, #FFFFFF 0%, #132D46 46.76%)",
        px: { xs: 2, md: 10 },
        py: { xs: 4, md: 8 },
      }}
    >
      <Heading
        text="WHAT WE DO"
        textColor="#ffffff"
        dividerColor="#ffffff"
        dividerHeight="1px"
      />
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          justifyContent: "space-between",
          width: "100%",
          flexWrap: "wrap", // <- optional: helps on small screens
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "40%" } }}>
          <Typography variant="h3" color="#ffffff" gutterBottom>
            We help businesses recruit with purpose — aligning people strategy
            to commercial outcomes.
          </Typography>
        </Box>

        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <Typography
            variant="h6"
            color="#ffffff"
            textTransform="capitalize"
            sx={{ mt: 3, maxWidth: 500 }}
          >
            At Hinton, recruitment isn&apos;t transactional. It&apos;s
            strategic. Every hire should improve capability, deliver outcomes,
            and move your business forward.
          </Typography>

          <Typography variant="h3" color="#ffffff" my={4}>
            Who We Recruit
          </Typography>
          <Typography
            variant="h6"
            color="#ffffff"
            textTransform="capitalize"
            sx={{ mb: 4 }}
          >
            Our expertise covers a wide range of skill sets and leadership
            levels.
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={3} mb={4}>
        {roleCards.map((role, index) => (
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              borderRadius: "24px",
              padding: "24px",
              textAlign: "center",
            }}
            key={index}
          >
            <Paper
              elevation={2}
              sx={{
                p: 4,
                height: "100%",
                borderRadius: "16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h4"
                fontWeight={600}
                gutterBottom
                color="#014225"
              >
                {role.title}
              </Typography>
              <Typography
                variant="h6"
                textTransform="capitalize"
                color="#132D46"
              >
                {role.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variantStyle="main"
          buttonColor="#132D46"
          buttonBgColor="transparent"
          buttonBorderColor="#132D46"
          onClick={() => alert("beginning")}
        >
          Start the conversation
        </Button>
      </Box>
    </Box>
  );
};

export default WhatWeDo;
