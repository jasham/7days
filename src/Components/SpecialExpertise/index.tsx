import { Box, Button, Grid, Typography } from "@mui/material";
import Heading from "../Heading/Heading";
import { SpecialistExpertiseProps } from "@/types/permanentRecruitmentInterfaces";

const SpecialistExpertise: React.FC<SpecialistExpertiseProps> = ({
  title,
  description,
  sectors = [],
}) => {
  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: { xs: 4, md: 8 } }}>
      <Heading
        text=" Specialist Expertise"
        textColor="#132D46"
        dividerColor="#132D46"
      />
      <Box sx={{ px: {xs:0 , md:4}, py: {xs:0 , md:6}, textAlign: "center" }}>
        {/* Top Divider and Label */}

        {/* Heading */}
        <Typography variant="h2" color="#132D46" mb={4}>
          {/* Sector-Specific Recruitment. Permanent Impact. */}
          {title}
        </Typography>

        {/* Subheading */}
        <Typography variant="h5" color="#132D46" mb={4}>
          {/* Deep industry knowledge, precise candidate alignment , built for
          long-term success in your sector. */}
          {description}
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
