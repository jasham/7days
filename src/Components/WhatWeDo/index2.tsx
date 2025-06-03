"use client";
import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Heading from "../Heading/Heading";
import { Button } from "../Button/Button";

interface WhatWeDoProps {
  title: string;
  description1: string;
  description2: string;
  description3: string;
  subHeading: string;
  subDescription: string;
  listItems: string[];
  buttonText: string;
  subListBottom: string,
  onButtonClick?: () => void;
}

const WhatWeDo: React.FC<WhatWeDoProps> = ({
  title,
  description1,
  description2,
  description3,
  subHeading,
  subDescription,
  listItems,
  buttonText,
  onButtonClick,
  subListBottom
}) => {
  return (
    <Box
      sx={{
        background: "linear-gradient(0deg, #FFFFFF 0%, #132D46 46.76%)",
        px: { xs: 2, md: 10 },
        py: { xs: 4, md: 8 },
      }}
    >
      <Heading
        text="WHAT WE DO"
        textColor="#ffffff"
        dividerColor="#ffffff"
        dividerHeight="1px"
      />

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" color="#ffffff">
            {title}
          </Typography>

          <Typography
            variant="h6"
            color="#ffffff"
            
            sx={{ mt: 3, maxWidth: 500 }}
          >
            {description1}
          </Typography>

          <Typography
            variant="h6"
            color="#ffffff"
            
            sx={{ mt: 3, maxWidth: 500 }}
          >
            {description2}
          </Typography>

          <Typography
            variant="h6"
            color="#ffffff"
            
            sx={{ mt: 3, maxWidth: 500 }}
          >
            {description3}
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <Box sx={{ pl: { xs: 0, md: 4 } }}>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                color: "white",
                fontWeight: 600,
                mb: 2,
                fontSize: "1.5rem",
              }}
            >
              {subHeading}
            </Typography>

            <Typography
              variant="h6"
              color="#ffffff"
              
              sx={{ mt: 3, mb: 3, maxWidth: 500 }}
            >
              {subDescription}
            </Typography>

            <Box component="ul" sx={{ color: "white", pl: 2 }}>
              {listItems.map((item, index) => (
                <Typography
                  key={index}
                  component="li"
                  variant="h6"
                  
                  sx={{ mb: 2, listStyleType: "disc" }}
                >
                  {item}
                </Typography>
              ))}
            </Box>

            <Typography
              variant="h6"
              color="#ffffff"
              
              sx={{ mt: 3, mb: 3, maxWidth: 500 }}
            >
              {subListBottom}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Button
          variantStyle="main"
          buttonColor={"#132D46"}
          buttonBgColor="transparent"
          buttonBorderColor={"#132D46"}
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default WhatWeDo;
