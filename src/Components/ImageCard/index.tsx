// prettier-ignore
'use client';
import { Box, Card, Grid, Typography } from "@mui/material";
import { Button } from "../Button/Button";
import { ImageCardProps } from "@/types/homeInterfaces";

export default function ImageCard({
  service,
  background,
  imageCard = true,
  md = 4,
  isLeft = false,
}: ImageCardProps) {
  return (
    <Grid
      item
      xs={12}
      md={md}
      sx={{
        px: { xs: 2, sm: 1 }, // responsive horizontal padding
      }}
    >
      <Card
        sx={{
          height: "100%",
          borderRadius: 3,
          overflow: "hidden",
          position: "relative",
        }}
      >
        {imageCard ? (
          // 🌆 Image Card Layout
          <Box
            sx={{
              position: "relative",
              height: "352px",
              width: "100%",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-start",
              color: "#fff",
            }}
          >
            {/* Image */}
            <Box
              component="img"
              src={service.image}
              alt={service.title}
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: 0,
              }}
            />

            {/* Gradient Overlay */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background,
                zIndex: 1,
              }}
            />

            {/* Text & Button Overlay */}
            <Box
              sx={{
                position: "relative",
                zIndex: 2,
                width: "100%",
                p: 3,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                height: "100%",
                justifyContent: isLeft ? "flex-end" : "center",
                alignItems: isLeft ? "left" : "center",
                textAlign: isLeft ? "left" : "center",
              }}
            >
              <Typography variant="h3" fontWeight="bold" color="#ffffff">
                {service.title}
              </Typography>
              <Typography variant="body1" color="#ffffff">
                {service.description}
              </Typography>
              <Button
                variantStyle="text"
                buttonColor="#FFFFFF"
                sx={{ typography: "body1" }}
                onClick={() => alert("beginning")}
              >
                {service.action}
              </Button>
            </Box>
          </Box>
        ) : (
          // 📰 News Style Layout
          <Box
            sx={{
              p: 3,
              backgroundColor: "#132D46",
              width: "100%", // ✅ Fix applied
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Optional: center content
            }}
          >
            <Box
              component="img"
              src={service.image}
              alt={service.title}
              sx={{
                width: "352px",
                height: "250px",
                objectFit: "cover",
                borderRadius: 2,
                mb: 2,
              }}
            />
            <Typography variant="h4" fontWeight={700} color="#ffffff" mb={3}>
              {service.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                gap: 4,
                alignItems: "center",
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: "#ffffff", width: "50%" }}
              >
                {service.description}
              </Typography>
              <Button
                variantStyle="main"
                buttonColor="#ffffff"
                buttonBgColor="transparent"
                buttonBorderColor="#ffffff"
                onClick={() => alert("beginning")}
                sx={{
                  height: "fit-content",
                  fontSize: "10px",
                }}
              >
                {service.action}
              </Button>
            </Box>
          </Box>
        )}
      </Card>
    </Grid>
  );
}
