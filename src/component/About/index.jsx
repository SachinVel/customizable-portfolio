import { Box, Stack, Typography } from '@mui/material';
import styles from './About.module.css';

function About() {
  return (
    <Stack flexDirection="row" gap={1} justifyItems="center" alignContent="center">
      <Box>
        <Typography>Sachin Velmurugan</Typography>
        <Typography>Graduate Student @ University of Maryland</Typography>
        <Typography>velsachin98@gmail.com</Typography>
      </Box>

    </Stack>
  );
}

export default About;
