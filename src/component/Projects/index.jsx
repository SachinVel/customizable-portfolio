import { Box, Stack, Typography } from '@mui/material';
import styles from './Project.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';



function Project() {

  const projects = [
    {
      id: 1,
      title: "Algolab",
      tech: "Spring boot, Java, ReactJs, AWS, MongoDB",
      desc: "Created an e-learning management system (ELMS) facilitating student feedback on courses and lessons, instructor announcements, and issue reporting.",
      github: "https://github.com/enpm613/algolab",
      live: "http://algolab-frontend.s3-website-us-east-1.amazonaws.com"
    },
    {
      id: 2,
      title: "Job Searching Platform",
      tech: "Spring boot, Java, AWS, JavaScript, MySQL",
      desc: "Implemented a dynamic job searching platform aimed at connecting job seekers with prospective employers. This project is secured from top OWASP threats like CSRF, XSRF, Session Hijack",
      github: "https://github.com/SachinVel/job-searching-platform",
      live: "https://job-searching-platform-us-cfeb500fe54c.herokuapp.com"
    },
    {
      id: 3,
      title: "ReactJS Personal Projects",
      tech: "ReactJs",
      desc: "Designed and built 3 web apps - Hangman Game, Task Tracker and Couples Yelp - utilizing core React concepts and methodologies like hooks, context API, reusable UI components and responsive design.",
      github: "https://github.com/SachinVel/task-tracker-app",
    }
  ];

  return (
    <Box className={styles.ProjectContainer}>
      <Typography variant='h3' className={styles.sectionHeading}>Projects</Typography>
      <br></br>
      <br></br>
      <div className={styles.projectGrid}>
        {projects.map(project => (
          <div key={project.id} className={styles.projectCard}>
            <h3>{project.title}</h3>
            <p className={styles.tech}>{project.tech}</p>

            <p className={styles.desc}>{project.desc}</p>

            <div className={styles.links}>
              <a href={project.github} target='_blank'>
                <FontAwesomeIcon icon={faGithub} /> Code
              </a>

              {
                project.live &&
                <a href={project.live} target='_blank'>
                  <FontAwesomeIcon icon={faEnvelope} /> Website
                </a>
              }
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
}

export default Project;
