import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import GroupIcon from "@mui/icons-material/Group"; // Replace with actual icons
import { Box, Button, Grid, Typography } from "@mui/material";
import Heading from "../Heading/Heading";
interface HowWeRecruitProps {
  construction?: boolean;
  engineering?: boolean;
  title?: string;
  subTitle?: string;
  description?: string;
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
const HowWeRecruit: React.FC<HowWeRecruitProps> = ({
  construction = false,
  title,
  subTitle,
  description,
}) => {
  return (
    <Box sx={{ backgroundColor: "#D4E1EF66" }}>
      <Box px={4} py={8} maxWidth={"lg"} mx={"auto"}>
        <Heading
          text="CONSTRUCTION RECRUITMENT"
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

              <Button
                variant="outlined"
                sx={{
                  borderColor: "#2E2C38",
                  color: "#2E2C38",
                  fontFamily: '"Helvetica Neue", sans-serif',
                  textTransform: "none",
                  fontWeight: 500,
                }}
              >
                Build Your Team →
              </Button>
            </Grid>

            {/* Right Side */}
            <Grid item xs={12} md={6}>
              {(construction ? constructionList : engineeringList).map(
                (item, index) => (
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
                )
              )}

              <Typography
                sx={{
                  fontFamily: '"Helvetica Neue", sans-serif',
                  fontWeight: 500,
                  fontSize: "16px",
                  color: "#2E2C38",
                  mt: 2,
                }}
              >
                We act quickly and decisively because delays cost money — and
                bad hires cost more
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default HowWeRecruit;
