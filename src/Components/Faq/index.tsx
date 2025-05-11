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
interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  faqData: FaqItem[];
}

const FaqSection: React.FC<FaqProps> = ({ faqData }) => {
  console.log(faqData, "faqData");
  return (
    <Box px={4} py={8} maxWidth="lg" mx="auto">
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
              variant="h6"
              sx={{ borderBottom: "1px solid #132D46", width: "100%" }}
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

export default FaqSection;
