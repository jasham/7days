// prettier-ignore
'use client';
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import CustomButton from "../Button";
import Heading from "../Heading/Heading";
interface WhatWeDoProps {
  cards?: boolean;
  construction?: boolean;
  heading?: string;
  description?: string;
  subHeading?: string;
  subDescription?: string;
}
const roleCards = [
  {
    title: "Technical Roles",
    description: "Engineering, construction management, project delivery",
  },
  {
    title: "Commercial and Leadership Roles",
    description: "Finance, strategy, operations, general management",
  },
  {
    title: "Business-Critical and Confidential Roles",
    description: "Executive search, senior appointments, succession placements",
  },
];
const expertiseList = [
  "Specialist technical roles",
  "Commercial and operational leadership",
  "Middle management to C-suite executives",
  "Confidential and strategic appointments",
];
// const constructionExpertList = [
//   "Head Contractors, Subcontractors across keys sectors including Health, Education, Industrial",
//   "Specialist subcontractors and client side consultancies",
//   "Fitout and refurbishment firms",
//   "Client-side project and development managers",
//   "Government and private developers",
// ];
const WhatWeDo: React.FC<WhatWeDoProps> = ({
  cards = true,
  heading,
  description,
}) => {
  return (
    <Box
      px={10}
      py={10}
      sx={{ background: "linear-gradient(0deg, #FFFFFF 0%, #132D46 46.76%)" }}
    >
      <Container maxWidth="lg">
        <Heading
          text="WHAT WE DO"
          textColor="#ffffff"
          dividerColor="#ffffff"
          dividerHeight="1px"
        />
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box sx={{ width: "40%" }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              color="white"
              gutterBottom
            >
              {/* We help businesses <br />
              recruit with purpose — <br />
              aligning people <br />
              strategy to commercial <br />
              outcomes. */}
              {heading}
            </Typography>
            <Typography variant="body2" color="white" sx={{ mb: 4 }}>
              {description?.split("/")[0]}
              <br />
              {description?.split("/")[1]}
            </Typography>
          </Box>

          <Box flexBasis={"50%"}>
            <Typography
              variant="body1"
              color="white"
              sx={{ mt: 3, maxWidth: 500 }}
            >
              At Hinton, recruitment isn&apos;t transactional. It&apos;s
              strategic. Every hire should improve capability, deliver outcomes,
              and move your business forward.
            </Typography>

            <Typography variant="h4" fontWeight="bold" color="white" mt={5}>
              Who We Recruit
            </Typography>
            <Typography variant="body2" color="white" sx={{ mb: 4 }}>
              Our expertise covers a wide range of skill sets and leadership
              levels.
            </Typography>
            {!cards && (
              <List>
                {expertiseList.map((item, index) => (
                  <ListItem key={index} sx={{ color: "#fff", pl: 2 }}>
                    <ListItemText primary={`• ${item}`} />
                  </ListItem>
                ))}
              </List>
            )}
          </Box>
          {cards && (
            <Grid container spacing={3} mb={4}>
              {roleCards.map((role, index) => (
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{
                    width: "360px",
                    borderRadius: "16px",
                    padding: "24px",
                    gap: "24px",
                    textAlign: "center",
                  }}
                  key={index}
                >
                  <Paper elevation={2} sx={{ p: 3, height: "100%" }}>
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      gutterBottom
                      color="#014225"
                    >
                      {role.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: " #132D46" }}>
                      {role.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
        <Grid container spacing={3} mb={4}>
          {roleCards.map((role, index) => (
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                borderRadius: "24px",
                padding: "24px",
                gap: "24px",
                textAlign: "center",
              }}
              key={index}
            >
              <Paper
                elevation={2}
                sx={{ p: 4, height: "100%", borderRadius: "16px" }}
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  gutterBottom
                  color="#014225"
                >
                  {role.title}
                </Typography>
                <Typography variant="body2" sx={{ color: " #132D46" }}>
                  {role.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CustomButton
            text=" Start the conversation"
            onClick={() => alert("beginning")}
            variant="outlined"
            sx={{ color: "#fff", borderColor: "#fff" }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default WhatWeDo;
