// prettier-ignore
'use client';
import { Box, Card, Grid, Typography } from "@mui/material";
import CustomButton from "../Button";

// Define the type for the service prop
interface Service {
  title: string;
  description: string;
  action: string;
  image: string;
}

// Accept service as a prop with correct typing
interface ImageCardProps {
  service: Service;
  background: string;
}

export default function ImageCard({ service, background }: ImageCardProps) {
  console.log(service); // You might want to remove this log in production

  return (
    <Grid item xs={12} md={4}>
      <Card
        sx={{
          height: "100%",
          borderRadius: 3,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "relative",
            height: "352px", // Card height
            width: "100%", // Use full width of the parent container
            display: "flex",
            alignItems: "flex-end",
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
              width: "100%", // Ensure image takes full width
              height: "100%", // Ensure image takes full height
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

          {/* Text Content */}
          <Box
            sx={{
              position: "relative",
              zIndex: 2,
              width: "100%",
              p: 3,
            }}
          >
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              {service.title}
            </Typography>
            <Typography variant="body2" color="inherit" paragraph>
              {service.description}
            </Typography>
            <CustomButton
              text={service.action}
              onClick={() => alert("beginning")}
              variant="outlined"
              sx={{ color: "#fff", borderColor: "#fff" }}
            />
          </Box>
        </Box>
      </Card>
    </Grid>
  );
}
