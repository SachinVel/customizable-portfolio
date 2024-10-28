import { Box, Button, Stack, Typography } from '@mui/material';
import styles from './Home.module.css';

import { useCallback, useEffect, useRef, useState } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Typed from "typed.js";
import { Link } from 'react-scroll';
import axios from 'axios';


const QuoteOfTheDay = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    }, []);

    return (
        <div className='flex justify-center items-center'>
            <div className="w-full max-w-lg p-4">
                {loading ? (
                    <div className="flex justify-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
                    </div>
                ) : (
                    <div className="bg-white shadow-lg rounded-lg p-8">
                        <p className="text-2xl md:text-3xl font-semibold text-center italic text-gray-700">
                            "{quote.body}"
                        </p>
                        <p className="text-lg text-right mt-4 text-gray-500">
                            - {quote.author || 'Unknown'}
                        </p>
                    </div>
                )}
                <button
                    className="mt-8 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-200"
                    onClick={() => window.location.reload()}
                >
                    Get Another Quote
                </button>
            </div>
        </div>
    )
}

const Home = () => {

    const typeElemRef = useRef();

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        // await console.log(container);

    }, []);

    useEffect(() => {
        const typed = new Typed(typeElemRef.current, {
            strings: ["Software Engineer", "Full Stack Web Developer", "Back End Developer", "Front End Developer", "Devops Engineer"],
            typeSpeed: 60,
            loop: true,
            backDelay: 200,
            backSpeed: 60
        });

        return () => {
            typed.destroy();
        };


    }, []);

    return (
        <Box className={styles.homeContainer}>
            <Particles
                className={styles.particlesBackground}
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
            <Box className={styles.centerTextContainer}>


            </Box>
        </Box>




    );
};

export default Home;
