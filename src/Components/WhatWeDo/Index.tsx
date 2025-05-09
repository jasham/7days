// prettier-ignore
'use client';
import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import CustomButton from "../Button";
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

const WhatWeDo: React.FC = () => {
  return (
    <Box
      px={10}
      py={10}
      sx={{ background: "linear-gradient(0deg, #FFFFFF 0%, #132D46 46.76%)" }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="overline"
          color="white"
          sx={{ display: "block", mb: 2 }}
        >
          WHAT WE DO
        </Typography>
        <Divider sx={{ mb: 4, backgroundColor: "white" }} />
        <Box
          sx={{ display: "flex", gap: "20px", justifyContent: "space-between" }}
        >
          <Box>
            <Typography
              variant="h4"
              fontWeight="bold"
              color="white"
              gutterBottom
            >
              We help businesses <br />
              recruit with purpose — <br />
              aligning people <br />
              strategy to commercial <br />
              outcomes.
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="body1"
              color="white"
              sx={{ mt: 3, maxWidth: 500 }}
            >
              At Hinton, recruitment isn't transactional. It’s strategic. Every
              hire should improve capability, deliver outcomes, and move your
              business forward.
            </Typography>

            <Typography variant="h6" fontWeight="bold" color="white" mt={5}>
              Who We Recruit
            </Typography>
            <Typography variant="body2" color="white" sx={{ mb: 4 }}>
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
                width: "360px",
                borderRadius: "16px",
                padding: "24px",
                gap: "24px",
                textAlign: "center",
              }}
              key={index}
            >
              <Paper elevation={2} sx={{ p: 3, height: "100%" }}>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  gutterBottom
                  color="#014225"
                >
                  {role.title}
                </Typography>
                <Typography variant="body2" sx={{ color: " #132D46" }}>
                  {role.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <CustomButton
          text=" Start the conversation"
          onClick={() => alert("beginning")}
          variant="outlined"
          sx={{ color: "#fff", borderColor: "#fff" }}
        />
      </Container>
    </Box>
  );
};

export default WhatWeDo;
