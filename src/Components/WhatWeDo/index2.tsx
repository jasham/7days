"use client";
import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Heading from "../Heading/Heading";
import { Button } from "../Button/Button";

const WhatWeDo: React.FC = () => {
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

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" color="#ffffff">
            Permanent recruitment isn&apos;t about CVs — it&apos;s about
            capability.
          </Typography>

          <Typography
            variant="h6"
            color="#ffffff"
            textTransform="capitalize"
            sx={{ mt: 3, maxWidth: 500 }}
          >
            At Henton Consulting, permanent recruitment is about more than
            filling vacancies. It&apos;s about building capability — securing
            the professionals and leaders who will shape your
            organization&apos;s future.
          </Typography>

          <Typography
            variant="h6"
            color="#ffffff"
            textTransform="capitalize"
            sx={{ mt: 3, maxWidth: 500 }}
          >
            Our approach ensures every permanent hire strengthens your team,
            culture, and competitive position.
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <Box sx={{ pl: { xs: 0, md: 4 } }}>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                color: "white",
                fontWeight: 600,
                mb: 2,
                fontSize: "1.5rem",
              }}
            >
              We recruit for:
            </Typography>

            <Typography
              variant="h6"
              color="#ffffff"
              textTransform="capitalize"
              sx={{ mt: 3, maxWidth: 500 }}
            >
              Our expertise covers a wide range of skill sets and leadership
              levels:
            </Typography>

            <Box component="ul" sx={{ color: "white", pl: 2 }}>
              <Typography
                component="li"
                variant="h6"
                textTransform={"capitalize"}
                sx={{ mb: 1, listStyleType: "disc" }}
              >
                Specialist technical roles
              </Typography>
              <Typography
                component="li"
                variant="h6"
                textTransform={"capitalize"}
                sx={{ mb: 1, listStyleType: "disc" }}
              >
                Commercial and operational leadership
              </Typography>
              <Typography
                component="li"
                variant="h6"
                textTransform={"capitalize"}
                sx={{ mb: 1, listStyleType: "disc" }}
              >
                Middle management to C-suite executives
              </Typography>
              <Typography
                component="li"
                variant="h6"
                textTransform={"capitalize"}
                sx={{ mb: 1, listStyleType: "disc" }}
              >
                Confidential and strategic appointments
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Button
          variantStyle="main"
          buttonColor={"#ffffff"}
          buttonBgColor="transparent"
          buttonBorderColor={"#ffffff"}
          onClick={() => {
            alert("begining");
          }}
        >
          Start the conversation
        </Button>
      </Box>
    </Box>
  );
};

export default WhatWeDo;
