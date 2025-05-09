// prettier-ignore
'use client';
import AddIcon from "@mui/icons-material/Add";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";

const faqData = [
  "What Makes Your Recruitment Different From Other Agencies?",
  "How Do You Assess Long-Term Fit?",
  "Do You Offer National Or International Coverage?",
  "What If I Need More Than Just Recruitment?",
];

const FaqSection: React.FC = () => {
  return (
    <Box px={4} py={8} maxWidth="lg" mx="auto">
      <Typography variant="overline" color="textSecondary">
        FAQ
      </Typography>
      <Divider sx={{ mb: 4 }} />
      {faqData.map((question, index) => (
        <Accordion
          key={index}
          elevation={0}
          sx={{ borderBottom: "1px solid #ccc" }}
        >
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls={`faq-${index}`}
          >
            <Typography>{question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="textSecondary">
              {/* Placeholder for answer text */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex.
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FaqSection;
