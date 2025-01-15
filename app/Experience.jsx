"use client";
import { useEffect, useState } from 'react';

export default function Experience({ content }) {

    const [selectedExperience, setSelectedExperience] = useState(null);

    useEffect(() => {
        if (content.experienceList.length > 0) {
            setSelectedExperience(content.experienceList[0]);
        }
    }, [content.experienceList]);

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ width: '25%', borderRight: '1px solid #ccc', padding: '10px' }}>
                {content.experienceList.map((exp, index) => (
                    <div 
                        key={index} 
                        onMouseEnter={() => setSelectedExperience(exp)} 
                        style={{ cursor: 'pointer', marginBottom: '10px' }}
                    >
                        <h4>{exp.position}</h4>
                        <p>{exp.company}</p>
                        <p>{exp.startDate} - {exp.endDate}</p>
                    </div>
                ))}
            </div>
            <div style={{ width: '75%', padding: '10px' }}>
                {selectedExperience && (
                    <>
                        <h2>{selectedExperience.position}</h2>
                        <h3>{selectedExperience.company}</h3>
                        <p>{selectedExperience.startDate} - {selectedExperience.endDate}</p>
                        <p>{selectedExperience.location}</p>
                        <h4>Technologies:</h4>
                        <ul>
                            {selectedExperience.technologies.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>
                        <h4>Description:</h4>
                        <ul>
                            {selectedExperience.description.map((desc, index) => (
                                <li key={index}>{desc}</li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
}
