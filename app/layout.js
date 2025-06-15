'use client'

import './globals.css';
import { Box } from '@mui/material';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback, useEffect, useState } from 'react';

import { ThemeProvider } from "./components/theme-provider";
import ParticlesWrapper  from "./components/ParticlesWrapper";


import { Quicksand } from 'next/font/google';
import { useTheme } from 'next-themes';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // Specify weights you want to use
  variable: '--font-quicksand',  // Define a CSS variable to use in styles
});

export default function RootLayout({ children }) {

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(()=>{
    console.log('theme: ',theme);
  },[theme])

  

  

  const particlesInit = useCallback(async engine => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadFull(engine);
  }, []);

  if (!mounted) return null;

  return (
    <html lang="en" className={quicksand.variable}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Box className='home-container'>
            <ParticlesWrapper />
          </Box>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
