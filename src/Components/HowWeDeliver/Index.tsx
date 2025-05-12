import { Box, Button, Grid, Typography } from "@mui/material";
import Heading from "../Heading/Heading";

const features = [
  {
    title: "Strategic Role Alignment",
    description:
      "We lead detailed calibration sessions with hiring managers and operational leaders to align the role to your growth strategy, not just a position description.",
  },
  {
    title: "Market Mapping and Talent Intelligence",
    description:
      "We map the active and passive market, leveraging proprietary databases, headhunting techniques, and industry networks across Australia’s major and regional markets.",
  },
  {
    title: "Direct Search and Talent Activation",
    description:
      "We target high-performing passive candidates and present opportunities that align to their personal growth and professional goals.",
  },
  {
    title: "Values-Based Assessment",
    description:
      "We assess candidates against behavioural, cultural and leadership alignment metrics — not just skills and experience.",
  },
  {
    title: "Focused Delivery",
    description:
      "We don’t create shortlists, we present only the best candidate in 7–10 business days, complete with summary profile, capability analysis and leadership fit scoring.",
  },
];

const HowWeDeliverPermanentRecruitment = () => {
  return (
    <Box sx={{ background: "#D4E1EF66" }}>
      <Box px={4} py={10} maxWidth="lg" mx="auto">
        <Heading
          text="Permanent Recruitment Services"
          textColor="#132D46"
          dividerColor="#132D46"
          dividerHeight="1px"
          marginBottom="16px"
        />
        <Grid container spacing={4}>
          {/* Left Side */}
          <Grid item xs={12} md={5}>
            <Typography
              sx={{
                fontFamily: "Helvetica Neue",
                fontWeight: 700,
                fontSize: "48px",
                color: "#2E2C38",
                lineHeight: "100%",
                mb: 2,
              }}
            >
              How we deliver permanent recruitment
            </Typography>

            <Typography
              sx={{
                fontFamily: "Helvetica Neue",
                fontWeight: 500,
                fontSize: "24px",
                lineHeight: "100%",
                color: "#2E2C38",
                mb: 2,
              }}
            >
              Permanent hiring demands precision and our system delivers it.
            </Typography>

            <Typography
              sx={{
                fontFamily: "Helvetica Neue",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                color: "#2E2C38",
                mb: 3,
              }}
            >
              Every search includes:
            </Typography>

            <Box
              sx={{
                width: "100%",
                height: "300px", // adjust as needed
                borderRadius: "10px",
                mb: 3,
                backgroundImage: `linear-gradient(180deg, rgba(19, 45, 70, 0.48) 0%, rgba(19, 45, 70, 0.6) 100%), url('/womenPresenting.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
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
              Build Your Team
            </Button>
          </Grid>

          {/* Right Side */}
          <Grid item xs={12} md={7}>
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

export default HowWeDeliverPermanentRecruitment;
