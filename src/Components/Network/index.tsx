import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import CustomButton from "../Button";
import Heading from "../Heading/Heading";
interface NetworProps {
  construction?: boolean;
  image?: string;
  heading?: string;
  description?: string;
}
const networkList = [
  "Construction Project Directors and Managers",
  "Property Development Executives",
  "Engineering Specialists (Civil, Mechanical, Electrical)",
  "Facilities and Asset Managers",
  "Resources Industry Leadership",
  "Renewable Energy Project Teams",
  "NFP and Public Sector Operations Executives",
];
const deepExpertList = [
  "Site ManagementForemen and Site Managers who lead crews, control subcontractors, and keep timelines moving in high-pressure environments.",
  "Contract Administration & EstimatingProfessionals who scope risk, protect margins and keep costs under control across commercial and civil projects.",
  "Construction Directors & Delivery LeadsSenior operators who oversee multi-site programs, manage client expectations and keep delivery teams aligned to outcomes.",
  "HSE & Quality ManagementSafety and compliance leads who protect lives, reputations and program continuity under regulatory scrutiny.",
  "Client-Side Project & Development ManagementProject Managers, owner’s reps and consultants who manage stakeholders, delivery risk and feasibility across complex construction programs.",
  "Commercial ManagementContract, cost and commercial professionals who forecast, report and manage risk in alignment with delivery targets.",
];

const OurNetworkSection = ({
  image,
  heading,
  description,
  construction = false,
}: NetworProps) => {
  return (
    <Box px={4} py={10} maxWidth="lg" mx="auto">
      <Heading
        text="Work With Our Experts "
        textColor="#132D46"
        dividerColor="#132D46"
        dividerHeight="1px"
        marginBottom="16px"
      />

      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent={"center"}
        mt={2}
      >
        {/* Left: Image */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "60px",
              marginTop: "0",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#132D46",
                fontFamily: "Helvetica Neue",
                fontWeight: 700,
                fontSize: "40px",
                lineHeight: "110%",
                mb: 2,
              }}
            >
              {/* Our Network Advantage */}
              {heading?.split("/")[0]}
              <br />
              {heading?.split("/")[1]}
            </Typography>

            <Box
              component="img"
              src={image}
              alt="Map of Australia"
              sx={{ width: "100%", maxWidth: 500, borderRadius: "10px" }}
            />
          </Box>
        </Grid>

        {/* Right: Text Content */}
        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              color: "#132D46",
              fontWeight: 500,
              mb: 2,
              fontFamily: '"Helvetica Neue", sans-serif',
              fontSize: "24px",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            {description}
          </Typography>

          <List dense sx={{ pl: 2, mb: 2, borderLeft: "1px solid grey" }}>
            {!construction &&
              networkList.map((text, idx) => (
                <ListItem key={idx} disableGutters sx={{ py: 0.5 }}>
                  <ListItemIcon>
                    <FiberManualRecordIcon sx={{ fontSize: "8px" }} />
                  </ListItemIcon>
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
            {construction &&
              deepExpertList.map((text, idx) => (
                <ListItem key={idx} disableGutters sx={{ py: 0.5 }}>
                  <ListItemIcon>
                    <FiberManualRecordIcon sx={{ fontSize: "8px" }} />
                  </ListItemIcon>
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

          {!construction && (
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
              Our ability to activate trusted networks gives you an edge,
              bringing candidates to the table who would never respond to
              traditional ads.
            </Typography>
          )}
        </Grid>
        <CustomButton
          text=" Read to Build What’s Next?"
          color="#132D46"
          sx={{ BorderColor: "#132D46" }}
        />
      </Grid>
    </Box>
  );
};

export default OurNetworkSection;
