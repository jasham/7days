"use client";
import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import PartnerCard from "../Card/index";
import Heading from "../Heading/Heading";
import { Button } from "../Button/Button";

interface CardItem {
  score: string;
  title: string;
  description?: string;
}

interface CardProps {
  cardDetails?: CardItem[];
}

interface ResultProps {
  backgroundColor?: string;
  backgroundImage?: string;
  headingText?: string;
  subheadingText?: string;
  footerText?: string;
  buttonText?: string;
  cardProps?: CardProps;
  onButtonClick?: () => void;
  topHeading: string;
  background: string;
  bottomHeading: string;
}

const ResultsSection: React.FC<ResultProps> = ({
  backgroundColor = "#132D46",
  backgroundImage,
  headingText = "Results",
  subheadingText = "Measured by Results. Chosen for Impact.",
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
        <Typography variant="h2">{subheadingText}</Typography>

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
                <Divider
                  orientation={
                    window.innerWidth < 960 ? "horizontal" : "vertical"
                  }
                  flexItem
                  sx={{
                    backgroundColor: "#ffffff",
                    borderColor: "#ffffff",
                    borderWidth: "1px",
                    width: { xs: "60%", md: "1px" },
                    height: { xs: "1px", md: "100%" },
                    my: { xs: 2, md: 0 },
                    mx: { xs: "auto", md: 3 },
                  }}
                />
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
