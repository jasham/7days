import { Box, Button, Grid, Typography } from "@mui/material";
import Heading from "../Heading/Heading";

const sectors = [
  "Property & Development",
  "Construction",
  "Engineering",
  "Facilities Management",
  "Resources",
  "Renewables",
  "Not For Profit",
  "Corporate",
  "Government",
];

const SpecialistExpertise = () => {
  return (
    <Box px={4} py={6} maxWidth={"lg"} mx={"auto"}>
      <Heading
        text=" Specialist Expertise"
        textColor="#132D46"
        dividerColor="#132D46"
      />
      <Box sx={{ px: 4, py: 6, textAlign: "center" }}>
        {/* Top Divider and Label */}

        {/* Heading */}
        <Typography
          sx={{
            fontFamily: "Helvetica Neue",
            fontWeight: 700,
            fontSize: "48px",
            lineHeight: "100%",
            color: "#132D46",
            mb: 2,
          }}
        >
          Sector-Specific Recruitment. Permanent Impact.
        </Typography>

        {/* Subheading */}
        <Typography
          sx={{
            fontFamily: "Helvetica Neue",
            fontWeight: 400,
            fontSize: "24px",
            lineHeight: "100%",
            color: "#132D46",
            mb: 4,
          }}
        >
          Deep industry knowledge, precise candidate alignment – built for
          long-term success in your sector.
        </Typography>

        {/* Sector Buttons */}
        <Grid container spacing={2} justifyContent="center">
          {sectors.map((label, idx) => (
            <Grid item key={idx}>
              <Button
                variant="outlined"
                endIcon={<span style={{ fontSize: "18px" }}>→</span>}
                sx={{
                  fontFamily: "Helvetica Neue",
                  fontWeight: 500,
                  fontSize: "16px",
                  borderColor: "#132D46",
                  color: "#132D46",
                  px: 2.5,
                  py: 1,
                  textTransform: "none",
                  borderRadius: "6px",
                  "&:hover": {
                    borderColor: "#132D46",
                    backgroundColor: "#f5f5f5",
                  },
                }}
              >
                {label}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default SpecialistExpertise;
