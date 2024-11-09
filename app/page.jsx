'use client';

import { useEffect, useRef } from 'react';
import './globals.css';
import { Box } from '@mui/material';
import Home from './home';



function HomePage() {

  useEffect(() => {
  }, []);

  return (
    <Box >
      {/* <Header homeRef={homeRef} /> */}
      <Box className=" trigger-start" id="home-section">
        <Home />
      </Box>
    </Box>
  );
}

export default HomePage;
