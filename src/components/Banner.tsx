import React from "react";
import { keyframes, Box, Typography } from "@mui/material";

const rotate = keyframes`
 0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(360deg);
  }
`;

const rotate2 = keyframes`
 0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Banner: React.FC = () => (
  <Box
    textAlign='center'
    display='flex'
    alignItems='center'
    justifyContent='center'
    flexDirection='column'
  >
    <Box
      maxWidth={{ xs: "100%", md: "50%" }}
      component='img'
      src='/kekecbanner.png'
      mb={4}
      sx={{
        border: 8,
        borderRadius: "10px",
        padding: "10px",
        borderColor: "#66ff003d",
      }}
    />

    <Box position='relative'>
      <Typography color='rgb(234, 179,8)' fontSize='1.5rem' mb={3}>
        Join Social Links
      </Typography>
      <Box
        display='flex'
        gap={6}
        justifyContent='center'
        alignItems='center'
        flexWrap='wrap'
      >
        <Box
          id='hover2'
          component='a'
          href='https://t.me/DWOODwtf'
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          sx={{
            transition: "0.3s",
            ":hover": {
              "#custom-cursor": {
                width: 64,
                height: 64,
              },
              transform: "scale(1.1)",
            },
          }}
        >
          <Box width={{ xs: 50, md: 100 }} component='img' src='/tg.png' />
          <Typography color='rgb(234, 179,8)' fontSize='1.5rem'>
            Telegram
          </Typography>
        </Box>
        <Box
          id='hover3'
          component='a'
          href='https://x.com/DWOODwtf'
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          sx={{
            transition: "0.3s",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          <Box width={{ xs: 50, md: 100 }} component='img' src='/Twitter.png' />
          <Typography color='rgb(234, 179,8)' fontSize='1.5rem'>
            Twitter
          </Typography>
        </Box>
        <Box
          id='hover4'
          component='a'
          href='https://www.dextools.io/app/en/solana/pair-explorer/9Pqa3xWQqq11nfb8cWbh6XJ3mnyEi1sAf2ZZk3pe5ufH?t=1748315195501'
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          sx={{
            transition: "0.3s",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          <Box
            width={{ xs: 50, md: 100 }}
            component='img'
            src='/dextools.png'
          />
          <Typography color='rgb(234, 179,8)' fontSize='1.5rem'>
            Dextools
          </Typography>
        </Box>
        <Box
          id='hover5'
          component='a'
          href='https://dexscreener.com/solana/3V2cC4xAcWvH5t74iKsNJqhpZEudPHCYxxKkpKoCpump'
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          sx={{
            transition: "0.3s",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          <Box
            width={{ xs: 50, md: 100 }}
            component='img'
            src='/dexscrener.png'
          />
          <Typography color='rgb(234, 179,8)' fontSize='1.5rem'>
            Dexscreener
          </Typography>
        </Box>
      </Box>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        mt={2}
        gap={1}
        mb={1}
      >
        <Typography
          sx={{
            textTransform: "uppercase",
            color: "#fff",
            textShadow: "2px 2px 0 #d9570077, 4px 4px 0 #265e32f5",
            "-webkit-text-stroke": "2px #94ad3b91",
            marginBottom: "20px",
            padding: "10px",
            border: "2px solid #9fb7cf",
            borderRadius: "10px",
            background: "#111",
            transform: "skew(-5deg, -5deg)",
            display: "inline-block",
            fontSize: { xs: "0.75rem", md: "1.25rem" },
          }}
        >
          FAIR LAUNCH
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "0.75rem", md: "1.25rem" },
            textTransform: "uppercase",
            color: "#fff",
            textShadow: "2px 2px 0 #d9570077, 4px 4px 0 #265e32f5",
            "-webkit-text-stroke": "2px #94ad3b91",
            marginBottom: "20px",
            padding: "10px",
            border: "2px solid #9fb7cf",
            borderRadius: "10px",
            background: "#111",
            transform: "skew(-5deg, -5deg)",
            display: "inline-block",
          }}
        >
          0% BUY OR SELL TAX!!!!
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: 48,
          textTransform: "uppercase",
          color: "#fff",
          textShadow: "2px 2px 0 #d9570077, 4px 4px 0 #265e32f5",
          "-webkit-text-stroke": "2px #94ad3b91",
          padding: "10px",
          border: "2px solid #9fb7cf",
          borderRadius: "10px",
          background: "#111",
          transformStyle: "preserve-3d",
          animation: `${rotate} 6s linear infinite`,
        }}
      >
        †HÊ DÛDÊ FRÔM †HÊ WÔÔDS
      </Typography>
      <Typography
        position='relative'
        mt={6}
        sx={{
          fontSize: { xs: "0.75rem", md: "1.25rem" },
          textTransform: "uppercase",
          color: "#fff",
          textShadow: "2px 2px 0 #d9570077, 4px 4px 0 #265e32f5",
          "-webkit-text-stroke": "2px #94ad3b91",
          marginBottom: "20px",
          padding: "10px",
          border: "2px solid #9fb7cf",
          borderRadius: "10px",
          background: "#111",
          transform: "skew(-5deg, -5deg)",
          display: "inline-block",
        }}
      >
        3V2cC4xAcWvH5t74iKsNJqhpZEudPHCYxxKkpKoCpump
      </Typography>
      <Box
        position='absolute'
        left='50%'
        sx={{ transform: "translateX(-50%)" }}
      >
        <Box
          sx={{
            width: "100%",
            animation: `${rotate2} 1s linear infinite`,
          }}
          component='img'
          src='/DWOOD.png'
        />
      </Box>
    </Box>
  </Box>
);

export default Banner;
