import React from "react";
import { Box, useMediaQuery } from "@mui/material";

const VideoBlock: React.FC = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <Box display='flex' justifyContent='center' mt={12}>
      <img width={isMobile ? "100%" : "70%"} src='/dwood.gif' />
    </Box>
  );
};

export default VideoBlock;
