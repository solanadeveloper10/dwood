import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { HEADER_HEIGHT } from "../constants";

const Header: React.FC = () => (
  <AppBar
    position='fixed'
    elevation={0}
    sx={{ backgroundColor: "transparent", height: HEADER_HEIGHT }}
  >
    <Toolbar
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Box
        display='flex'
        alignItems='center'
        gap={2}
        sx={{
          img: {
            borderRadius: 1,
          },
          ".logo_text": {
            color: "white",
            opacity: { xs: 1, md: 0 },
            textShadow:
              "-1px -1px 1px #0f172ab3,1px -1px 1px #0f172ab3,-1px 1px 1px #0f172ab3,1px 1px 1px #0f172ab3",
          },
          "img, .logo_text": {
            transition: "0.3s",
          },
          ":hover": {
            cursor: "pointer",
            ".logo_text": {
              scale: 1.1,
              color: "primary.main",
              opacity: 1,
            },
            img: {
              transform: "rotate(15deg)",
            },
          },
        }}
      >
        <img height={HEADER_HEIGHT - 24} src='/logo1.png' />
        <Typography variant='h5' color='text.primary' className='logo_text'>
          HypeUp
        </Typography>
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "block" },
        }}
      >
        <Button>Introduction</Button>
        <Button>How it works</Button>
        <Button>Function</Button>
      </Box>
      <Button variant='outlined'>Buy</Button>
    </Toolbar>
  </AppBar>
);

export default Header;
