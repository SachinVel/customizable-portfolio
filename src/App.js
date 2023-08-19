import { useEffect, useRef } from 'react';
import './App.css';
import fullpage from 'fullpage.js';
import Home from './component/Home/Index';
import Experience from './component/Experience';
import About from './component/About';
import { Box } from '@mui/material';
import { gsap } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin);

function App() {

  const bodyRef = useRef(null);
  const sectionIdList = ['home', 'about', 'experience']
  let curSection = useRef(1);
  let isScrollInProgress = useRef(false);
  let scrollRecent = useRef(0);

  const onScrollComplete = () => {
    scrollRecent.current = performance.now();
    setTimeout(()=>{
      isScrollInProgress.current = false;
    },500);
  }

  const handleScroll = async (event) => {
    let sectionNum = curSection.current;
    if (event.deltaY > 0 && !isScrollInProgress.current && sectionNum < sectionIdList.length && event.timeStamp>scrollRecent.current) {
      isScrollInProgress.current = true;
      ++sectionNum;
      curSection.current = sectionNum;
      let sectionId = `#${sectionIdList[sectionNum - 1]}-section`;
      gsap.to(bodyRef.current, { duration: 1, scrollTo: sectionId, onComplete: onScrollComplete });
    } else if (event.deltaY < 0 && !isScrollInProgress.current && sectionNum > 1 && event.timeStamp>scrollRecent.current) {
      isScrollInProgress.current = true;
      --sectionNum;
      curSection.current = sectionNum;
      let sectionId = `#${sectionIdList[sectionNum - 1]}-section`;
      gsap.to(bodyRef.current, { duration: 1, scrollTo: sectionId, onComplete: onScrollComplete });
    }
  }

  return (
    <Box id="fullpage" ref={bodyRef} onWheel={handleScroll} >
      <Box className="section" id="home-section">
        <Home />
      </Box>
      <Box className="section" id="about-section">
        <About />
      </Box>
      <Box className="section" id="experience-section">
        <Experience />
      </Box>
    </Box>
  );
}

export default App;
