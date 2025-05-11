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
  engineeringPage?: boolean;
  permanentRecruitment?: boolean;
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
const constructionExpertList = [
  "Head Contractors, Subcontractors across keys sectors including Health, Education, Industrial",
  "Specialist subcontractors and client side consultancies",
  "Fitout and refurbishment firms",
  "Client-side project and development managers",
  "Government and private developers",
];
const engineeringExpertList = [
  "National and multidisciplinary design consultancies",
  "Specialist civil, structural and MEP firms",
  "Tier 1 and mid-tier head contractors",
  "Client-side PM and commercial advisory groups",
  "Government and infrastructure delivery agencies",
  "Asset owners and operators in transport, utilities and energy",
];
const WhatWeDo: React.FC<WhatWeDoProps> = ({
  cards = true,
  heading,
  description,
  subHeading,
  subDescription,
  construction,
  engineeringPage = false,
  permanentRecruitment = false,
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
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Box
            sx={{ display: "flex", justifyContent: "space-between" }}
            gap={20}
          >
            <Box
              flexBasis={"50%"}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "84px",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Helvetica Neue",
                  fontEeight: "700",
                  fontSize: "48px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#ffffff",
                }}
                gutterBottom
              >
                {/* We help businesses <br />
              recruit with purpose — <br />
              aligning people <br />
              strategy to commercial <br />
              outcomes. */}
                {heading}
              </Typography>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <Box>
                  <Typography
                    variant="body2"
                    color="white"
                    sx={{
                      mb: 4,
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    {description?.split("/")[0]}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body2"
                    color="white"
                    sx={{
                      mb: 4,
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    {description?.split("/")[0]}
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box flexBasis={"50%"}>
              <Typography
                variant="body1"
                color="white"
                sx={{ mt: 3, maxWidth: 500 }}
              >
                At Hinton, recruitment isn&apos;t transactional. It&apos;s
                strategic. Every hire should improve capability, deliver
                outcomes, and move your business forward.
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Helvetica Neue",
                  fontWeight: "700",
                  fontSize: "40px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                }}
                color="white"
                mt={5}
              >
                {cards && "Who We Recruit"}
                {!cards && subHeading}
              </Typography>
              <Typography
                variant="body2"
                color="white"
                sx={{
                  fontFamily: "Helvetica Neue",
                  fontWeight: " 500",
                  fontSize: "20px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#ffffff",
                  padding: "10px",
                }}
              >
                {cards &&
                  "Our expertise covers a wide range of skill sets and leadership levels."}
                {!cards && subDescription}
              </Typography>
              {permanentRecruitment && (
                <List>
                  {expertiseList.map((item, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        fontFamily: "Helvetica Neue",
                        fontWeight: " 500",
                        fontSize: "20px",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        color: "#ffffff",
                        padding: "10px",
                      }}
                    >
                      <ListItemText primary={`• ${item}`} />
                    </ListItem>
                  ))}
                </List>
              )}
              {construction && (
                <List>
                  {constructionExpertList.map((item, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        fontFamily: "Helvetica Neue",
                        fontWeight: " 500",
                        fontSize: "20px",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        color: "#ffffff",
                        padding: "10px",
                      }}
                    >
                      <ListItemText primary={`• ${item}`} />
                    </ListItem>
                  ))}
                </List>
              )}
              {engineeringPage && (
                <List>
                  {engineeringExpertList.map((item, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        fontFamily: "Helvetica Neue",
                        fontWeight: " 500",
                        fontSize: "20px",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        color: "#ffffff",
                        padding: "10px",
                      }}
                    >
                      <ListItemText primary={`• ${item}`} />
                    </ListItem>
                  ))}
                </List>
              )}
              {engineeringPage && (
                <Typography
                  sx={{
                    fontFamily: "Helvetica Neue",
                    fontWeight: " 500",
                    fontSize: "20px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    color: "#ffffff",
                    padding: "10px",
                  }}
                >
                  Whether your project is in a major city, regional hub or
                  remote site, we find the technical talent to match.
                </Typography>
              )}
            </Box>
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
            sx={{ color: "#132D46", borderColor: "#132D46" }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default WhatWeDo;
