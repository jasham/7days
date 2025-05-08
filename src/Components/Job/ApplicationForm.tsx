'import client';
import React, { useState } from 'react';
import {
  Paper,
  Typography,
  Box,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {
  ArrowRightAlt,
} from "@mui/icons-material";

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    coverLetter: '',
    cv: null as File | null,
    consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, checked, type } = e.target;
    setFormData((fd) => ({
      ...fd,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFormData((fd) => ({ ...fd, cv: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Paper elevation={0}
    sx={{
      p: 4,
      borderRadius: 2,
    }}>
      <Typography variant="h5" fontWeight="semibold" gutterBottom>
        Apply for this Job
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          {['name', 'email', 'phone'].map((field) => (
            <Grid item xs={12} key={field}>
              <TextField
                fullWidth
                name={field}
                label={field.charAt(0).toUpperCase() + field.slice(1)}
                variant="filled"
                value={formData[field as 'name' | 'email' | 'phone']}
                onChange={handleChange}
                InputProps={{ disableUnderline: true }}
                sx={{
                  bgcolor: '#F3F5F7',
                  borderRadius: 2,
                }}
                required
              />
            </Grid>
          ))}

          <Grid item xs={12}>
            <TextField
              fullWidth
              name="coverLetter"
              label="Cover Letter"
              variant="filled"
              multiline
              minRows={4}
              value={formData.coverLetter}
              onChange={handleChange}
              InputProps={{ disableUnderline: true }}
              sx={{
                bgcolor: '#F3F5F7',
                borderRadius: 2,
              }}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom>
              Upload a CV *
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                bgcolor: '#F3F5F7',
                borderRadius: 2,
                p: 1,
              }}
            >
                <Button
                component="label"
                variant="outlined"
                size="small"
                startIcon={"No File Chosen"}
                sx={{ textTransform: 'none', textAlign: 'center', color: 'text.secondary', borderColor: 'text.secondary', '& .MuiButton-startIcon': { margin: 0 } }}
                >
                <input
                  type="file"
                  hidden
                  onChange={handleFile}
                  accept=".pdf,.doc,.docx"
                />
                </Button>
                <Box sx={{ flexGrow: 1, pl: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  {formData.cv?.name || 'No File Chosen'}
                </Typography>
              </Box>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Upload your CV to accompany your application for this job.
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  color="primary"
                />
              }
              label={
                <Typography variant="body2" color="text.secondary">
                  Please tick this box to consent to us using your data. See our{' '}
                  <Link href="#" underline="hover">
                    privacy policy
                  </Link>
                  .
                </Typography>
              }
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              endIcon={<ArrowRightAlt sx={{ ml: 1 }} />}
              sx={{
              bgcolor: '#fff',
              color: 'text.secondary',
              border: '1px solid',
              borderColor: 'text.secondary',
              boxShadow: 'none',
              '&:hover': { bgcolor: '#0c4277', color: '#fff' , borderColor: '#0c4277' },
              textTransform: 'none',
              }}
            >
              APPLY NOW
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}