import { Box, Stack, Typography } from '@mui/material';
import styles from './Experience.module.css';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useEffect, useState } from 'react';


function Experience() {

  const ExperienceInfo = ({title,timeInterval,skills})=>{
    return (
      <Stack className={styles.ExperienceInfo} flexDirection="column" justifyContent="space-around" alignItems="center">
          <span className={styles.ExperienceTitle}>{title}</span>
          <span>{timeInterval}</span>
      </Stack>
    )
  }
  return (
    <Box className={styles.ExperienceContainer}>
      <Typography variant='h3' className={styles.sectionHeading}>Experience</Typography>
      <br></br>
      <br></br>
      <VerticalTimeline className={styles.VerticalTimeline}>
      <VerticalTimelineElement
          className={styles.VerticalTimelineElement}
          contentStyle={{ background: "#171E28", color: "#fff", width:"80%", left:"calc( 20% + 200px )" }}
          contentArrowStyle={{ borderRight: "7px solid  #171E28" }}
          date={<ExperienceInfo title="Full Stack Developer (Part-Time)" timeInterval="May 2023 - Present" skills="AWS, ReactJs, NodeJs, MongoDB, Python"/>}
          dateClassName={styles.ExperienceHeader}
          position="right"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<img src="/images/umd.png" alt="myLogo" width="100%"  height="100%"/>}
        >
          <div className={styles.TechnologyUsedSection}><b className={styles.TechnologyUsedText}>Technologies Used : </b>AWS, ReactJs, NodeJs, MongoDB, Python</div>
          <ul>
            <li>Architected and managing a robust AWS infrastructure with 3+ EC2 instances and 5+ S3 Buckets for seamless operation of Node.js and React applications.</li>
            <br></br>
            <li>Designed and implemented a Node.js WebSocket solution for real-time data transfer, achieving a 50% boost in responsiveness.</li>
            <br></br>
            <li>Enhanced gigabyte-scale data automation using Python parallel processing, Linux scripts, NumPy, and Pandas, cutting processing time from 2 days to 8 hours.</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className={styles.VerticalTimelineElement}
          contentStyle={{ background: "#171E28", color: "#fff", width:"80%", left:"calc( 20% + 200px )" }}
          contentArrowStyle={{ borderRight: "7px solid  #171E28" }}
          date={<ExperienceInfo title="ReactJS Developer (Part-Time)" timeInterval="March 2023 - May 2023" skills=" ReactJs"/>}
          dateClassName={styles.ExperienceHeader}
          position="right"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<img src="/images/umd.png" alt="myLogo" width="100%"  height="100%"/>}
        >
          <div className={styles.TechnologyUsedSection}><b className={styles.TechnologyUsedText}>Technologies Used : </b> ReactJs</div>
          <ul>
            <li>Migrated a 20-page website with complex data visualizations from vanilla javascript to React.js, cutting page load times by 30% and reducing code complexity by 20%.</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className={styles.VerticalTimelineElement}
          contentStyle={{ background: "#171E28", color: "#fff", width:"80%", left:"calc( 20% + 200px )" }}
          contentArrowStyle={{ borderRight: "7px solid  #171E28" }}
          date={<ExperienceInfo title="M.Eng Software Engineer Graduate" timeInterval="August 2022 - May 2024"/>}
          dateClassName={styles.ExperienceHeader}
          position="right"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff",  }}
          icon={<img src="/images/umd.png" alt="myLogo" width="100%"  height="100%"/>}
        >
          <div className={styles.TechnologyUsedSection}><b className={styles.TechnologyUsedText}>Courses : </b> Cloud Security, Software Requirements and Testing, Data Algorithms, Introduction to Secure Coding</div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className={styles.VerticalTimelineElement}
          contentStyle={{ background: "#171E28", color: "#fff", width:"80%", left:"calc( 20% + 200px )" }}
          contentArrowStyle={{ borderRight: "7px solid  #171E28" }}
          date={<ExperienceInfo title="Full Stack Engineer" timeInterval="Jun 2019 - July 2022"/>}
          dateClassName={styles.ExperienceHeader}
          position="right"
          iconStyle={{ background: "#fff", color: "#fff" }}
          icon={<img src="/images/zoho.png" alt="myLogo" width="80%"  style={{margin:"20% 10%"}} height="60%"/>}
        >
          <div className={styles.TechnologyUsedSection}><b className={styles.TechnologyUsedText}>Technologies Used : </b> Java EE, JSP & Servlet, Jersey, MySQL, HTML/CSS, Jquery</div>
          <ul>
            <li>Created a responsive web video editor, using a unique approach, which has been adopted by 10+ internal teams, resulting in a 66.7% adoption rate.</li>
            <li>Designed 10+ normalized RDBMS tables and crafted 25+ responsive REST APIs, Achieving responses within 100ms milliseconds under normal conditions</li>
            <li>Developed and implemented more than 50 test cases for our products using Postman, Jasmine, JUnit, and Selenium, increasing deployment speed by 60%, enabling daily updates.</li>
            <li>Participated in building an internal testing tool covering API, unit, and functional testing, yielding a 20% reduction in testing time and a 15% boost in development efficiency</li>
          </ul>
        </VerticalTimelineElement>
        </VerticalTimeline>


    </Box>

  );
}

export default Experience;
