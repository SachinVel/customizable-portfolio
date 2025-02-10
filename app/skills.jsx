"use client";
import { useEffect, useState } from 'react';
import styles from "./skills.module.css";
import Image from 'next/image';
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";
import { motion } from 'framer-motion';
import Marquee from "react-fast-marquee";



export default function Skills({ content }) {


    const uniqueTags = Array.from(new Set(content.tags));
    const [selectedOption, setSelectedOption] = useState('All');
    const [skillList, setSkillList] = useState([]);

    useEffect(() => {
        setSkillList(content.skillList);
    }, []);

    useEffect(() => {
        if (selectedOption === 'All') {
            setSkillList(content.skillList);
        } else {
            const filteredSkills = content.skillList.filter(skill => skill.tags.includes(selectedOption));
            setSkillList(filteredSkills);
        }
    }, [selectedOption]);


    useEffect(() => {
        const selectedElement = document.querySelector(`#radio-label-${selectedOption}`);
        if (selectedElement) {
            const rect = selectedElement.getBoundingClientRect();
            const parent = document.querySelector('#skill-radio');
            const parentRect = parent.getBoundingClientRect();

            setPosition({ x: rect.left - parentRect.left - 8, y: rect.top - parentRect.top - 6 });
        }
    }, [selectedOption]);

    const [position, setPosition] = useState({ x: 0, y: 0 });

    return (
        <div className='relative text-center'>
            <div className="text-center z-10 relative text-3xl text-white font-bold my-2">
                {content.title}
            </div>
            <div className="flex flex-col items-center justify-center">
                <div id="skill-radio" className="relative flex flex-wrap max-w-screen items-center justify-center shadow-md rounded-full p-1 border-2 overflow-x-auto">

                    <div
                        className="absolute top-1 left-1 h-10 w-32 bg-homebg rounded-full transition-all duration-500"
                        style={{
                            transform: `translate(${position.x}px, ${position.y}px)`,
                        }}
                    ></div>

                    <div key='All' className="relative w-32 text-center h-[40px]">
                        <input
                            id={`radio-All`}
                            type="radio"
                            name="options"
                            value={'All'}
                            checked={selectedOption === 'All'}
                            onChange={() => setSelectedOption('All')}
                            className="hidden"
                        />
                        <label
                            id={`radio-label-All`}
                            htmlFor={`radio-All`}
                            className={`cursor-pointer block py-2 transition duration-500 ${selectedOption === 'All' ? "text-black font-bold" : "text-gray-500"}`}
                        >
                            All
                        </label>
                    </div>

                    {uniqueTags.map((tag) => (
                        <div key={tag} className="relative w-32 text-center h-[40px]">
                            <input
                                id={`radio-${tag}`}
                                type="radio"
                                name="options"
                                value={tag}
                                checked={selectedOption === tag}
                                onChange={() => setSelectedOption(tag)}
                                className="hidden"
                            />
                            <label
                                id={`radio-label-${tag}`}
                                htmlFor={`radio-${tag}`}
                                className={`cursor-pointer block py-2 transition duration-500 ${selectedOption === tag ? "text-black font-bold" : "text-gray-500"
                                    }`}
                            >
                                {tag}
                            </label>
                        </div>
                    ))}

                </div>
            </div>
            <br></br>
            <br></br>
            {
                (skillList.length > 0) &&
                <div className="w-full">
                    <Marquee autoFill={true} speed={content.speed}>
                        <div className="flex justify-between w-full">
                            {skillList.map((skill, index) => (
                                <div key={index} className="flex flex-col items-center mx-20">
                                    <Image
                                        src={skill.image}
                                        alt={skill.name}
                                        width={50}
                                        height={50}
                                        className="rounded-full"
                                    />
                                    <div className="text-white mt-2">{skill.name}</div>
                                </div>
                            ))}
                        </div>
                    </Marquee>
                </div>
            }
        </div>
    );
}
