import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Banner from "./Banner";
import FlyingImage from "./FlyingImage";
import BuySection from "./BuySection";
import GradientBlock from "./GradientBlock";
import GradientBlock2 from "./GradientBlock2";
import KekecText from "./KekecText";
import GifBlock from "./GifBlock";
import VideoBlock from "./VideoBlock";

const MainContent: React.FC = () => {
  useEffect(() => {
    const hoverTarget = document.getElementById("hover1");
    const hoverTarget2 = document.getElementById("hover2");
    const hoverTarget3 = document.getElementById("hover3");
    const hoverTarget4 = document.getElementById("hover4");
    const hoverTarget5 = document.getElementById("hover5");
    const hoverTarget6 = document.getElementById("hover6");
    const hoverTarget7 = document.getElementById("hover7");

    const cursor = document.getElementById("custom-cursor");

    if (cursor) {
      [
        hoverTarget,
        hoverTarget2,
        hoverTarget3,
        hoverTarget4,
        hoverTarget5,
        hoverTarget6,
        hoverTarget7,
      ].forEach((hover) => {
        if (hover) {
          hover.addEventListener("mouseenter", () => {
            cursor.style.width = "100px";
            cursor.style.height = "100px";
          });

          hover.addEventListener("mouseleave", () => {
            cursor.style.width = "32px";
            cursor.style.height = "32px";
          });

          hover.addEventListener("click", () => {
            cursor.style.width = "32px";
            cursor.style.height = "32px";
          });
        }
      });
    }

    const moveCursor = (e: { clientX: number; clientY: number }) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);
  return (
    <Box
      sx={{
        backgroundImage: "url(/background.png)",
        backgroundAttachment: "fixed",
        backgroundPosition: { xs: "left", md: "center" },
        backgroundSize: "contain",
      }}
    >
      <audio
        src='/music.mp3'
        style={{
          position: "fixed",
          zIndex: 1,
          top: 0,
          left: 0,
          opacity: 0.6,
        }}
        autoPlay
        controls
        loop
        id='audio'
      ></audio>

      <Banner />
      <FlyingImage />
      <VideoBlock />
      <BuySection />
      <GradientBlock />
      <GradientBlock2 />
      <KekecText />
      <GifBlock />
    </Box>
  );
};

export default MainContent;
