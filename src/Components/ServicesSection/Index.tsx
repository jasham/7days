// prettier-ignore
'use client';
import { Box, Grid, Typography } from "@mui/material";
import CustomButton from "../Button";
import ImageCard from "../ImageCard";

const services = [
  {
    title: "Recruitment",
    description:
      "We connect you with the industry's best permanent hires. But decisive leaders who aren't just qualified — but ready to move your business forward.",
    action: "Hire Talent ",
    image: "/recruitment.jpg", // Replace with actual image paths
  },
  {
    title: "Consulting & Advisory",
    description:
      "We design smart organisations. From resource planning and strategic structure to talent attraction strategies, we help you build a foundation for growth.",
    action: "Drive Performance ",
    image: "consulting.jpg",
  },
  {
    title: "Growth",
    description:
      "Beyond hiring and planning, we help you win. Our growth experts see new markets, drive revenue opportunities, and deliver measurable, competitive outcomes.",
    action: "Grow Your Business ",
    image: "growth.jpg",
  },
];

export default function ServicesSection() {
  return (
    <Box sx={{ py: 8, px: 2, background: "#D4E1EF66" }}>
      <Typography variant="overline" color="text.secondary">
        Solutions That Build Businesses
      </Typography>
      <hr></hr>
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          //   color="green"
          my={2}
          sx={{
            fontFamily: "Helvetica Neue",
            fontWeight: 700,
            fontSize: "48px",
            lineHeight: 1,
            color: "#014225",
            letterSpacing: 0,
            textAlign: "center",
          }}
        >
          Recruitment. Consulting. Growth.
        </Typography>

        <Typography
          variant="body1"
          maxWidth="md"
          margin="auto"
          mb={4}
          sx={{
            fontFamily: '"Helvetica Neue", sans-serif',
            fontWeight: 400,
            fontSize: "24px",
            lineHeight: 1,
            letterSpacing: "0",
            textAlign: "center",
            color: "#014225",
          }}
        >
          From building your team to designing your strategy and driving growth,
          we deliver the expertise to take your business further — faster.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <ImageCard
              service={service}
              background=" linear-gradient(180deg, rgba(19, 45, 70, 0.48) 0%, rgba(19, 45, 70, 0.6) 97.16%)"
              key={index}
            />
          ))}
        </Grid>

        <Box mt={6}>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              fontFamily: "Helvetica Neue",
              fontWeight: 700,
              fontSize: "40px",
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "center",
            }}
          >
            Individually strong.
            <br />
            Unstoppable together.
          </Typography>

          <Typography
            variant="body1"
            my={2}
            sx={{
              fontFamily: "Helvetica Neue",
              fontWeight: 500,
              fontSize: "32px",
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "center",
            }}
          >
            When you combine all three, you don’t just keep up — you lead.
          </Typography>

          <CustomButton
            text="Begin your success story"
            color="#132D46"
            onClick={() => {
              alert("begining");
            }}
            variant="outlined"
          />
        </Box>
      </Box>
    </Box>
  );
}
