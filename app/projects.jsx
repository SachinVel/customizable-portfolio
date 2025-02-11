"use client";
import { useEffect, useState } from 'react';
import { Carousel } from 'primereact/carousel';
import { motion } from 'framer-motion';

export default function Project({ content }) {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        if (content.projectList.length > 0) {
            setProjects(content.projectList);
        }
    }, []);

    const projectTemplate = (project) => {
        return (
            <motion.div
            className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col justify-between"
            whileHover={{ scale: 1.05 }}
            >
            <div>
            <img src={project.imagePath} alt={project.title} className="w-full h-48 object-cover rounded-t-lg" />
            <h4 className="text-xl font-bold mt-4">{project.title}</h4>
            <div className="flex flex-wrap justify-center text-sm mt-4">
            {project.technologies.map((tech, index) => (
            <span key={index} className="bg-blue-500 text-white px-2 py-1 rounded-xl mr-2 mb-2 hover:bg-white hover:text-blue-500">{tech}</span>
            ))}
            </div>
            <p className="text-gray-400 mt-2">{project.description}</p>
            </div>
            <div className="flex justify-center gap-5 mt-4">
            {project.links && project.links.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="text-homebg underline hover:text-white">
                {link.name}
                </a>
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
                    <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 flex">
                        {projectTemplate(project)}
                    </div>
                ))}
            </div>
        </div>
    );
}
