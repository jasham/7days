"use client";
import React from "react";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Heading from "../Heading/Heading";
import { OurNetworkSectionProps } from "@/types/permanentRecruitmentInterfaces";
import { Button } from "../Button/Button";

const Bullet: React.FC<{ size?: number }> = ({ size = 8 }) => (
  <ListItemIcon sx={{ minWidth: size + 4 }}>
    <FiberManualRecordIcon sx={{ fontSize: size }} />
  </ListItemIcon>
);

export default function OurNetworkSection({
  heading,
  description,
  bottomText,
  image,
  mt,
  mb,
  sections,
  header,
}: OurNetworkSectionProps) {
  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: { xs: 4, md: 8 } }}>
      <Heading
        text={header}
        textColor="#132D46"
        dividerColor="#132D46"
        dividerHeight="1px"
        marginBottom="16px"
      />

      <Grid container spacing={4} alignItems="flex-start">
        {/* Left: Heading + Image */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {heading && (
              <Typography variant="h3" color="#132D46" fontWeight={700}>
                {heading}
              </Typography>
            )}
            {image && (
              <Box
                component="img"
                src={image}
                alt={heading}
                sx={{ width: "100%", borderRadius: 2, objectFit: "cover" }}
              />
            )}
          </Box>
        </Grid>

        {/* Right: Description + Lists */}
        <Grid item xs={12} md={6}>
          {description && (
            <Typography
              variant="h5"
              color="#132D46"
              fontWeight={500}
              sx={{ mb }}
            >
              {description}
            </Typography>
          )}

          <List dense sx={{ pl: 2, borderLeft: "1px solid grey" }}>
            {sections.map((section, idx) => (
              <React.Fragment key={idx}>
                {section.header && (
                  <ListItem disableGutters>
                    <ListItemText
                      primary={section.header}
                      primaryTypographyProps={{
                        fontWeight: 600,
                        fontSize: "18px",
                        mb: 1,
                      }}
                    />
                  </ListItem>
                )}

                {section.items?.map((text, i) => (
                  <ListItem key={i} disableGutters sx={{ py: 0.5 }}>
                    <Bullet size={8} />
                    <ListItemText primary={text} />
                  </ListItem>
                ))}

                {section.complexItems?.map((item, i) => (
                  <Box key={i} sx={{ mb: 2 }}>
                    {item.title && (
                      <ListItem disableGutters>
                        <ListItemText
                          primary={item.title}
                          primaryTypographyProps={{
                            fontWeight: 500,
                            fontSize: "18px",
                          }}
                        />
                      </ListItem>
                    )}
                    {item.subItems?.map((sub, j) => (
                      <ListItem key={j} disableGutters sx={{ py: 0.5, pl: 4 }}>
                        <Bullet size={6} />
                        <ListItemText primary={sub} />
                      </ListItem>
                    ))}
                    {item.body && (
                      <ListItem disableGutters sx={{ py: 0.5 }}>
                        <ListItemText primary={item.body} />
                      </ListItem>
                    )}
                  </Box>
                ))}
              </React.Fragment>
            ))}
          </List>

          {bottomText && (
            <Typography
              sx={{
                fontSize: "16px",
                lineHeight: "1.2",
                color: "#132D46",
                mt: 2,
              }}
            >
              {bottomText}
            </Typography>
          )}
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center" }} mt={2}>
        <Button
          variantStyle="main"
          buttonColor="#132D46"
          buttonBorderColor="#132D46"
          buttonBgColor="transparent"
          onClick={() => {
            alert("begining");
          }}
        >
          Ready to Build What’s Next?
        </Button>
      </Box>
    </Box>
  );
}
