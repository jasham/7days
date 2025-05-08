// prettier-ignore
'use client';
import { Box, Typography } from "@mui/material";
// import { useState } from "react";
import CustomButton from "../Button/index";
import SearchBar from "../SearchBar";

export default function JobSearch() {
  //   const [keywords, setKeywords] = useState("");
  //   const [location, setLocation] = useState("");

  return (
    <Box
      sx={{
        px: { xs: 2, md: 10 },
        py: { xs: 4, md: 8 },
        background: "linear-gradient(0deg, #FFFFFF 0%, #132D46 46.76%)",
        color: "white",
      }}
    >
      {/* Search Bar */}
      {/* <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={4}>
          <CustomInput
            placeholder="Keywords"
            value={keywords}
            onChange={setKeywords}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CustomInput
            placeholder="Location"
            value={location}
            onChange={setLocation}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CustomButton
            label="Search Jobs"
            onClick={() => console.log({ keywords, location })}
          />
        </Grid>
      </Grid> */}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          flexBasis={"30%"}
        >
          Search Jobs. <br />
          Build Your Future. <br />
        </Typography>
        <Box flexBasis={"70%"}>
          <SearchBar />
        </Box>
      </Box>
      {/* Headline */}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box mt={6} flexBasis={"50%"}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Built on Expertise. <br />
            Driven by Results. <br />
            Trusted by Industry.
          </Typography>
        </Box>
        <Box flexBasis={"50%"}>
          {/* Description */}
          <Box mt={3} maxWidth="md">
            <Typography variant="body1" paragraph>
              Henton Consulting is a specialist recruitment and advisory firm
              helping businesses across Property, Construction, Engineering,
              Resources, Corporate, Government and Not-for-Profit sectors build
              stronger teams, smarter structures, and sustained growth.
            </Typography>
            <Typography variant="body1" paragraph>
              With over 20 years’ experience, we deliver permanent recruitment,
              executive search, strategic workforce consulting, and business
              development services tailored to your industry’s demands.
            </Typography>
            <Typography variant="body1">
              Organisations trust us because we combine market expertise with a
              results-driven approach — finding the right people, designing the
              right strategies, and opening the right opportunities to move
              businesses forward.
            </Typography>
          </Box>

          {/* CTA */}
          <Box mt={4}>
            <CustomButton
              text="Start the Conversation"
              onClick={() => alert("Starting...")}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
