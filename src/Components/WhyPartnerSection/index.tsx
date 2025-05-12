"use client";

import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import PartnerCard from "../Card/index";
import CustomButton from "../Button";
import Heading from "../Heading/Heading";

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
<<<<<<< HEAD
  cards: CardData[];
  buttonText: string;
  buttonColor: string;
=======
  color?: string;
>>>>>>> 877107a (construction page completed)
}

const WhyPartnerSection: React.FC<Experts> = ({
  headingText = "WORK WITH THE EXPERTS",
  headingColor = "#132D46",
  dividerColor = "#132D46",
  dividerHeight = "1px",
  title,
  subTitle,
<<<<<<< HEAD
  cards,
  buttonText,
  buttonColor,
=======
  color = "#132D46",
>>>>>>> 877107a (construction page completed)
}: Experts) => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Heading
          text={headingText}
          textColor={headingColor}
          dividerColor={dividerColor}
          dividerHeight={dividerHeight}
        />

        <Grid container justifyContent="space-between" spacing={2} mb={6}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
<<<<<<< HEAD
              color={headingColor}
=======
              color="#132D46"
>>>>>>> 877107a (construction page completed)
            >
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" color={headingColor}>
              {subTitle}
            </Typography>
          </Grid>
        </Grid>

<<<<<<< HEAD
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
=======
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <PartnerCard
              icon={<ChangeCircleOutlinedIcon fontSize="inherit" />}
              title={CardList.myCards[0].title}
              description={CardList.myCards[0].description}
              color={color}
            />
          </Grid>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderColor: "#AABBE1" }}
          />
          <Grid item xs={12} md={4}>
            <PartnerCard
              icon={<ChangeCircleOutlinedIcon fontSize="inherit" />}
              title={CardList.myCards[1].title}
              description={CardList.myCards[1].description}
              color={color}
            />
          </Grid>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderColor: "#AABBE1" }}
          />
          <Grid item xs={12} md={3}>
            <PartnerCard
              icon={<HandshakeOutlinedIcon fontSize="inherit" />}
              title={CardList.myCards[2].title}
              description={CardList.myCards[2].description}
              color={color}
            />
          </Grid>
        </Grid>
>>>>>>> 877107a (construction page completed)

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
          <CustomButton
            text={buttonText}
            variant="outlined"
            sx={{
              color: buttonColor,
              borderColor: buttonColor,
              px: 4,
              py: 1.5,
              mt: 2,
              fontWeight: "medium",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default WhyPartnerSection;
