"use client";
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {  faGithub, faStackOverflow, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Contact({ content }) {

    const [contact, setContact] = useState(null);

    useEffect(() => {
        console.log("ProjectList : ", content);
        if (content.contact) {
            setContact(content.contact);
        }
    }, []);

    return (
        <footer className="bg-black text-white py-8 mt-8">
            <div className="container mx-auto text-center">
                <div className="flex justify-center space-x-10 mb-5">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-homebg transition duration-300">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-homebg transition duration-300">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-homebg transition duration-300">
                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-homebg transition duration-300">
                        <FontAwesomeIcon icon={faStackOverflow} size="2x" />
                    </a>
                </div>
                <p className='my-5'>Sachin Velmurugan &copy; 2025</p>
            </div>
        </footer>
    );
}
