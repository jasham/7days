// components/HeroSection.tsx
"use client";
import { Box, Grid, Paper, Stack, styled, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import Navbar from "@/Components/Header";
import { Button } from "../Button/Button";
import { HeroProps } from "@/types/homeInterfaces";

const ContactCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: "transparent",
  boxShadow: "none",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  color: "white",
  marginBottom: theme.spacing(2),
}));

export default function HeroSection({
  imageUrl,
  title,
  buttonLink,
  onButtonClick,
}: HeroProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onButtonClick) {
      return onButtonClick();
    }
    if (buttonLink) {
      router.push(buttonLink);
    }
  };

  return (
    <Stack id="home" direction="column">
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          width: "100%",
          backgroundImage: `linear-gradient(303.06deg, rgba(19, 45, 70, 0) 10.58%, #132D46 69.71%), url('${imageUrl}')`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%" }}>
        <Navbar />
        <Box
          sx={{
            width: { xs: "100%", md: "80%" },
            display: "flex",
            height: "70vh",
            marginTop: "40px",
            flexDirection: "column",
            gap: "30px",
            justifyContent: "center",
            px: { xs: 2, md: 10 },
          }}
        >
          <Typography variant="h1" color="#FFFFFF">
            {title}
          </Typography>
          <Grid container spacing={3} sx={{ maxWidth: "600px" }}>
            <Grid item xs={12} sm={6}>
              <ContactCard elevation={0}>
                <Typography variant="h5" gutterBottom>
                  Email
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, opacity: 0.9 }}>
                  info@hentonconsulting.com.au
                </Typography>
                <Button
                  variantStyle="main"
                  buttonColor="#FFFFFF"
                  buttonBgColor="#191E29"
                  buttonBorderColor="#FFFFFF"
                  onClick={handleClick}
                >
                  Email
                </Button>
              </ContactCard>
            </Grid>

            <Grid item xs={12} sm={6}>
              <ContactCard elevation={0}>
                <Typography variant="h6" gutterBottom>
                  Phone Number
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  +61 431 931 241
                </Typography>
                <Button
                  variantStyle="main"
                  buttonColor="#FFFFFF"
                  buttonBgColor="#191E29"
                  buttonBorderColor="#FFFFFF"
                  onClick={handleClick}
                >
                  Call Us
                </Button>
              </ContactCard>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Stack>
  );
}
