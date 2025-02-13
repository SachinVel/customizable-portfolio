'use client';

import { useEffect, useState } from 'react';
import './globals.css';

import { Box } from '@mui/material';
import Home from './home';
import Skills from './skills';
import About from './about';
import Experience from './Experience';
import Project from './projects';
import Contact from './contact';
import Header from './components/header';
import validateContent  from './lib/validate';

function HomePage() {

  const [content, setContent] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchContent() {
      try {
        const res = await fetch('/api/content'); // Fetch from API route
        if (!res.ok) {
          throw new Error('Failed to fetch content : check content.yml format');
        }
        const data = await res.json();
        let {isValid, message} = validateContent(data);
        if (isValid) {
          setContent(data); // Load the "home" section from YAML content
          setIsLoaded(true);
        } else {
          setError(message);
        }
      } catch (err) {
        setError(err.message+". Try undoing the recent changes made to content.yml and refresh.");
      }
    }
    fetchContent();
  }, []);

  useEffect(() => {
    if (content) {
      document.title = content.name;
    }
  }, [content]);

  if (error) {
    return (
      <div className="relative text-center bg-white p-5">
      <strong>Error:</strong> {error}
      </div>
    );
  }

  if (content == null) {
    return (<></>);
  }

  return (
    <>
      {
        isLoaded && (
          <Box className="h-min-screen">
            <Header content={content}/>
            <Box className="trigger-start" id="home-section">
              <section id="home" className='relative'>
                <Home content={content.home} />
              </section>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <section id="about" className='relative'>
                <About content={content.about} />
              </section>
              <section id="skills" className='relative'>
                <Skills content={content.skills} />
              </section>
              <br></br>
              <br></br>
              <br></br>
              <section id="experience" className='relative'>
                <Experience content={content.experience} />
              </section>
              <br></br>
              <br></br>
              <br></br>
              <section id="project" className='relative'>
                <Project content={content.projects} />
              </section>
              
              <section id="contact" className='relative'>
                <Contact content={content.contact} name={content.name}/>
              </section>
            </Box>
          </Box>)
      }
    </>


  );
}

export default HomePage;
