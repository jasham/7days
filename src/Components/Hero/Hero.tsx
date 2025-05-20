// components/HeroSection.tsx
"use client";
import { Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import Navbar from "@/Components/Header";
import { Button } from "../Button/Button";
import { HeroProps } from "@/types/homeInterfaces";

export default function HeroSection({
  imageUrl,
  title,
  description,
  buttonText,
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
          <Typography variant="h4" color="#FFFFFF">
            {description}
          </Typography>

          {buttonText && (
            <Button
              variantStyle="main"
              buttonColor="#FFFFFF"
              buttonBgColor="transparent"
              buttonBorderColor="#FFFFFF"
              onClick={handleClick}
            >
              {buttonText}
            </Button>
          )}
        </Box>
      </Box>
    </Stack>
  );
}
