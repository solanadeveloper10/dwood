
import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Footer: React.FC = () => (
  <Box sx={{ bgcolor: "grey.200", py: 4, mt: 8 }}>
    <Container>
      <Typography variant="body2" color="textSecondary" align="center">
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </Typography>
    </Container>
  </Box>
);

export default Footer;
