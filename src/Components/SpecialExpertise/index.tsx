import { Box, Button, Divider, Grid, Typography } from "@mui/material";

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
    <Box sx={{ px: 4, py: 6, textAlign: "center" }}>
      {/* Top Divider and Label */}
      <Typography
        sx={{
          fontFamily: "Helvetica Neue",
          fontWeight: 400,
          fontSize: "12px",
          color: "#132D46",
          textTransform: "uppercase",
          mb: 1,
        }}
      >
        Specialist Expertise
      </Typography>

      <Divider
        sx={{
          width: "100%",
          maxWidth: 1000,
          mx: "auto",
          mb: 3,
          borderColor: "#132D46",
        }}
      />

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
  );
};

export default SpecialistExpertise;
