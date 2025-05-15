'use client';
import { Box, Grid, Typography } from "@mui/material";
import { ExpertiseSectionProps } from "@/types/homeInterfaces";
import Heading from "../Heading/Heading";
import ImageCard from "../ImageCard";

export default function ExpertiseSection({ headingText, title, description, expertiseList }: ExpertiseSectionProps) {
  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: { xs: 4, md: 8 } }}>
      <Heading text={headingText} textColor="#132D46" dividerColor="#132D46" />
      <Typography variant="h2" align="center">{title}</Typography>
      <Typography variant="h5" align="center" mb={4}>{description}</Typography>
      <Grid container spacing={4}>
        {expertiseList.map((exp, idx) => <ImageCard service={exp} key={idx} background=" linear-gradient(180deg, rgba(1, 66, 37, 0) 47.02%, rgba(1, 66, 37, 0.8) 100%)" isLeft={true}/>)}
      </Grid>
    </Box>
  );
}
