// prettier-ignore
'use client';
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Box, Typography } from "@mui/material";

interface TestimonialCardProps {
  quote: string;
  detail: string;
  author: string;
  company: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  detail,
  author,
  company,
}) => {
  return (
    <Box color="white" sx={{ display: "flex", mb: 4 }}>
      <FormatQuoteIcon fontSize="large" sx={{ mr: 1 }} />
      <Box>
      <Box display="flex" alignItems="center" mb={2}>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{
            fontFamily: "Helvetica Neue",
            fontWeight: "500",
            fontSize: "48px",
            lineHeight: "100%",
            letteSrpacing: "0%",
          }}
        >
          {quote}
        </Typography>
      </Box>

      <Typography variant="body1" mb={2}>
        {detail}
      </Typography>

      <Typography variant="body1" fontStyle="italic">
        {author}, <strong>{company}</strong>
      </Typography>
      </Box>
    </Box>
  );
};

export default TestimonialCard;
