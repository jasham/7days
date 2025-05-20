"use client";

import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import TestimonialCard from "../TestimonialCard/index";
import Heading from "../Heading/Heading";
import { TestimonialProps } from "@/types/homeInterfaces";

export default function TestimonialSection({
  heading,
  title,
  description,
  quote,
  detail,
  author,
  company,
}: TestimonialProps) {
  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #EEEEF2 0%, #132D46 50.76%)",
        position: "relative",
        px: { xs: 2, md: 10 },
        py: { xs: 4, md: 8 },
        color: "#ffffff",
      }}
    >
      <Heading
        text={heading}
        dividerColor="#ffffff"
        dividerHeight="1px"
        marginBottom="16px"
      />

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 4, md: 8 }}
        alignItems="flex-start"
        sx={{ width: "100%" }}
      >
        <Box sx={{ width: { xs: "100%", md: "40%" } }}>
          <Typography variant="h2" color="#ffffff" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h5" color="#ffffff">
            {description}
          </Typography>
        </Box>

        <Box sx={{ width: { xs: "100%", md: "60%" } }}>
          <TestimonialCard
            quote={quote}
            detail={detail}
            author={author}
            company={company}
          />
        </Box>
      </Stack>
    </Box>
  );
}
