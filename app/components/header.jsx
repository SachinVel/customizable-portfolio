'use client';


import { Box, Stack } from '@mui/material';
import styles from './header.module.css';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';



gsap.registerPlugin(ScrollTrigger);
function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    }

    useEffect(() => {
    }, []);


    return (
        <header className='relative'>
            <FontAwesomeIcon
                icon={faBars}
                onClick={toggleMenu}
                className={`h-8 w-8 cursor-pointer fixed text-white top-5 left-5 z-20 md:hidden  
                    ${isMenuOpen ? 'hidden' : 'visible'}
                    `}
            />
            <div
                className={`fixed top-0 left-0 w-2/3 h-full bg-homebg transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 ease-in-out z-10 md:hidden`}
            >
                <FontAwesomeIcon
                    icon={faTimes}
                    onClick={toggleMenu}
                    className="h-8 w-8 cursor-pointer absolute top-5 right-5"
                />

                <div className="flex flex-col items-center p-5 space-y-2">
                    <Image
                        src="/images/avatar-portfolio.png"
                        alt="Header Icon"
                        width={70}
                        height={70}
                        className="mr-3"
                    />

                </div>

                <div className="text-2xl text-center font-semibold">Sachin Velmurugan</div>

                <nav className="flex flex-col items-center space-y-4 mt-4">
                    <ul className={`space-y-4 text-center ${styles.navList}`}>
                        <li><Link href="/about" className="text-lg font-medium">About</Link></li>
                        <li><Link href="/experience" className="text-lg font-medium">Experience</Link></li>
                        <li><Link href="/projects" className="text-lg font-medium">Projects</Link></li>
                        <li><Link href="/contact" className="text-lg font-medium">Contact</Link></li>
                    </ul>
                </nav>
            </div>

            <div className="hidden md:block w-full h-fit">
                <Stack flexDirection="row" gap={1} justifyContent="space-between" alignContent="center" className={`w-4/5 px-2 py-3 mx-1/5 my-1 fixed bg-homebg rounded-lg	left-[10%]`}>
                    <Stack flexDirection="row" gap={1} alignContent="center" justifyItems="center">
                        <Image
                            src='/images/avatar-portfolio.png'
                            alt='Header Icon'
                            width={70}
                            height={70}
                        />

                        <span className={`${styles.headerTitle} lg:text-3xl md:text-2xl`}>Sachin Velmurugan</span>
                    </Stack>

                    <ul className={` flex items-center text-center ${styles.navList}`}>
                        <li><Link href="/about" className="text-lg font-medium">About</Link></li>
                        <li><Link href="/experience" className="text-lg font-medium">Experience</Link></li>
                        <li><Link href="/projects" className="text-lg font-medium">Projects</Link></li>
                        <li><Link href="/contact" className="text-lg font-medium">Contact</Link></li>
                    </ul>
                </Stack>
            </div>
        </header>

    );
}

export default Header;
