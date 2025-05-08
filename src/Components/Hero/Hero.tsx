// components/HeroSection.tsx
'use client';
import { Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import CustomButton from "@/Components/Button";
import Navbar from "@/Components/Header";

export type HeroSectionProps = {
  imageUrl: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  onButtonClick?: () => void;
};

export default function HeroSection({
  imageUrl,
  title,
  description,
  buttonText,
  buttonLink,
  onButtonClick,
}: HeroSectionProps) {
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
          width: "100vw",
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
            display: "flex",
            height: "70vh",
            marginTop: "40px",
            flexDirection: "column",
            padding: "85px",
            gap: "15px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Helvetica Neue",
              fontWeight: 500,
              fontSize: "90px",
              lineHeight: "104px",
              color: "#FFFFFF",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Helvetica Neue",
              fontWeight: 100,
              fontSize: "30px",
              color: "#FFFFFF",
            }}
          >
            {description}
          </Typography>

          {buttonText && (
            <CustomButton
              text={buttonText}
              variant="outlined"
              onClick={handleClick}
            />
          )}
        </Box>
      </Box>
    </Stack>
  );
}
