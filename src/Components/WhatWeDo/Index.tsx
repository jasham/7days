"use client";

import React from "react";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Heading from "../Heading/Heading";
import { Button } from "../Button/Button";
import { WhatWeDoProps } from "@/types/recruitmentInterfaces";

const Bullet = ({ size = 8 }: { size?: number }) => (
  <ListItemIcon sx={{ minWidth: size + 4 }}>
    <FiberManualRecordIcon sx={{ fontSize: size , color:"#FFF"}} />
  </ListItemIcon>
);

export default function WhatWeDoSection({
  heading,
  introText,
  whoSubHeading,
  whoHeading,
  whoDescription,
  listItems,
  roleCards,
  buttonText,
}: WhatWeDoProps) {
  return (
    <Box
      sx={{
        background: "linear-gradient(0deg, #FFFFFF 0%, #132D46 46.76%)",
        px: { xs: 2, md: 10 },
        py: { xs: 4, md: 8 },
      }}
    >
      <Heading
        text={"WHAT WE DO"}
        textColor="#FFFFFF"
        dividerColor="#FFFFFF"
        dividerHeight="1px"
      />
      <Grid container spacing={4} alignItems="flex-end">
        <Grid item xs={12} md={6}>
          {heading && (
            <Typography variant="h2" color="#FFFF">
              {heading}
            </Typography>
          )}
          {introText && (
            <Typography
              variant="h6"
              
              color="#FFFFFF"
              mt={4}
              sx={{ whiteSpace: "pre-line" }}
            >
              {introText}
            </Typography>
          )}
        </Grid>

        <Grid item xs={12} md={heading ? 6 : 12}>
          {whoSubHeading && (
            <Typography variant="h3" gutterBottom color="#FFFFFF">
              {whoSubHeading}
            </Typography>
          )}
          {whoHeading && (
            <Typography variant="h6"  gutterBottom color="#FFFFFF">
              {whoHeading}
            </Typography>
          )}
          {whoDescription && (
            <Typography variant="h6"  color="#FFFFFF">
              {whoDescription}
            </Typography>
          )}

          {listItems && (
            <List dense sx={{ pl: 2, borderLeft: "1px solid white" }}>
              {listItems.map((item, i) => (
                <ListItem key={i} disableGutters>
                  <Bullet size={8} />
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{ color: "#FFFFFF" , fontWeight:400 }}
                  />
                </ListItem>
              ))}
            </List>
          )}
        </Grid>
        {roleCards && (
            <Grid container spacing={3} mt={2} width={"90%"} mx={"auto"} textAlign={"center"}>
              {roleCards.map((card, i) => (
                <Grid item xs={12} md={4} key={i}>
                  <Paper
                    elevation={2}
                    sx={{ p: 4, borderRadius: "16px", height: "100%" }}
                  >
                    <Typography variant="h4" gutterBottom color="#014225">
                      {card.title}
                    </Typography>
                    <Typography variant="h6"  color="#132D46">
                      {card.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          )}
      </Grid>
      <Box sx={{ display : "flex" , justifyContent:"center", mt: 4 }}>
            <Button
              variantStyle="main"
              buttonColor="#132D46"
              buttonBgColor="transparent"
              buttonBorderColor="#132D46"
            >
              {buttonText}
            </Button>
          </Box>
    </Box>
  );
}
