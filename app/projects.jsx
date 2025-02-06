"use client";
import { useEffect, useState } from 'react';
import { Carousel } from 'primereact/carousel';
import { motion } from 'framer-motion';

export default function Project({ content }) {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        console.log("ProjectList : ", content);
        if (content.projectList.length > 0) {
            setProjects(content.projectList);
        }
    }, []);
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    

    const projectTemplate = (project) => {
        return (
            <motion.div 
                className="bg-gray-800 p-4 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <img src={project.imagePath} alt={project.title} className="w-full h-48 object-cover rounded-t-lg" />
                <h4 className="text-xl font-bold mt-4">{project.title}</h4>
                <p className="text-gray-400 mt-2">{project.description}</p>
                <div className="flex justify-between mt-4">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-lg">GitHub</a>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-4 py-2 rounded-lg">Live</a>
                </div>
                <div className="flex flex-wrap mt-4">
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-gray-700 text-white px-2 py-1 rounded-lg mr-2 mb-2">{tech}</span>
                    ))}
                </div>
            </motion.div>
        );
    };

    return (
        <div className='relative text-center m-8 text-white'>
            <div className="text-center text-3xl text-white font-bold my-[3%]">
                {content.title}
            </div>
            <div className="flex flex-wrap justify-center gap-4">
                {projects.map((project, index) => (
                    <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                        {projectTemplate(project)}
                    </div>
                ))}
            </div>
        </div>
    );
}
