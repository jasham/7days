import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

const headings = [
  { variant: "h2", text: "This Is An H2" },
  { variant: "h3", text: "This Is An H3" },
  { variant: "h4", text: "This Is An H4" },
  { variant: "h5", text: "This Is An H5" },
  { variant: "h6", text: "This Is An H6" },
];

const bulletPoints = [
  "Fusce Gravida Neque Convallis A Cras Semper",
  "Tortor At Auctor Urna Nunc",
  "Massas Sed Bibendum Tempus Vivamus",
  "Dignissim Suspendisse Et Enim Et Nibh Mauris Cursus Mattis"
];

const InsightTypographyPage: React.FC = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 6 }}>
      <Typography variant="subtitle2" sx={{ mb: 4 }}>
        INSIGHTS
      </Typography>

      {headings.map((heading, idx) => (
        <Box key={idx} sx={{ mb: 4 }}>
          <Typography variant={heading.variant as any} sx={{ mb: 2 }}>
            {heading.text}
          </Typography>
          <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac turpis hendrerit, suscipit sapien in, porta nibh. Aliquam erat volutpat. Donec nec porta mauris. Suspendisse eget justo vitae justo eleifend accumsan in a est. Vestibulum at lacus vel velit lobortis condimentum.
          </Typography>
        </Box>
      ))}

      <Typography variant="h4" sx={{ mt: 6, mb: 2 }}>
        This Is A List
      </Typography>
      <List>
        {bulletPoints.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemText primary={`• ${item}`} />
          </ListItem>
        ))}
      </List>

      <Typography variant="h4" sx={{ mt: 6, mb: 2 }}>
        This Is A Paragraph
      </Typography>
      <Typography variant="body1" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula tincidunt dui sit amet porttitor. Integer sed lorem libero. Cras dignissim mauris ut nunc tincidunt, a laoreet nulla faucibus. Sed non orci vel magna vulputate tincidunt. Vivamus vitae porttitor magna. Ut sed congue massa.
      </Typography>
    </Box>
  );
};

export default InsightTypographyPage;
