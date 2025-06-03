// src/components/Navbar.tsx
'use client';

import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Button } from '../Button/Button';

const navItems = [
  { label: 'About', href: '/about-us' },
  { label: 'Jobs' , href: '/job-board'},
  { label: 'Recruitment', href: '/permanent-recruitment' },
  { label: 'Advisory & Consulting', href: '/advisory' },
  { label: 'Resources', href: '/resources-recruitment' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const drawerList = (
    <Box
      sx={{ width: 240 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navItems.map(({ label, href }) => (
          <ListItem key={label} disablePadding>
            <ListItemButton component="a" href={href}>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          pt: { xs: 3, sm: 4 },
          px: { xs: 2, md: 10 },
        }}
      >
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Image src="/Logo.svg" alt="Client Logo" width={169} height={60} />
        </Box>

        {/* Desktop nav */}
        {!isMobile && (
          <Box
            component="nav"
            sx={{
              display: "flex",
              gap: 6,
              fontWeight: 400,
              color: "white",
              letterSpacing: "0.1em",
            }}
          >
            {navItems.map(({ label, href }) => (
              <Button
                key={label}
                href={href}
                variantStyle="text"
                buttonColor={"#ffffff"}
                sx={{
                  fontSize:"16px"
                }}
                isIcon={false}
              >
                {label}
              </Button>
            ))}
          </Box>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ paddingLeft: 3, paddingRight: 3 }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              {drawerList}
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
