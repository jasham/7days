"use client";

import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import PartnerCard from "../Card/index";
import Heading from "../Heading/Heading";
import { Button } from "../Button/Button";

export interface CardData {
  title: string;
  description: string;
  icon: string;
}

interface Experts {
  headingText?: string;
  headingColor?: string;
  dividerColor?: string;
  dividerHeight?: string;
  title: string;
  subTitle: string;
  cards: CardData[];
  buttonText: string;
  buttonColor: string;
}

const WhyPartnerSection: React.FC<Experts> = ({
  headingText = "WORK WITH THE EXPERTS",
  headingColor = "#132D46",
  dividerColor = "#132D46",
  dividerHeight = "1px",
  title,
  subTitle,
  cards,
  buttonText,
  buttonColor,
}: Experts) => {
  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: { xs: 4, md: 8 } }}>
      <Heading
        text={headingText}
        textColor={headingColor}
        dividerColor={dividerColor}
        dividerHeight={dividerHeight}
      />

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 8,
          mb: 6,
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h3" color={headingColor} width="48%">
          {title}
        </Typography>
        <Typography
          variant="h4"
          fontWeight={500}
          color={headingColor}
          width="52%"
        >
          {subTitle}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "stretch", // force children to same height
          gap: 2,
          mb: 6,
        }}
      >
        {cards.map((card, index) => (
          <Box key={index} sx={{ display: "flex", alignItems: "stretch" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <PartnerCard
                icon={card.icon}
                title={card.title}
                description={card.description}
                color={"#014225"}
              />
            </Box>

            {index < cards.length - 1 && (
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  backgroundColor: "##AABBE1",
                  width: "1px",
                  mx: 2,
                }}
              />
            )}
          </Box>
        ))}
      </Box>

      <Box textAlign="center" mt={6}>
        <Button
          variantStyle="main"
          buttonColor={buttonColor}
          buttonBgColor="transparent"
          buttonBorderColor={buttonColor}
          onClick={() => {
            alert("begining");
          }}
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default WhyPartnerSection;
