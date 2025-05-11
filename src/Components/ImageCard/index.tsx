// prettier-ignore
'use client';
import { Box, Card, Grid, Typography } from "@mui/material";
import CustomButton from "../Button";

interface Service {
  title: string;
  description: string;
  action: string;
  image: string;
}

interface ImageCardProps {
  service: Service;
  background: string;
  imageCard?: boolean;
  md?: number;
  isLeft?: boolean;
}

export default function ImageCard({
  service,
  background,
  imageCard = true,
  md = 4,
  isLeft = false,
}: ImageCardProps) {
  return (
    <Grid item xs={12} md={md}>
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
              }}
            >
              <Typography variant="h4" fontWeight="bold" sx={{ color: "#ffffff" }}>
                {service.title}
              </Typography>
              <Typography variant="body1" sx={{ color: "#ffffff" }}>
                {service.description}
              </Typography>
              <CustomButton
                text={service.action}
                onClick={() => alert("beginning")}
                variant="outlined"
                sx={{ color: "#fff", borderColor: "#fff", width: "fit-content" }}
                isBorder={false}
              />
            </Box>
          </Box>
        ) : (
          // 📰 News Style Layout
          <Box
            sx={{
              p: 3,
              backgroundColor: "#132D46",
              width: "fit-content",
            }}
          >
            <Box
              component="img"
              src={service.image}
              alt={service.title}
              sx={{
                width: "352px",
                height: "214px",
                objectFit: "cover",
                borderRadius: 2,
                mb: 2,
              }}
            />
            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
              sx={{ color: "#ffffff" }}
            >
              {service.title}
            </Typography>
            <Box sx={{ display: "flex", width: "100%", gap: 4, alignItems: "center" }}>
              <Typography variant="body2" paragraph sx={{ color: "#ffffff", width: "50%" }}>
                {service.description}
              </Typography>
              <CustomButton
                text={service.action}
                onClick={() => alert("beginning")}
                variant="outlined"
                color={"#ffffff"}
                sx={{
                  borderColor: "#ffffff",
                  width: "50%",
                  height: "fit-content",
                  fontSize: "10px",
                }}
              />
            </Box>
          </Box>
        )}
      </Card>
    </Grid>
  );
}
