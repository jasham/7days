// prettier-ignore
// 'use client';
// import { Box, Divider, Grid, Typography } from "@mui/material";
// import React from "react";
// import PartnerCard from "../Card/index";

// import ChangeCircleOutlinedIcon from "@mui/icons-material/ChangeCircleOutlined";
// import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
// import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
// import CustomButton from "../Button";
// interface CardData {
//   title: string;
//   description: string;
// }
// interface CardList {
//   myCards: CardData[];
// }
// interface Experts {
//   CardList: CardList;
//   title: string;
//   subTitle: string;
// }
// const WhyPartnerSection: React.FC<Experts> = ({
//   CardList,
//   title,
//   subTitle,
// }: Experts) => {
//   return (
//     <Box px={4} py={8} maxWidth="lg" mx="auto" sx={{ color: "#132D46" }}>
//       <Typography variant="overline" color="textSecondary" gutterBottom>
//         Work With The Experts
//       </Typography>
//       <Divider sx={{ mb: 4 }} />
//       <Grid
//         container
//         justifyContent="space-between"
//         alignItems="center"
//         spacing={2}
//         mb={4}
//       >
//         <Grid item xs={12} md={6}>
//           <Typography variant="h4" fontWeight="bold" gutterBottom>
//             {title}
//           </Typography>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Typography variant="body1" color="#132D46">
//             {subTitle}
//           </Typography>
//         </Grid>
//       </Grid>

//       <Grid container spacing={4} alignItems="stretch">
//         {/* First Card */}
//         <Grid item xs={12} md={4}>
//           <PartnerCard
//             icon={<ChangeCircleOutlinedIcon fontSize="inherit" />}
//             title={CardList.myCards[0].title}
//             description={CardList.myCards[0].description}
//             color="#132D46"
//           />
//         </Grid>

//         {/* Second Card */}
//         <Grid item xs={12} md={4}>
//           <PartnerCard
//             icon={<TimelineOutlinedIcon fontSize="inherit" />}
//             title={CardList.myCards[1].title}
//             description={CardList.myCards[1].description}
//             color="#132D46"
//           />
//         </Grid>

//         {/* Third Card */}
//         <Grid item xs={12} md={4}>
//           <PartnerCard
//             icon={<HandshakeOutlinedIcon fontSize="inherit" />}
//             title={CardList.myCards[2].title}
//             description={CardList.myCards[2].description}
//             color="#132D46"
//           />
//         </Grid>
//       </Grid>

//       <Box textAlign="center" mt={6}>
//         <CustomButton
//           text={"Read to Build What’s Next?"}
//           onClick={() => alert("beginning")}
//           variant="outlined"
//           sx={{ color: "#132D46", borderColor: "#132D46" }}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default WhyPartnerSection;

// prettier-ignore
'use client';
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import PartnerCard from "../Card/index";

import ChangeCircleOutlinedIcon from "@mui/icons-material/ChangeCircleOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
// import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import CustomButton from "../Button";

interface CardData {
  title: string;
  description: string;
}
interface CardList {
  myCards: CardData[];
}
interface Experts {
  CardList: CardList;
  title: string;
  subTitle: string;
}

const WhyPartnerSection: React.FC<Experts> = ({
  CardList,
  title,
  subTitle,
}: Experts) => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={4}>
          <Typography variant="overline" color="textSecondary" gutterBottom>
            Work With The Experts
          </Typography>
          <Divider sx={{ mx: "auto", width: 80, my: 2 }} />
        </Box>

        <Grid container justifyContent="center" spacing={2} mb={6}>
          <Grid item xs={12} md={8}>
            <Typography
              variant="h4"
              fontWeight="bold"
              align="center"
              gutterBottom
            >
              {title}
            </Typography>
            <Typography variant="body1" align="center" color="#132D46">
              {subTitle}
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <PartnerCard
              icon={<ChangeCircleOutlinedIcon fontSize="inherit" />}
              title={CardList.myCards[0].title}
              description={CardList.myCards[0].description}
              color="#132D46"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <PartnerCard
              icon={<ChangeCircleOutlinedIcon fontSize="inherit" />}
              title={CardList.myCards[1].title}
              description={CardList.myCards[1].description}
              color="#132D46"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <PartnerCard
              icon={<HandshakeOutlinedIcon fontSize="inherit" />}
              title={CardList.myCards[2].title}
              description={CardList.myCards[2].description}
              color="#132D46"
            />
          </Grid>
        </Grid>

        <Box textAlign="center" mt={{ xs: 6, md: 8 }}>
          <CustomButton
            text="Read to Build What’s Next?"
            onClick={() => alert("beginning")}
            variant="outlined"
            sx={{
              color: "#132D46",
              borderColor: "#132D46",
              px: 4,
              py: 1.5,
              fontWeight: "medium",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default WhyPartnerSection;
