// prettier-ignore
'use client';
import { Box, Grid, Typography } from "@mui/material";
import ImageCard from "../ImageCard";
import Heading from "../Heading/Heading";
import { Button } from "../Button/Button";
import { ServicesSectionProps } from "@/types/homeInterfaces";

export default function ServicesSection({
  headingText,
  title,
  subtitle,
  services,
  footerTitle,
  footerSubtitle,
  buttonText,
}: ServicesSectionProps) {
  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: { xs: 4, md: 8 }, background: "#D4E1EF66" }}>
      <Heading text={headingText} textColor="#132D46" dividerColor="#132D46" />
      <Typography variant="h2" color="#014225" align="center">{title}</Typography>
      <Typography variant="h5" color="#014225" align="center" width="90%" mx="auto" mb={4} mt={2}>{subtitle}</Typography>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, idx) => (
          <ImageCard service={service} key={idx} background=" linear-gradient(180deg, rgba(19, 45, 70, 0.48) 0%, rgba(19, 45, 70, 0.6) 97.16%)"/>
        ))}
      </Grid>
      <Box sx={{ textAlign: "center", mt: 6 , width:"40%" , mx:"auto"}}>
        <Typography variant="h3">{footerTitle}</Typography>
        <Typography variant="h4" my={4}>{footerSubtitle}</Typography>
        <Button variantStyle="main" buttonColor="#132D46" buttonBgColor="transparent" buttonBorderColor="#132D46" onClick={() => alert("Beginning...")} > {buttonText} </Button>
      </Box>
    </Box>
  );
}
