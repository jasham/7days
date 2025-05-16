// prettier-ignore
'use client';
import AddIcon from "@mui/icons-material/Add";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React from "react";
import Heading from "../Heading/Heading";
import { FaqSectionProps } from "@/types/recruitmentInterfaces";

export default function FaqSection({ faqData }: FaqSectionProps) {

  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: { xs: 4, md: 8 }}}>
      <Heading
        text="FAQ"
        textColor="#132D46"
        dividerColor="#132D46"
        dividerHeight="1px"
        marginBottom="16px"
      />
      {faqData.map((data, index) => (
        <Accordion
          key={index}
          elevation={0}
          sx={{
            "&:before": {
              display: "none", // Removes the default border bottom or divider
            },
          }}
        >
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls={`faq-${index}`}
          >
            <Typography
              variant="h5"
              color="#132D46"
              fontWeight={500}
            >
              {data.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="textSecondary">
              {/* Placeholder for answer text */}
              {data.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};
