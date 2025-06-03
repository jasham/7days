import React from "react";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import SubdirectoryArrowLeftIcon from "@mui/icons-material/SubdirectoryArrowLeft";
import { TimelineItem, TimelinePageProps } from "@/types/aboutUsInterface";

const renderTimeline = (data: TimelineItem[]) => (
  <List sx={{ pl: 3 }}>
    {data.map((item, index) => (
      <Box key={index}>
        <ListItem
          alignItems="flex-start"
          sx={{
            pl: 1.5,
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              left: "21px",
              top: "40px",
              height: "55px",
              width: "2px",
              bgcolor: "#ccc",
              zIndex: 0,
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: "32px", position: "relative", zIndex: 1 }}>
            <RadioButtonUncheckedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  {item.year}
                </Typography>
                <SubdirectoryArrowLeftIcon
                  fontSize="small"
                  sx={{ transform: "rotate(-90deg)", color: "#666" }}
                />
              </Box>
            }
            secondary={<Typography variant="body1">{item.description}</Typography>}
          />
        </ListItem>
      </Box>
    ))}
  </List>
);

const TimelinePage: React.FC<TimelinePageProps> = ({ data, content }) => {
  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: { xs: 4, md: 8 } }}>
      <Typography variant="h3" mb={3} color="#132D46" fontWeight="bold">
        Where We Started
      </Typography>

      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" color="text.secondary" whiteSpace="pre-line">
            {content.left}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" color="text.secondary" whiteSpace="pre-line">
            {content.right}
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom color="#132D46" fontWeight="bold">
            Howard Recruitment Timeline
          </Typography>
          {renderTimeline(data.howard)}
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom color="#132D46" fontWeight="bold">
            Guy Ingleby Timeline
          </Typography>
          {renderTimeline(data.guy)}
        </Grid>
      </Grid>

      <Box sx={{ width: "100%", position: "relative", height: 80, mt: -2, mb: 2 }}>
        <Box
          sx={{ position: "absolute", left: "45px", top: "-60px", width: "2px", height: "107px", bgcolor: "#ccc" }}
        />
        <Box
          sx={{ position: "absolute", right: "45.1%", top: 0, width: "2px", height: "47px", bgcolor: "#ccc" }}
        />
        <Box
          sx={{
            position: "absolute",
            left: "3.5%",
            top: "20px",
            width: "51.4%",
            height: "40px",
            borderBottom: "2px solid #ccc",
            borderRadius: "0 0 20px 20px",
          }}
        />
        <ArrowDownwardIcon
          sx={{
            position: "absolute",
            left: "3.5%",
            top: "51.4px",
            width: "51%",
            height: "40px",
            color: "#ccc",
          }}
        />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Box sx={{ textAlign: "center", width: "20%", ml: 4 }}>
          <Typography variant="h3" pb={2}>
            2017
          </Typography>
          <Typography variant="body1">
            Howard Recruitment & Henton Consulting merge and restructure
          </Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            p: 2,
            border: "1px solid green",
            borderRadius: "50%",
            width: 180,
            height: 180,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <Typography variant="h3" sx={{ color: "green", fontWeight: "bold", pb: 1 }}>
            2025
          </Typography>
          <Typography variant="body2" sx={{ color: "green" }}>
            Henton Consulting is relaunched and rebranded
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TimelinePage;