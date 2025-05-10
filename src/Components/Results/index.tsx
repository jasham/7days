// export default ResultsSection;

// prettier-ignore
'use client';
import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import CustomButton from "../Button";
import PartnerCard from "../Card/index";
import Heading from "../Heading/Heading";

interface CardItem {
  score: string;
  title: string;
  description?: string;
}

interface CardProps {
  cardDetails: CardItem[];
}

interface ResultProps {
  backgroundColor?: string; // for solid background color
  backgroundImage?: string; // for image background
  headingText?: string;
  subheadingText?: string;
  footerText?: string;
  buttonText?: string;
  cardProps?: CardProps;
  onButtonClick?: () => void;
}

const ResultsSection: React.FC<ResultProps> = ({
  backgroundColor = "#014225",
  backgroundImage,
  headingText = "Results",
  subheadingText = "Measured by Results. Chosen for Impact.",
  footerText = "When expertise, trust, and speed come together, growth isn’t a goal — it’s the outcome.",
  buttonText = "Ready to Build What’s Next?",
  cardProps,
  onButtonClick = () => alert("clicked"),
}) => {
  const isImage = Boolean(backgroundImage);
  console.log(cardProps, "cardprops");
  return (
    <Box px={4} py={8} maxWidth="lg" mx="auto" sx={{ color: "#132D46" }}>
      <Heading
        text={headingText}
        textColor="#132D46"
        dividerColor="#132D46"
        dividerHeight="1px"
      />

      <Box
        textAlign={"center"}
        sx={{
          position: "relative",
          borderRadius: "20px",
          overflow: "hidden",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          px: { xs: 3, md: 8 },
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
        <Typography variant="h4" fontWeight={600}>
          {subheadingText}
        </Typography>

        {/* Cards */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 0 },
            height: { md: "13rem" },
          }}
        >
          {cardProps?.cardDetails.map((card, index) => (
            <Box
              key={index}
              sx={{
                width: "30%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: 4, md: 0 },
              }}
            >
              <PartnerCard
                heading={card.score}
                title={card.title}
                description={card.description ?? ""}
                color="#ffffff"
              />
              {index < cardProps.cardDetails.length - 1 && (
                <Divider
                  orientation={
                    typeof window !== "undefined" && window.innerWidth < 768
                      ? "horizontal"
                      : "vertical"
                  }
                  flexItem
                  sx={{
                    backgroundColor: "#ffffff",
                    borderWidth: "1px",
                    borderColor: "#ffffff",
                    width: { xs: "60%", md: "1px" },
                    height: { xs: "1px", md: "100%" },
                    my: { xs: 2, md: 0 },
                    mx: { xs: "auto", md: 3 },
                    borderRadius: "5px",
                  }}
                />
              )}
            </Box>
          ))}
        </Box>

        {/* Footer */}
        <Typography variant="h6">{footerText}</Typography>

        {/* Button */}
        <CustomButton
          text={buttonText}
          onClick={onButtonClick}
          variant="outlined"
          sx={{
            color: "#ffffff",
            borderColor: "#ffffff",
          }}
        />
      </Box>
    </Box>
  );
};

export default ResultsSection;
