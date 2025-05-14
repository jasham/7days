// prettier-ignore
'use client';
import { Box, Grid, Typography } from "@mui/material";
import ImageCard from "../ImageCard/index";
import Heading from "../Heading/Heading";

interface Service {
  title: string;
  action: string;
  description: string;
  image: string;
}
const newsList: Service[] = [
  {
    title: "We all need advice from time to time…",
    action: "READ MORE ",
    description:
      "In this type of career, you get asked for all kinds of advice...",
    image: "/news/advice.jpg",
  },
  {
    title: "We all need advice from time to time…",
    action: "READ MORE ",
    description:
      "In this type of career, you get asked for all kinds of advice...",
    image: "/news/late.png",
  },
  {
    title: "We all need advice from time to time…",
    action: "READ MORE ",
    description:
      "In this type of career, you get asked for all kinds of advice...",
    image: "/news/advice.jpg",
  },
];
export default function Insights() {
  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: { xs: 4, md: 8 } }}>
      <Heading
        text="Insights"
        textColor="#132D46"
        dividerColor="#132D46"
        dividerHeight="1px"
        marginBottom="36px"
      />
      <Typography variant="h2" gutterBottom color="#132D46">
        News & Resources
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {newsList.map((service, index) => (
          <ImageCard
            key={index}
            service={service}
            background={"#132D46"}
            imageCard={false}
            md={4}
          />
        ))}
      </Grid>
    </Box>
  );
}