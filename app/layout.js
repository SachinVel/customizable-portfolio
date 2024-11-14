'use client'

import './globals.css';
import Header from './components/header';
import { Box } from '@mui/material';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from 'react';

import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // Specify weights you want to use
  variable: '--font-quicksand',  // Define a CSS variable to use in styles
});

export default function RootLayout({ children }) {

  const particlesInit = useCallback(async engine => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadFull(engine);
  }, []);

  return (
    <html lang="en" className={quicksand.variable}>
      <body>
        <Box className='home-container'>
          <Particles
            className='animation-screen'
            id="tsparticles"
            init={particlesInit}
            options={{
              fullScreen: { enable: false },
              background: {
                color: {
                  value: "#171E28",
                },
              },
              fpsLimit: 120,
              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: "#ffffff",
                  distance: 200,
                  enable: false,
                  opacity: 0.5,
                  width: 1,
                },
                move: {
                  direction: "bottom",
                  enable: true,
                  outModes: {
                    default: "out",
                  },
                  random: false,
                  speed: 1.5,
                  straight: true,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 40,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 3 },

                },
              },
              detectRetina: true,
            }}
          />
        </Box>
        <Header />
        <div className="h-[150px]">
        </div>
        {children}
      </body>
    </html>
  )
}
