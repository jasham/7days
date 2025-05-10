import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import Heading from "../Heading/Heading";

const OurNetworkSection = () => {
  return (
    <Box px={4} py={10} maxWidth="lg" mx="auto">
      <Heading
        text="Work With Our Experts "
        textColor="#132D46"
        dividerColor="#132D46"
        dividerHeight="1px"
        marginBottom="16px"
      />

      <Grid container spacing={4} alignItems="center" mt={2}>
        {/* Left: Image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/your-map-image.png"
            alt="Map of Australia"
            sx={{ width: "100%", maxWidth: 400 }}
          />
        </Grid>

        {/* Right: Text Content */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            sx={{
              color: "#132D46",
              fontFamily: "Helvetica Neue",
              fontWeight: 700,
              fontSize: "28px",
              lineHeight: "110%",
              mb: 2,
            }}
          >
            Our Network Advantage
          </Typography>

          <Typography
            sx={{
              color: "#132D46",
              fontWeight: 500,
              mb: 2,
              fontFamily: "Helvetica Neue",
            }}
          >
            Unlike generalist recruiters, Henton operates inside industry
            ecosystems. We maintain deep sector connections across:
          </Typography>

          <List dense sx={{ pl: 2, mb: 2, borderLeft: "1px solid grey" }}>
            {[
              "Construction Project Directors and Managers",
              "Property Development Executives",
              "Engineering Specialists (Civil, Mechanical, Electrical)",
              "Facilities and Asset Managers",
              "Resources Industry Leadership",
              "Renewable Energy Project Teams",
              "NFP and Public Sector Operations Executives",
            ].map((text, idx) => (
              <ListItem key={idx} disableGutters sx={{ py: 0.5 }}>
                <ListItemText
                  primary={text}
                  primaryTypographyProps={{
                    fontFamily: "Helvetica Neue",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "120%",
                  }}
                />
              </ListItem>
            ))}
          </List>

          <Typography
            sx={{
              fontFamily: "Helvetica Neue",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "120%",
              color: "#132D46",
              mb: 2,
            }}
          >
            Our ability to activate trusted networks gives you an edge, bringing
            candidates to the table who would never respond to traditional ads.
          </Typography>

          <Button
            variant="outlined"
            sx={{
              borderColor: "#132D46",
              color: "#132D46",
              textTransform: "none",
              fontFamily: "Helvetica Neue",
              fontWeight: 500,
              fontSize: "14px",
              px: 3,
              py: 1,
            }}
          >
            Read to Build What’s Next? →
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurNetworkSection;
