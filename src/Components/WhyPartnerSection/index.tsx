"use client";
import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import PartnerCard from "../Card/index";
import Heading from "../Heading/Heading";
import { Button } from "../Button/Button";
import { WhyPartnerProps } from "@/types/homeInterfaces";

const WhyPartnerSection: React.FC<WhyPartnerProps> = ({
  headingText = "WORK WITH THE EXPERTS",
  headingColor = "#132D46",
  dividerColor = "#132D46",
  dividerHeight = "1px",
  title,
  subTitle,
  cards,
  buttonText,
  buttonColor,
  isCentered = false,
}: WhyPartnerProps) => {
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
          gap: { xs: 2, md: 8 },
          mb: 6,
          justifyContent: isCentered ? "center" : "space-between",
        }}
      >
        <Typography variant="h3" color={headingColor}>
          {title}
        </Typography>
        {subTitle && (
          <Typography
            variant="h4"
            fontWeight={500}
            color={headingColor}
            sx={{ width: { xs: "100%", md: "52%" } }}
          >
            {subTitle}
          </Typography>
        )}
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
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "center",
                }}
              >
                {/* on mobile show a horizontal divider */}
                <Divider
                  orientation="horizontal"
                  flexItem
                  sx={{
                    display: { xs: "block", md: "none" },
                    backgroundColor: "#AABBE1",
                    borderWidth: "1px",
                    width: "60%",
                    height: "1px",
                    my: 2,
                    mx: "auto",
                  }}
                />

                {/* on desktop show a vertical divider */}
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    display: { xs: "none", md: "block" },
                    backgroundColor: "#AABBE1",
                    borderWidth: "1px",
                    width: "1px",
                    height: "100%",
                    mx: 3,
                  }}
                />
              </Box>
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