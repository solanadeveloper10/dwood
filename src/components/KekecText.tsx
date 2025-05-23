import React, { useState } from "react";
import { Box, keyframes, TextField, Typography } from "@mui/material";

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
const formatterMap = {
  q: "q",
  w: "w",
  e: "ê",
  r: "r",
  t: "†",
  y: "y",
  u: "û",
  i: "ï",
  o: "ô",
  p: "p",
  a: "â",
  s: "s",
  d: "d",
  f: "f",
  g: "g",
  h: "h",
  j: "j",
  k: "k",
  l: "l",
  z: "z",
  x: "x",
  c: "c",
  v: "v",
  b: "b",
  n: "n",
  m: "m",

  Q: "Q",
  W: "W",
  E: "Ê",
  R: "R",
  T: "†",
  Y: "Y",
  U: "Û",
  I: "Ï",
  O: "Ô",
  P: "P",
  A: "Â",
  S: "S",
  D: "D",
  F: "F",
  G: "G",
  H: "H",
  J: "J",
  K: "K",
  L: "L",
  Z: "Z",
  X: "X",
  C: "C",
  V: "V",
  B: "B",
  N: "N",
  M: "M",
};

const KekecText: React.FC = () => {
  const [value, setValue] = useState("");

  const formattedText = [...value]
    //@ts-expect-error qweqwe
    .map((c) => (formatterMap[c] as string) || c)
    .join("");

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: { xs: "start", md: "center" },
        color: "#fff",
        border: "1px solid",
      }}
      textAlign='center'
      mt={4}
    >
      <Box
        width={{ xs: "100%", md: "50%" }}
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: 1,
        }}
      >
        <Typography
          sx={{
            animation: `${rotate} 2s linear infinite`,
            color: "#fff9",
          }}
          mb={2}
        >
          MAKE YOUR OWN DWOOD-TEXT
        </Typography>
        <TextField
          value={value}
          sx={{
            fontFamily: "Arial",
            fontSize: 20,
            maxWidth: { xs: 200, md: 300 },
            border: "2px solid #c0c0c0",
            borderRadius: "10px",
            backgroundColor: "#fff",
            mb: 2,
            fontWeight: "bold",
          }}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          slotProps={{ input: { sx: { fontSize: 20, fontWeight: "bold" } } }}
          placeholder='Type here...'
        />
        <Typography
          sx={{
            fontFamily: "Bookman",
            backgroundColor: "khaki",
            borderRadius: "10px",
            padding: "20px",
            textAlign: "start",
            border: "2px solid #c0c0c0",
            fontSize: "20px",
            color: "#000",
            fontWeight: "bold",
          }}
        >
          {formattedText}
        </Typography>
      </Box>
    </Box>
  );
};

export default KekecText;
