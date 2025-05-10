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
  imageCard?: boolean;
  md?: number;
}

export default function ImageCard({
  service,
  background,
  imageCard = true,
  md = 4,
}: ImageCardProps) {
  // console.log(service); // You might want to remove this log in production

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

            {/* Gradient */}
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
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              {service.title}
            </Typography>
            {/* Text Overlay */}
            <Box sx={{ display: "flex", width: "100%", p: 3 }}>
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
        ) : (
          // 📰 News Style Layout
          <Box
            sx={{
              p: 3,
              backgroundColor: " #132D46",
              height: "524",
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
            <Box sx={{ display: "flex", width: "100%" , gap:4 , alignItems:"center"}}>
            <Typography variant="body2" paragraph sx={{ color: "#ffffff" , width: "50%" }}>
              {service.description}
            </Typography>
            <CustomButton
              text={service.action}
              onClick={() => alert("beginning")}
              variant="outlined"
              color={"#ffffff"}
              sx={{ BorderColor: "##ffffff" , width: "50%" , height:"fit-content"}}
              fontSize={"10px"}
            />
            </Box>
          </Box>
        )}
      </Card>
    </Grid>
  );
}
