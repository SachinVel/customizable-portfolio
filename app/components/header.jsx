'use client';


import { Stack } from '@mui/material';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMoon, faSun, faTimes } from '@fortawesome/free-solid-svg-icons';

gsap.registerPlugin(ScrollTrigger);

import { useTheme } from 'next-themes';

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    return (
        <div className="flex items-center space-x-2">
            <label className="flex items-center cursor-pointer">
                <input
                    type="radio"
                    name="theme"
                    value="light"
                    checked={theme === 'light'}
                    onChange={() => setTheme('light')}
                    className="hidden"
                />
                <FontAwesomeIcon
                    icon={faSun}
                    className={`text-xl cursor-pointer ${theme === 'light' ? 'text-yellow-500' : 'text-gray-400'}`}
                />
            </label>
            <label className="flex items-center cursor-pointer">
                <input
                    type="radio"
                    name="theme"
                    value="dark"
                    checked={theme === 'dark'}
                    onChange={() => setTheme('dark')}
                    className="hidden"
                />
                <FontAwesomeIcon
                    icon={faMoon}
                    className={`text-xl cursor-pointer ${theme === 'dark' ? 'text-blue-500' : 'text-gray-400'}`}
                />
            </label>
        </div>
    );
};

function Header({ content }) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    }

    const handleScroll = (event, id) => {
        event.preventDefault();
        const section = document.getElementById(id);
        if (section) {
            const yOffset = -150; // Adjust this value to scroll 50px below
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <header className='relative z-50'>
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
                    {content.headerIcon && (
                        <Image
                            src={content.headerIcon}
                            alt='Header Icon'
                            width={70}
                            height={70}
                        />
                    )}

                </div>

                <div className="text-2xl text-center font-semibold">{content.name}</div>

                <nav className="flex flex-col items-center space-y-4 mt-4">
                    <ul className="space-y-4 text-center gap-4 list-none p-0 m-0">
                        <li><Link href="#home" onClick={(e) => handleScroll(e, 'home')} className="text-lg font-medium hover:underline hover:font-bold">Home</Link></li>
                        <li><Link href="#about" onClick={(e) => handleScroll(e, 'about')} className="text-lg font-medium hover:underline hover:font-bold">About</Link></li>
                        <li><Link href="#experience" onClick={(e) => handleScroll(e, 'experience')} className="text-lg font-medium hover:underline hover:font-bold">Experience</Link></li>
                        <li><Link href="#project" onClick={(e) => handleScroll(e, 'project')} className="text-lg font-medium hover:underline hover:font-bold">Projects</Link></li>
                        <li><Link href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="text-lg font-medium hover:underline hover:font-bold">Contact</Link></li>
                    </ul>
                </nav>
            </div>

            <div className="hidden md:block w-full">
                <Stack flexDirection="row" gap={1} justifyContent="space-between" alignContent="center" className={`w-4/5 px-2 py-3 mx-1/5 my-1 fixed bg-homebg rounded-lg	left-[10%] h-24 `}>
                    <Stack flexDirection="row" gap={1} alignContent="center" justifyItems="center">
                        {content.headerIcon && (
                            <Image
                                src={content.headerIcon}
                                alt='Header Icon'
                                width={70}
                                height={70}
                            />
                        )}

                        <span className={`lg:text-3xl md:text-2xl font-bold ml-2 inline-flex items-center`}>{content.name}</span>
                    </Stack>

                    <ThemeToggle />

                    <ul className="flex items-center text-center gap-4 list-none p-0 m-0">
                        <li><Link href="#home" onClick={(e) => handleScroll(e, 'home')} className="text-lg font-medium hover:underline hover:font-bold">Home</Link></li>
                        <li><Link href="#about" onClick={(e) => handleScroll(e, 'about')} className="text-lg font-medium hover:underline hover:font-bold">About</Link></li>
                        <li><Link href="#experience" onClick={(e) => handleScroll(e, 'experience')} className="text-lg font-medium hover:underline hover:font-bold">Experience</Link></li>
                        <li><Link href="#project" onClick={(e) => handleScroll(e, 'project')} className="text-lg font-medium hover:underline hover:font-bold">Projects</Link></li>
                        <li><Link href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="text-lg font-medium hover:underline hover:font-bold">Contact</Link></li>
                    </ul>
                </Stack>
            </div>
        </header>
    );
}

export default Header;
