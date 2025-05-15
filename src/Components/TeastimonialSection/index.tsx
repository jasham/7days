'use client';
import { Box, Typography } from "@mui/material";
import TestimonialCard from "../TestimonialCard/index";
import Heading from "../Heading/Heading";
import { TestimonialProps } from "@/types/homeInterfaces";

export default function TestimonialSection({ heading, title, description, quote, detail, author, company }: TestimonialProps) {
  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: { xs: 4, md: 8 }, background: "linear-gradient(180deg, #EEEEF2 0%, #132D46 50.76%)", color: "white" }}>
      <Heading text={heading} dividerColor="#ffffff" />
      <Box sx={{ display: "flex", gap: 4 }}>
        <Box sx={{ width: "40%" }}>
          <Typography variant="h2">{title}</Typography>
          <Typography variant="h5">{description}</Typography>
        </Box>
        <Box sx={{ width: "60%" }}>
          <TestimonialCard quote={quote} detail={detail} author={author} company={company} />
        </Box>
      </Box>
    </Box>
  );
}

