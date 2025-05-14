// prettier-ignore
'use client';
import { Box, Grid, Typography } from "@mui/material";
import ImageCard from "../ImageCard";
import Heading from "../Heading/Heading";
import { Button } from "../Button/Button";

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
    <Box
      sx={{
        px: { xs: 2, md: 10 },
        py: { xs: 4, md: 8 },
        background: "#D4E1EF66",
      }}
    >
      <Heading
        text="Solutions That Build Businesses"
        textColor="#132D46"
        dividerColor="#132D46"
        dividerHeight="1px"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h2" color="#014225">
          Recruitment. Consulting. Growth.
        </Typography>

        <Typography variant="h5" color="#014225" width="90%">
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
        <Box
          mt={6}
          width={{ xs: "100%", md: "40%" }}
          mx={"auto"}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            alignItems: "center",
          }}
        >
          <Typography variant="h3">
            Individually strong. Unstoppable together.
          </Typography>

          <Typography variant="h4">
            When you combine all three, you don’t just keep up — you lead.
          </Typography>

          <Button
            variantStyle="main"
            buttonColor="#132D46"
            buttonBgColor="transparent"
            buttonBorderColor="#132D46"
            onClick={() => {
              alert("begining");
            }}
          >
            Begin your success story
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
