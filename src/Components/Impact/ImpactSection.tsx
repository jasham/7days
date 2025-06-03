import React from "react";
import { Box, Typography, Paper, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Heading from "../Heading/Heading";
import { Button } from "../Button/Button";
import { ImpactSectionProps } from "@/types/caseStudiesInterface";

const ImpactSection: React.FC<ImpactSectionProps> = ({
  headingText,
  headingDividerColor = "#ffffff",
  headingDividerHeight = "1px",
  headingMarginBottom = "16px",
  sectionTitle,
  caseStudies,
  buttonLabel,
  onButtonClick,
  buttonStyles = {},
}) => {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 10 },
        py: { xs: 4, md: 8 },
      }}
    >
      <Heading
        text={headingText}
        dividerColor={headingDividerColor}
        dividerHeight={headingDividerHeight}
        marginBottom={headingMarginBottom}
      />
      <Typography variant="h3" color="#132D46">
        {sectionTitle}
      </Typography>

      <Stack spacing={4} mt={4}>
        {caseStudies.map((caseStudy, index) => (
          <Paper
            key={index}
            elevation={0}
            sx={{
              backgroundColor: "#f6f4ef",
              p: 3,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Box>
              <Typography variant="h3" fontWeight={400} mb={3}>
                {caseStudy.title}
              </Typography>
              <Typography variant="body2">{caseStudy.description}</Typography>
            </Box>
            <ArrowForwardIcon fontSize="large" sx={{ color: "#132D46" }} />
          </Paper>
        ))}
      </Stack>

      <Box textAlign="center" mt={6}>
        <Button
          variantStyle="main"
          buttonColor={buttonStyles.buttonColor || "#132D46"}
          buttonBgColor={buttonStyles.buttonBgColor || "transparent"}
          buttonBorderColor={buttonStyles.buttonBorderColor || "#132D46"}
          onClick={onButtonClick}
        >
          {buttonLabel}
        </Button>
      </Box>
    </Box>
  );
};

export default ImpactSection;
