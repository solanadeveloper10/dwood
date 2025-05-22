import React from "react";
import { Box, Container, Typography } from "@mui/material";
import InfoCard from "./InfoCard";

const cards = [
  {
    index: 1,
    question: "Tired of Biased Youtubers?",
    label: "Get real AI-driven analysis, not someone's personal position.",
  },
  {
    index: 2,
    question: "Confused by Complex Charts?",
    label:
      "Splat draws indicators and patterns for you in real time. Splat guides you step by step.",
  },
  {
    index: 3,
    question: "Don't Know Where to Start?",
    label: "We simplify trading into Easy, Advanced, and Expert insights.",
  },
];

const InfoBlock: React.FC = () => (
  <Box
    sx={{ backgroundColor: "background.paper" }}
    minHeight='100vh'
    py={{ xs: 4, md: 10 }}
  >
    <Container>
      <Box display='flex' flexDirection={{ xs: "column", md: "row" }} gap={5}>
        <Box maxWidth={{ md: "40%" }}>
          <Typography variant='h2' mb={2}>
            Trading doesn't have to feel like a different language
          </Typography>
          <Typography variant='body1' mb={2}>
            We built SPLAT to provide your trading journey with solutions that
            make it easier, so you can enjoy life more.
          </Typography>
          <Box width='100%' component='img' src='/image1.png' />
        </Box>
        <Box display='flex' flexDirection='column' gap={3} width='100%'>
          {cards.map((item) => (
            <InfoCard key={item.index} {...item} />
          ))}
        </Box>
      </Box>
    </Container>
  </Box>
);

export default InfoBlock;
