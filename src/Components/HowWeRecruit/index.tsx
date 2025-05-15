import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import GroupIcon from "@mui/icons-material/Group"; // Replace with actual icons
import { Box, Grid, Typography } from "@mui/material";
import CustomButton from "../Button";
import Heading from "../Heading/Heading";
interface HowWeRecruitProps {
  construction?: boolean;
  engineering?: boolean;
  managementPage?: boolean;
  property?: boolean;
  resources?: boolean;
  title?: string;
  heading?: string;
  subTitle?: string;
  description?: string;
  description2?: string;
  description3?: string;
}
const constructionList = [
  {
    icon: <GroupIcon />,
    text: "Role scoping aligned to delivery timeline and project complexity",
  },
  {
    icon: <EmojiPeopleIcon />,
    text: "Direct outreach to high-performing site and commercial talent",
  },
  {
    icon: <AssignmentTurnedInIcon />,
    text: "Screening based on verified project outcomes, team leadership, safety and commercial acumen",
  },
  {
    icon: <CheckCircleIcon />,
    text: "One appointment, not a shortlist, ready to deliver now",
  },
];
const propertyList = [
  {
    icon: <GroupIcon />,
    text: "Dedicated research & market mapping",
  },
  {
    icon: <EmojiPeopleIcon />,
    text: "Direct outreach to passive talent",
  },
  {
    icon: <AssignmentTurnedInIcon />,
    text: "Structured assessments focused on cultural and technical alignment",
  },
  {
    icon: <CheckCircleIcon />,
    text: "No shortlists. Just the right person, first time.",
  },
];
const resourceList = [
  {
    icon: <GroupIcon />,
    text: "Market mapping based on location, project type and competitor activity",
  },
  {
    icon: <EmojiPeopleIcon />,
    text: "Direct engagement with proven performers in aligned conditions",
  },
  {
    icon: <AssignmentTurnedInIcon />,
    text: "Screening based on site-readiness, constructability insight and delivery outcomes",
  },
  {
    icon: <CheckCircleIcon />,
    text: "The best candidate with the capability to lead or lift the project",
  },
];

const engineeringList = [
  {
    icon: <GroupIcon />,
    text: "Technical scoping aligned to program stage, risk and role accountability",
  },
  {
    icon: <EmojiPeopleIcon />,
    text: "Market mapping and competitor intelligence — not just job board noise",
  },
  {
    icon: <AssignmentTurnedInIcon />,
    text: "Direct outreach to passive, high-performing technical professionals",
  },
  {
    icon: <CheckCircleIcon />,
    text: "Structured interviews focused on delivery, not just degrees",
  },
];
const managementList = [
  {
    icon: <GroupIcon />,
    text: "Mapping of talent by asset class, contract structure and reporting lines",
  },
  {
    icon: <EmojiPeopleIcon />,
    text: "Outreach to FM professionals delivering in aligned environments",
  },
  {
    icon: <AssignmentTurnedInIcon />,
    text: "Role-specific assessment across compliance, stakeholder and service metrics",
  },
  {
    icon: <CheckCircleIcon />,
    text: "One appointment, who can step in and deliver",
  },
];
const HowWeRecruit: React.FC<HowWeRecruitProps> = ({
  construction = false,
  managementPage = false,
  engineering = false,
  property = false,
  resources = false,
  heading,
  title,
  subTitle,
  description,
  description2,
  description3,
}) => {
  return (
    <Box sx={{ backgroundColor: "#D4E1EF66" }}>
      <Box sx={{ color: "#132D46", px: { xs: 2, md: 10 }, py: { xs: 4, md: 8 } }}>
        <Heading
          text={heading}
          textColor="#132D46"
          dividerColor="#132D46"
        />
        <Box sx={{ p: 4 }}>
          <Grid container spacing={4}>
            {/* Left Side */}
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  fontFamily: '"Helvetica Neue", sans-serif',
                  fontWeight: 700,
                  fontSize: "48px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#2E2C38",
                  mb: 2,
                }}
              >
                {title?.split("/")[0]}
                <br />
                {title?.split("/")[1]}
              </Typography>

              <Typography
                sx={{
                  fontFamily: '"Helvetica Neue", sans-serif',
                  fontWeight: 500,
                  fontSize: "24px",
                  lineHeight: "100%",
                  color: "#2E2C38",
                  mb: 2,
                }}
              >
                {subTitle}
              </Typography>

              <Typography
                sx={{
                  fontFamily: '"Helvetica Neue", sans-serif',
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "140%",
                  color: "#2E2C38",
                  mb: 3,
                }}
              >
                {description?.split("/")[0]}
                {description?.split("/")[1]}
              </Typography>

              <CustomButton
                text="Build Your Team"
                sx={{
                  borderColor: "#2E2C38",
                  color: "#2E2C38",
                  fontFamily: '"Helvetica Neue", sans-serif',
                  textTransform: "none",
                  fontWeight: 500,
                }}
              />
            </Grid>

            {/* Right Side */}
            <Grid item xs={12} md={6}>
              {engineering &&
                engineeringList.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Box sx={{ color: "#2E2C38", mt: "4px" }}>{item.icon}</Box>
                    <Typography
                      sx={{
                        fontFamily: '"Helvetica Neue", sans-serif',
                        fontWeight: 700,
                        fontSize: "24px",
                        lineHeight: "100%",
                        color: "#2E2C38",
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                ))}
              {construction &&
                constructionList.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Box sx={{ color: "#2E2C38", mt: "4px" }}>{item.icon}</Box>
                    <Typography
                      sx={{
                        fontFamily: '"Helvetica Neue", sans-serif',
                        fontWeight: 700,
                        fontSize: "24px",
                        lineHeight: "100%",
                        color: "#2E2C38",
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                ))}
              {property &&
                propertyList.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Box sx={{ color: "#2E2C38", mt: "4px" }}>{item.icon}</Box>
                    <Typography
                      sx={{
                        fontFamily: '"Helvetica Neue", sans-serif',
                        fontWeight: 700,
                        fontSize: "24px",
                        lineHeight: "100%",
                        color: "#2E2C38",
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                ))}
              {resources &&
                resourceList.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Box sx={{ color: "#2E2C38", mt: "4px" }}>{item.icon}</Box>
                    <Typography
                      sx={{
                        fontFamily: '"Helvetica Neue", sans-serif',
                        fontWeight: 700,
                        fontSize: "24px",
                        lineHeight: "100%",
                        color: "#2E2C38",
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                ))}

              {managementPage &&
                managementList.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Box sx={{ color: "#2E2C38", mt: "4px" }}>{item.icon}</Box>
                    <Typography
                      sx={{
                        fontFamily: '"Helvetica Neue", sans-serif',
                        fontWeight: 700,
                        fontSize: "24px",
                        lineHeight: "100%",
                        color: "#2E2C38",
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                ))}
              <Typography
                sx={{
                  fontFamily: '"Helvetica Neue", sans-serif',
                  fontWeight: 500,
                  fontSize: "16px",
                  color: "#2E2C38",
                  mt: 2,
                }}
              >
                {description2}
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"Helvetica Neue", sans-serif',
                  fontWeight: 500,
                  fontSize: "16px",
                  color: "#2E2C38",
                  mt: 2,
                }}
              >
                {description3}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default HowWeRecruit;
