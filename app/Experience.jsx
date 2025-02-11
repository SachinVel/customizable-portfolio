"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionTab } from 'primereact/accordion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLocationDot, faCalendar, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Experience({ content }) {

    const [activeIndex, setActiveIndex] = useState(null);

    const accordionVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: { opacity: 1, height: 'auto' }
    };

    useEffect(() => {
        console.log(content);
    }, []);

    return (
        <div className='relative md:m-8 text-white'>
            <div className="text-center text-3xl text-white font-bold my-[3%]">
                {content.title}
            </div>
            <div className='flex justify-center md:px-10 px-8'>
                <Accordion className="md:w-[70rem] w-[100rem]" activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                    {content.experienceList.map((experience, index) => (
                        <AccordionTab key={index}
                            header={
                                <div className="flex rounded-md justify-between items-center bg-homebg text-black p-2 mb-2 w-full">
                                    <div className="flex items-center">
                                        <img src={experience.logo} alt="logo" className="w-10 h-10 mr-4" />
                                        <div>
                                            <strong>{experience.position} @ {experience.company}</strong>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-5 '>
                                        <strong className='hidden md:block'>{experience.startDate} - {experience.endDate}</strong>
                                        <span className="accordion-icon">
                                            {activeIndex === index ? <FontAwesomeIcon icon={faMinus} className='text-blue-500' /> : <FontAwesomeIcon icon={faPlus} className='text-blue-500' />}
                                        </span>
                                    </div>
                                </div>
                            }
                            headerClassName="p-accordion-header">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={accordionVariants}
                                transition={{ duration: 0.5 }}
                                className='bg-gray-800 border border-white my-5 p-5 rounded-lg shadow-lg overflow-hidden'
                            >
                                <div className="flex block md:hidden items-center gap-2 mb-2">
                                    <FontAwesomeIcon
                                        icon={faCalendar}
                                        className="text-blue-500 text-xl"
                                    />
                                    <p>{experience.startDate} - {experience.endDate}</p>
                                </div>

                                <div className="flex items-center gap-2 mb-2">
                                    <FontAwesomeIcon
                                        icon={faLocationDot}
                                        className="text-blue-500 text-xl"
                                    />
                                    <p>{experience.location}</p>
                                </div>
                                <ul className="list-disc pl-5">
                                    {experience.description.map((desc, index) => (
                                        <li key={index}>{desc}</li>
                                    ))}
                                </ul>
                                <div className="flex h-fit flex-wrap gap-2 mt-4">
                                    {experience.keywords.map((keyword, index) => (
                                        <span key={index} className="bg-blue-500 h-8 text-white flex items-center rounded-full px-3 py-1 text-sm">
                                            {keyword}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </AccordionTab>
                    ))}
                </Accordion>
            </div>
        </div>
    );
}
