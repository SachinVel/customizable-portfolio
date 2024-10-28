'use client';


import { Box, Stack } from '@mui/material';
import styles from './header.module.css';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import Image from 'next/image';



gsap.registerPlugin(ScrollTrigger);
function Header() {

    const headerRef = useRef();
    useEffect(() => {
        // gsap.fromTo(
        //     headerRef.current,
        //     {
        //         backgroundColor: "#171E28",
        //     },
        //     {
        //         backgroundColor: "#F3CD00",
        //         scrollTrigger: {
        //             trigger: homeRef.current,
        //             start: "bottom 80%",
        //             end: "bottom 30%",
        //             scrub: true,
        //             // markers: true
        //         }
        //     }
        // );
    }, []);


    return (
        <Stack ref={headerRef} flexDirection="row" gap={1} justifyContent="space-between" alignContent="center" className={`${styles.headerContainer}`}>
            <Stack flexDirection="row" gap={1} alignContent="center" justifyItems="center">
                <Image
                    src='/images/avatar-portfolio.png'
                    alt='Header Icon'
                    width={70}
                    height={70}
                />

                <span className={`${styles.headerTitle} lg:text-3xl md:text-2xl`}>Sachin Velmurugan</span>
            </Stack>

            <Stack flexDirection="row" gap={1} justifyContent="space-around" alignItems="center">
                <nav>
                    <ul className={styles.navList}>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/experience">Experience</Link></li>
                        <li><Link href="/projects">Projects</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </Stack>
        </Stack>
    );
}

export default Header;
