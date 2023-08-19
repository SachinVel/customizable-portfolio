import { Stack, Typography } from '@mui/material';
import styles from './Home.module.css';

import { useCallback, useEffect, useRef } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { gsap } from 'gsap';
// import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

const Home = () => {

    const nameText = useRef(null);
    const roleText = useRef(null);
    const scrollElem = useRef(null);

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    useEffect(() => {
        let timeLine = gsap.timeline();
        timeLine.fromTo(nameText.current, { opacity: 0 }, { opacity: 1, duration: 1 })
            .fromTo(roleText.current, { opacity: 0 }, { opacity: 1, duration: 1 })
            .fromTo(scrollElem.current, { opacity: 0 }, { opacity: 1, duration: 1 });
    }, []);

    return (
        <>
            <Stack flexDirection="column" className={styles.homeTextContainer}>
                <Typography sx={{ fontSize: '45px' }} ref={nameText}>Hi. I'm Sachin Velmurugan.</Typography>
                <Typography sx={{ fontSize: '30px' }} ref={roleText}>Full stack web developer</Typography>
            </Stack>

            <div className={styles.scrollDownContainter} ref={scrollElem}>
                <div className={`${styles.chevron} ${styles.chevronFirstChild}`}></div>
                <div className={`${styles.chevron} ${styles.chevronSecondChild}`}></div>
                <div className={`${styles.chevron} ${styles.chevronThirdChild}`}></div>
                <div className={styles.scrollDownText}>scroll down to see more</div>
            </div>

            <Particles
                className={styles.particlesBackground}
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fullScreen: { enable: false },
                    background: {
                        color: {
                            value: "#C70D3A",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 6,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
        </>


    );
};

export default Home;
