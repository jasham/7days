import { Box, Button, Grid, Typography } from "@mui/material";
import Heading from "../Heading/Heading";
import { HowWeDeliverRecruitmentProps } from "@/types/permanentRecruitmentInterfaces";

// ✅ Use the interface in your component
const HowWeDeliverRecruitment = ({
  headingText,
  mainTitle,
  subTitle,
  subTitle2,
  image,
  buttonText,
  features,
}: HowWeDeliverRecruitmentProps) => {
  return (
    <Box sx={{ background: "#D4E1EF66" }}>
      <Box sx={{ px: { xs: 2, md: 10 }, py: { xs: 4, md: 8 } }}>
        <Heading
          text={headingText}
          textColor="#132D46"
          dividerColor="#132D46"
          dividerHeight="1px"
          marginBottom="16px"
        />
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} md={5}>
            <Typography variant="h2" sx={{ mb: 2 }}>
              {mainTitle}
            </Typography>

            <Typography variant="h6" textTransform={"capitalize"} sx={{ mb: 2 }}>
              {subTitle}
            </Typography>
            <Typography variant="h6" textTransform={"capitalize"}>
              {subTitle2}
            </Typography>

            <Box
              sx={{
                width: "100%",
                height: "300px",
                borderRadius: "10px",
                mb: 3,
                backgroundImage: `linear-gradient(180deg, rgba(19, 45, 70, 0.48) 0%, rgba(19, 45, 70, 0.6) 100%), url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                mt: 3,
              }}
            />

            <Button
              variant="outlined"
              endIcon={<span style={{ fontSize: "18px" }}>→</span>}
              sx={{
                fontFamily: "Helvetica Neue",
                fontWeight: 500,
                fontSize: "16px",
                textTransform: "none",
                px: 2.5,
                py: 1,
                borderColor: "#2E2C38",
                color: "#2E2C38",
                "&:hover": {
                  borderColor: "#2E2C38",
                  backgroundColor: "#f5f5f5",
                },
              }}
            >
              {buttonText}
            </Button>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              {features.map((item, index) => (
                <Grid item xs={12} key={index}>
                  <Typography
                    sx={{
                      fontFamily: "Helvetica Neue",
                      fontWeight: 700,
                      fontSize: "36px",
                      lineHeight: "100%",
                      color: "#2E2C38",
                      mb: 1,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Helvetica Neue",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#2E2C38",
                    }}
                  >
                    {item.description}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HowWeDeliverRecruitment;
