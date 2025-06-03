"use client";

import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  IconButton,
  Stack,
  Divider,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FolderSimplePlus from "../../../public/FolderSimplePlus.svg";
import Image from "next/image";
import { Button } from "../Button/Button";

const ContactPage: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [talentChecked, setTalentChecked] = useState<boolean>(false);
  const [opportunityChecked, setOpportunityChecked] = useState<boolean>(false);

  return (
    <Box sx={{ padding: 4, px: { xs: 2, md: 10 }, py: { xs: 4, md: 8 } }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" gutterBottom>
            We’re here to help
          </Typography>
          <Typography variant="h6"  maxWidth={400}>
            Whether you’re in search of great employment opportunities or
            quality candidates, we’d love to hear from you. Send us an email or
            drop us a line and we’ll take care of you.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h3" fontWeight={400} gutterBottom>
            Get In Touch Today
          </Typography>

          <Stack direction="row" alignItems="center" spacing={1} mb={3}>
            <EmailIcon fontSize="small" />
            <Typography variant="body2">
              info@hentonconsulting.com.au
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1} mb={5}>
            <PhoneIcon fontSize="small" />
            <Typography variant="body2">0451 231 241</Typography>
          </Stack>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 3 }}>
            <Typography variant="body2" fontWeight={500} gutterBottom>
              Tell us how we can help
            </Typography>

            <FormControlLabel
              control={
                <Checkbox
                  checked={talentChecked}
                  onChange={(e) => setTalentChecked(e.target.checked)}
                />
              }
              label="I'm seeking new talent"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={opportunityChecked}
                  onChange={(e) => setOpportunityChecked(e.target.checked)}
                />
              }
              label="I'm seeking a new opportunity"
            />
          </Box>

          <TextField
            fullWidth
            variant="standard"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ my: 2 }}
          />
          <TextField
            fullWidth
            variant="standard"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ my: 2 }}
          />
          <TextField
            fullWidth
            variant="standard"
            label="Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            sx={{ my: 2 }}
          />

          <Stack direction="row" alignItems="center" sx={{ mt: 2 }}>
            <IconButton>
              <Image src={FolderSimplePlus} alt="Attach File" />
            </IconButton>
            <Typography variant="body2">
              Attach CV or Upload Job Brief
            </Typography>
          </Stack>
          <Divider
              orientation="horizontal"
              flexItem
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.27)",
                width: "100%",
                height: "0.2px",
                mb: 2,
                mx: "auto",
              }}
            />

          <Button
            variantStyle="main"
            buttonColor="#FFFFFF"
            buttonBgColor="#191E29"
            buttonBorderColor="#FFFFFF"
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactPage;
