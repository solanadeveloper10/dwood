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
const ping = keyframes`
75%, 100% {
    transform: translateX(-50%) scale(2);
    opacity: 0;
}
`;

const GradientBlock2: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to bottom, #fef08a, #fbcfe8)",
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
            color: "rgb(30,58,138)",
          }}
          mb={3}
        >
          Tokenomics
        </Typography>
      </Box>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        maxWidth={{ md: "70%" }}
        gap={2}
      >
        <Box
          maxWidth={{ xs: 75, md: "70%" }}
          component='img'
          src='/dance-8.gif'
        />
        <Box
          padding='1.5rem'
          position='relative'
          sx={{
            backgroundColor: "#fff",
            border: "4px solid",
            borderRadius: "0.5rem",
            borderColor: "rgb(30, 58, 138)",
            color: "#000",
          }}
        >
          <Typography mb={3}>
            The DWOOD smart contract has 0 tax on all buys and sells
          </Typography>
          <Typography mb={3}>
            The total supply of DWOOD is 1 billion
          </Typography>
          <Typography mb={5}>LIQUIDITY IS LOCKED</Typography>
          <Typography
            width='100%'
            position='absolute'
            bottom={25}
            left='50%'
            sx={{
              transition: "0.3s",
              transform: "translateX(-50%) scale(1.5)",
              animation: `${ping} 1s cubic-bezier(0,0,.2,1) infinite`,
            }}
          >
            †HÊ DÛDÊ FRÔM †HÊ WÔÔDS
          </Typography>
        </Box>
        <Box
          maxWidth={{ xs: 75, md: "70%" }}
          component='img'
          src='/sopilka.gif'
        />
      </Box>
    </Box>
  );
};

export default GradientBlock2;
