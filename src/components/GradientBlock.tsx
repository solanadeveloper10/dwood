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
          ABOUT THE DWOOD
        </Typography>
        <Typography mb={5}>
          Once upon a time in the city of woods, there lived a peculiar little fellow known as the Dwood. 
          This pint-sized wonder, born to dwarf parents with a penchant for rakija, was a gentle soul but lacked any extraordinary talents. 
          The poor dude was as shy as they come and not quite the darling of the town.
        </Typography>
        <Typography mb={5}>
          One fateful day, as he was playing outside, the townsfolk, always in search of a good laugh, 
          decided to poke fun at his exceedingly short stature. It was a tough day for our little dude. 
          They even chased him into the deep, dark forest. As he scurried away, he found refuge in an old hut, and his pursuers lost track of him.
        </Typography>
        <Typography mb={5}>
          But here's where the tale takes an enchanting turn.
          Inside that hut, the Dwood stumbled upon a gleaming flute that practically begged for his attention. 
          Without much choice, he picked it up, and something magical happened. 
          As he put the flute to his lips, a melodious tune erupted, one that he'd never played before.
        </Typography>
        <Typography mb={5}>
          The Dwood was entranced by the music, and he couldn't stop playing. 
          He danced and twirled through the forest, lost in a euphoric state, a musical maestro.
          He became one with the flute, and the two of them were inseparable. 
          For what seemed like an eternity, he played the most enchanting melodies known to dwarf-kind.
        </Typography>
         <Typography mb={5}>
          As the story goes, even to this day, the Dwood can be found prancing about that very same forest,
          still playing that magical flute, and having the time of his life.
          Legend has it that if you dare to utter his name thrice at the witching hour, 
          he might just pay you a visit in your dreams, serenading you with that enchanting tune.
          But be ready for an adventure beyond your wildest dreams!
        </Typography>
      </Box>
    </Box>
  );
};

export default GradientBlock;
