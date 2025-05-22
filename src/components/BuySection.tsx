import React, { useState } from "react";
import { Box, Dialog } from "@mui/material";

const BuySection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box display='flex' justifyContent='center' mt={15}>
      <Dialog open={isOpen} fullWidth maxWidth='lg'>
        <button
          id='hover6'
          onClick={() => {
            setIsOpen(false);
          }}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          data-svelte-h='svelte-743hbk'
        >
          Close
        </button>
        <iframe
          height={800}
          width='100%'
          src='https://app.uniswap.org/#/swap?exactField=input&exactAmount=10&inputCurrency=ETH&outputCurrency=0x8C7AC134ED985367EADC6F727d79E8295E11435c'
        />
      </Dialog>
      <Box
        id='hover7'
        onClick={() => setIsOpen(true)}
        sx={{
          position: "relative",
          width: 30,
          marginRight: "10px",
          background: "linear-gradient(45deg, #ff00ff, #00ffff, #ffff00)",
          color: "#0f0101a2",
          borderRadius: "5px",
          cursor: "pointer",
          writingMode: "vertical-rl",
          textOrientation: "upright",
          padding: "15px 30px",
          boxShadow: "3px 3px 6px #0056b3, -3px -3px 6px #0094ff",
          transition: "all .3s ease",
          fontSize: 18,
          transform: "rotate(4deg)",
          ":hover": {
            transform: "rotate(0deg)",
            boxShadow: "none",
            border: "1px solid #0056b3",
          },
        }}
      >
        EXCHANGE NO WON YUB
      </Box>
      <Box component='img' maxWidth='80%' src='/uniswapbuy.gif' />
    </Box>
  );
};

export default BuySection;
