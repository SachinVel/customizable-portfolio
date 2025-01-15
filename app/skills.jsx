"use client";
import { useEffect, useState } from 'react';
import styles from "./skills.module.css";
import Image from 'next/image';
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";
import { motion } from 'framer-motion';
import Marquee from "react-fast-marquee";



export default function Skills({ content }) {

    console.log("skillList : ", content.skillList);


    const uniqueTags = Array.from(new Set(content.skillList.flatMap(skill => skill.tags)));
    const [selectedOption, setSelectedOption] = useState(uniqueTags[0]);
    const [skillList, setSkillList] = useState([]);

    useEffect(() => {
        console.log("skillList : ", skillList.length);
        setSkillList(content.skillList);
    }, []);

    // const testimonials = [
    //     {
    //         quote:
    //             "<h1>It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair</h1>",
    //         name: "Charles Dickens",
    //         title: "A Tale of Two Cities",
    //         image: "/images/cypress.png"
    //     },
    //     {
    //         quote:
    //             "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    //         name: "William Shakespeare",
    //         title: "Hamlet",
    //         image: "/images/cypress.png"
    //     },
    //     {
    //         quote: "All that we see or seem is but a dream within a dream.",
    //         name: "Edgar Allan Poe",
    //         title: "A Dream Within a Dream",
    //         image: "/images/cypress.png"
    //     },
    // ];

    const tiles = [
        { text: 'Tile 1', image: '/path/to/image1.jpg' },
        { text: 'Tile 2', image: '/path/to/image2.jpg' },
        { text: 'Tile 3', image: '/path/to/image3.jpg' },
        // Add more tiles as needed
    ];

    // const tileSet = [...tiles, ...tiles];


    return (
        <div className='relative text-center'>
            <div className="text-center z-10 relative text-3xl text-white font-bold my-2">
                {content.title}
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="relative flex items-center justify-center shadow-md rounded-full p-1 border-2">

                    {/* Background Animation */}
                    <div
                        className="absolute top-1 left-1 h-10 w-32 bg-blue-500 rounded-full transition-all duration-500"
                        style={{
                            transform: `translateX(${uniqueTags.indexOf(selectedOption) * 100
                                }%)`,
                        }}
                    ></div>

                    {/* Radio Options */}
                    {uniqueTags.map((tag, index) => (
                        <div key={tag} className="relative flex-1 w-32 text-center">
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
                                htmlFor={`radio-${tag}`}
                                className={`cursor-pointer block py-2 transition duration-500 ${selectedOption === tag ? "text-white font-bold" : "text-gray-500"
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
                    <Marquee autoFill={true}>
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
