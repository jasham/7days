import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Heading from "../Heading/Heading";
import CustomButton from "../Button";

const WhatWeDo: React.FC = () => {
  return (
    <Box
      px={10}
      py={10}
      sx={{ background: "linear-gradient(0deg, #FFFFFF 0%, #132D46 46.76%)" }}
    >
      <Heading
        text="WHAT WE DO"
        textColor="#ffffff"
        dividerColor="#ffffff"
        dividerHeight="1px"
      />

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              color: "white",
              fontWeight: 600,
              fontSize: { xs: "2rem", md: "2.5rem" },
              lineHeight: 1.2,
              mb: 3,
            }}
          >
            Permanent recruitment isn&apos;t about CVs — it&apos;s about
            capability.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "white",
              mb: 2,
              fontSize: "1rem",
              lineHeight: 1.6,
            }}
          >
            At Henton Consulting, permanent recruitment is about more than
            filling vacancies. It&apos;s about building capability — securing
            the professionals and leaders who will shape your
            organization&apos;s future.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "white",
              mb: 4,
              fontSize: "1rem",
              lineHeight: 1.6,
            }}
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
              variant="body1"
              sx={{
                color: "white",
                mb: 2,
                fontSize: "1rem",
              }}
            >
              Our expertise covers a wide range of skill sets and leadership
              levels:
            </Typography>

            <Box component="ul" sx={{ color: "white", pl: 2 }}>
              <Typography
                component="li"
                variant="body1"
                sx={{ mb: 1, listStyleType: "disc" }}
              >
                Specialist technical roles
              </Typography>
              <Typography
                component="li"
                variant="body1"
                sx={{ mb: 1, listStyleType: "disc" }}
              >
                Commercial and operational leadership
              </Typography>
              <Typography
                component="li"
                variant="body1"
                sx={{ mb: 1, listStyleType: "disc" }}
              >
                Middle management to C-suite executives
              </Typography>
              <Typography
                component="li"
                variant="body1"
                sx={{ mb: 1, listStyleType: "disc" }}
              >
                Confidential and strategic appointments
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <CustomButton
          text=" Start the conversation"
          onClick={() => alert("beginning")}
          variant="outlined"
          sx={{ color: "#fff", borderColor: "#fff" }}
        />
      </Box>
    </Box>
  );
};

export default WhatWeDo;
