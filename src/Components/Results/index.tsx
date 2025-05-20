"use client";
import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import PartnerCard from "../Card/index";
import Heading from "../Heading/Heading";
import { Button } from "../Button/Button";
import { ResultSectionProps } from "@/types/homeInterfaces";

const ResultsSection: React.FC<ResultSectionProps> = ({
  backgroundColor = "#132D46",
  backgroundImage,
  headingText = "Results",
  topHeading,
  footerText = "When expertise, trust, and speed come together, growth isn't a goal — it's the outcome.",
  buttonText = "Ready to Build What's Next?",
  cardProps,
  onButtonClick = () => alert("clicked"),
}) => {
  const isImage = Boolean(backgroundImage);
  const cards = cardProps?.cardDetails;

  return (
    <Box sx={{ color: "#132D46", px: { xs: 2, md: 10 }, py: { xs: 4, md: 8 } }}>
      <Heading
        text={headingText}
        textColor="#132D46"
        dividerColor="#132D46"
        dividerHeight="1px"
      />

      <Box
        sx={{
          position: "relative",
          borderRadius: "20px",
          overflow: "hidden",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          px: { xs: 3, md: 4 },
          py: { xs: 6, md: 8 },
          backgroundColor: isImage ? "transparent" : backgroundColor,
          backgroundImage: isImage
            ? `linear-gradient(180deg, rgba(34, 139, 34, 0.3), rgba(34, 139, 34, 0.3)), url(${backgroundImage})`
            : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#ffffff",
        }}
      >
        {/* Subheading */}
        <Typography variant="h2">{topHeading}</Typography>

        <Box
          sx={{
            position: "relative",
            borderRadius: "20px",
            overflow: "hidden",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            height: { xs: "auto", md: 300 },
            gap: { xs: 4, md: 0 },
          }}
        >
          {cards?.map((card, index) => (
            <React.Fragment key={index}>
              <Box
                sx={{
                  width: { xs: "100%", md: "30%" },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <PartnerCard
                  heading={card.score}
                  title={card.title}
                  description={card.description ?? ""}
                  color="#ffffff"
                  headingVariant="h1"
                  titleVariant="h6"
                  descriptionVariant="body1"
                />
              </Box>

              {/* Divider only between items */}
              {index < cards?.length - 1 && (
                <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: 'center',
                }}
              >
                {/* on mobile show a horizontal divider */}
                <Divider
                  orientation="horizontal"
                  flexItem
                  sx={{
                    display: { xs: 'block', md: 'none' },
                    backgroundColor: '#fff',
                    borderWidth: '1px',
                    width: '13rem',
                    height: '1px',
                    my: 2,
                    mx: 'auto',
                  }}
                />
              
                {/* on desktop show a vertical divider */}
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    display: { xs: 'none', md: 'block' },
                    backgroundColor: '#fff',
                    borderWidth: '1px',
                    width: '1px',
                    height: '13rem',
                    mx: 3,
                  }}
                />
              </Box>
              )}
            </React.Fragment>
          ))}
        </Box>

        {/* Footer */}
        <Typography variant="h4" width={"70%"}>
          {footerText}
        </Typography>

        {/* Button */}
        <Button
          variantStyle="main"
          buttonColor="#ffffff"
          buttonBgColor="transparent"
          buttonBorderColor="#ffffff"
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default ResultsSection;
