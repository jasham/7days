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

const faqData = [
  "What Makes Your Recruitment Different From Other Agencies?",
  "How Do You Assess Long-Term Fit?",
  "Do You Offer National Or International Coverage?",
  "What If I Need More Than Just Recruitment?",
];

const FaqSection: React.FC = () => {
  return (
    <Box px={4} py={8} maxWidth="lg" mx="auto">
      <Heading
        text="FAQ"
        textColor="#132D46"
        dividerColor="#132D46"
        dividerHeight="1px"
        marginBottom="16px"
      />
      {faqData.map((question, index) => (
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
              variant="h6"
              sx={{ borderBottom: "1px solid #132D46", width: "100%" }}
            >
              {question}
            </Typography>
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
