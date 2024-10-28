import { Box, Stack, Typography } from '@mui/material';
import styles from './About.module.css';


function About() {
  return (
    <Stack flexDirection="column" gap={1} justifyItems="center" alignContent="center" className={styles.aboutContainer}>
      <Stack flexDirection="row" className={styles.description}>
        <Box component='p' className={styles.aboutText}>Hello! I'm a dedicated Full Stack Developer with nearly three years of professional experience. I'm passionate about solving complex problems every day and value a learning mindset and discipline over just knowledge and skills. I'm actively seeking full-time opportunities in Software and AI. Please feel free to reach out!</Box>
      </Stack>
    </Stack >
  );
}

export default About;
