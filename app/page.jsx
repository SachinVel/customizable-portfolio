'use client';

import { useEffect, useRef, useState } from 'react';
import './globals.css';
import { useRouter } from 'next/navigation';

import { Box } from '@mui/material';
import Home from './home';
import dynamic from 'next/dynamic';
import Skills from './skills';
import About from './about';
import Experience from './experience';

// const About = dynamic(() => import('./about'), { ssr: false });

function HomePage() {

  const [content, setContent] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function fetchContent() {
      const res = await fetch('/api/content'); // Fetch from API route
      const data = await res.json();
      setContent(data); // Load the "home" section from YAML content
      setIsLoaded(true);

    }
    fetchContent();
  }, []);

  if (content == null) {
    return (<></>);
  }

  return (
    <Box className="h-min-screen">
      {/* <Header homeRef={homeRef} /> */}
      <Box className="trigger-start" id="home-section">
        <section id="home" className='relative pt-32 h-min-screen'>
          <Home content={content.home} />
        </section>
        <section id="about" className='relative'>
          <About content={content.about} />
        </section>
        <section id="skills" className='relative'>
          <Skills content={content.skills} />
        </section>
        <section id="experience" className='relative'>
          <Experience content={content.experience} />
        </section>
      </Box>
    </Box>
  );
}

export default HomePage;
