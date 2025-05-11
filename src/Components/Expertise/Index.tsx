// prettier-ignore
'use client';
import { Box, Divider, Grid, Typography } from "@mui/material";
import ImageCard from "../ImageCard/index"; // Assuming it's in the same folder or update path accordingly
import Heading from "../Heading/Heading";

interface services {
  title: string;
  action: string;
  description: string;
  image: string;
}

const expertiseList: services[] = [
  {
    title: "Property & Development",
    action: "Explore Our Expertise ",
    description: "",
    image: "/expertise/expertise1.jpg",
  },
  {
    title: "Construction",
    action: "Explore Our Expertise ",
    description: "",
    image: "/expertise/expertise2.jpg",
  },
  {
    title: "Engineering",
    action: "Explore Our Expertise ",
    description: "",
    image: "/expertise/expertise3.jpg",
  },
  {
    title: "Facilities Management",
    action: "Explore Our Expertise ",
    description: "",
    image: "/expertise/expertise4.jpg",
  },
  {
    title: "Resources",
    action: "Explore Our Expertise ",
    description: "",
    image: "/expertise/expertise5.jpg",
  },
  {
    title: "Renewables",
    action: "Explore Our Expertise ",
    description: "",
    image: "/expertise/expertise6.jpg",
  },
  {
    title: "Not For Profit",
    action: "Explore Our Expertise ",
    description: "",
    image: "/expertise/expertise7.jpg",
  },
  {
    title: "Corporate",
    action: "Explore Our Expertise ",
    description: "",
    image: "/expertise/expertise8.jpg",
  },
  {
    title: "Government",
    action: "Explore Our Expertise ",
    description: "",
    image: "/expertise/expertise9.jpg",
  },
];
const ExpertiseSection: React.FC = () => {
  return (
    <Box py={10} px={4} maxWidth="lg" mx="auto">
      <Heading
          text="Specialist Expertise"
          textColor="#132D46"
          dividerColor="#132D46"
          dividerHeight="1px"
        />
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{ textAlign: "center", color: "#132D46" }}
      >
        Broad Expertise, Targeted Solutions
      </Typography>

      <Typography
        variant="body1"
        mb={4}
        sx={{ textAlign: "center", color: "#132D46" }}
      >
        See how we support your industry & find the expertise you need to build
        what’s next.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {expertiseList.map((service, idx) => (
          <ImageCard
            service={service}
            background=" linear-gradient(180deg, rgba(1, 66, 37, 0) 47.02%, rgba(1, 66, 37, 0.8) 100%)"
            key={idx}
            isLeft={true}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default ExpertiseSection;
