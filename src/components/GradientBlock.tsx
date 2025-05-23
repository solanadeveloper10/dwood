import React from "react";
import { Box, keyframes, Typography } from "@mui/material";

const rotate = keyframes`
 0% {
    opacity: 1;
  }
50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
`;

const GradientBlock: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        background: "linear-gradient(to bottom, #f472b6, #a855f7, #4f46e5)",
        color: "#fff",
      }}
      padding={6}
      textAlign='center'
    >
      <Box maxWidth={{ md: "70%" }}>
        <Typography
          fontSize='2.25rem'
          sx={{
            animation: `${rotate} 2s linear infinite`,
            color: "#fff",
            fontWeight: 800,
          }}
          mb={3}
        >
          ABOUT THE BALKAN DWARF TOKEN
        </Typography>
        <Typography mb={5}>
          Once upon a time in the city of Dwood, there lived a peculiar little
          fellow known as the Balkwan dwarf. This pint-sized wonder, born to
          dwarf parents with a penchant for rakija, was a gentle soul but lacked
          any extraordinary talents. The poor Balkwan dwarf was as shy as they
          come and not quite the darling of the town.
        </Typography>
        <Typography mb={5}>
          Once upon a time in the city of Dwood, there lived a peculiar little
          fellow known as the Balkwan dwarf. This pint-sized wonder, born to
          dwarf parents with a penchant for rakija, was a gentle soul but lacked
          any extraordinary talents. The poor Balkwan dwarf was as shy as they
          come and not quite the darling of the town.
        </Typography>
        <Typography mb={5}>
          Once upon a time in the city of Dwood, there lived a peculiar little
          fellow known as the Balkwan dwarf. This pint-sized wonder, born to
          dwarf parents with a penchant for rakija, was a gentle soul but lacked
          any extraordinary talents. The poor Balkwan dwarf was as shy as they
          come and not quite the darling of the town.
        </Typography>
      </Box>
    </Box>
  );
};

export default GradientBlock;
