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
      <Box sx={{ display: "flex", justifyContent: "space-between" , gap:8 , width: "100%" }}>
        <Typography variant="h4" fontWeight={700} width={"25%"}>
          Search Jobs. Build Your Future.
        </Typography>
        <Box width={"75%"}>
          <SearchBar />
        </Box>
      </Box>
      {/* Headline */}
      <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" , mt: 6 }}>
        <Box sx={{width: "30%"}}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
          Built on Expertise. Driven by Results. Trusted by Industry.
          </Typography>
        </Box>
        <Box sx={{width: "45%"}}>
          {/* Description */}
          <Box maxWidth="md" sx={{display: "flex", flexDirection: "column", gap: 3}}>
            <Typography variant="h5">
              Henton Consulting is a specialist recruitment and advisory firm
              helping businesses across Property, Construction, Engineering,
              Resources, Corporate, Government and Not-for-Profit sectors build
              stronger teams, smarter structures, and sustained growth.
            </Typography>
            <Typography variant="body1">
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
