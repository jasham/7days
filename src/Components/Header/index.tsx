// prettier-ignore
'use client';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
const Navbar = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        marginRight: "0px",
      }}
    >
      <Toolbar sx={{margin:"auto"}}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "90vw",
          }}
        >
          <Box sx={{ paddingTop: "10px" }}>
            <Image src={"/Logo.svg"} alt="Client Logo" width={169} height={60} />
          </Box>
          <Box
            sx={{
              paddingTop: "10px",
              fontWeight: 400,
              display: "flex",
              gap: "40px",
              justifyContent: "space-between",
              color: "white",
              letterSpacing: "0.8em",
              textAlign: "center",
            }}
          >
            <Button color="inherit">About</Button>
            <Button color="inherit">Recruitment</Button>
            <Button color="inherit">Advisory & Consulting</Button>
            <Button color="inherit">Resources</Button>
            <Button color="inherit">Contact</Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
