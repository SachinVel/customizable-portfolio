import { useEffect, useRef } from 'react';
import './App.css';
import Home from './component/Home/Index';
import Experience from './component/Experience';
import About from './component/About';
import { Box } from '@mui/material';
import Header from './component/Header';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Skills from './component/Skills';
import Project from './component/Projects';

gsap.registerPlugin(ScrollTrigger);

function App() {

  const homeRef = useRef();
  const bodyRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      bodyRef.current,
      {
        backgroundColor: "#171E28",
      },
      {
        backgroundColor: "#F3CD00",
        scrollTrigger: {
          trigger: homeRef.current,
          start: "bottom 80%",
          end: "bottom 30%",
          scrub: true,
        }
      }
    );
  }, []);

  return (
    <Box ref={bodyRef}>
      <Header homeRef={homeRef} />
      <Box ref={homeRef} className=" trigger-start" id="home-section">
        <Home />
      </Box>
    </Box>
  );
}

export default App;
