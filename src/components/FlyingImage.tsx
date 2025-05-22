import React, { useEffect } from "react";
import { Box, useMediaQuery } from "@mui/material";

const FlyingImage: React.FC = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  useEffect(() => {
    const image = document.getElementById("flyingImage");
    let angle = 0;
    const radius = isMobile ? 220 : 500;

    function flyInCircle() {
      angle += isMobile ? 0.03 : 0.02;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      if (image) {
        image.style.transform = `translate(${x}px, ${y}px)`;
      }
      requestAnimationFrame(flyInCircle);
    }

    flyInCircle();
  }, []);
  return (
    <Box
      id='flyingImage'
      position='fixed'
      left='50%'
      component='img'
      src='/Flute3.gif'
    />
  );
};

export default FlyingImage;
