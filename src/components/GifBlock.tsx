import React from "react";
import { Box } from "@mui/material";

const GifBlock: React.FC = () => (
  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {[
      "dance-1.gif",
      "dance-2.gif",
      "dance-3.gif",
      "dance-4.gif",
      "dance-5.gif",
      "dance-6.gif",
      "dance-3.gif",
      "dance-4.gif",
      "dance-2.gif",
      "dance-3.gif",
      "dance-4.gif",
      "dance-5.gif",
      "dance-7.gif",
      "dance-8.gif",
      "dance-9.gif",
      "dance-10.gif",
      "Flute2.gif",
      "Flute3.gif",
      "Flute4.gif",
      "Flute5.gif",
    ].map((gif) => (
      <Box
        component='img'
        src={gif}
        sx={{
          flex: "0 0 33.33%",
          maxWidth: 300,
          margin: "10px",
          cursor: "pointer",
          transition: "transform .3s ease",
        }}
      />
    ))}
  </Box>
);

export default GifBlock;
