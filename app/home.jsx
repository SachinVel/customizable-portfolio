"use client";
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, icon } from '@fortawesome/fontawesome-svg-core';
import { fas, fa0 } from '@fortawesome/free-solid-svg-icons';

import { faGraduationCap, faBriefcase, faCode, faTools } from '@fortawesome/free-solid-svg-icons';


library.add(fas); // Add all solid icons to the library
library.add(fa0);
library.add(faGraduationCap, faBriefcase, faCode, faTools);


export default function Home() {
    const [content, setContent] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        async function fetchContent() {
            const res = await fetch('/api/content'); // Fetch from API route
            const data = await res.json();
            console.log(data);
            setContent(data.home); // Load the "home" section from YAML content
            setIsLoaded(true);

        }
        fetchContent();
    }, []);

    if( content==null ){
        return (<></>);
    }

    return (
        <div className='relative'>
            <div className="text-center text-3xl text-white font-bold my-[3%]">
                {content.title}
            </div>

            <div className="flex flex-wrap gap-10 justify-around items-stretch items-center p-4 w-4/5 mx-auto">

                {content && content.tiles && content.tiles.map((tile, index) => {
                    const iconName = tile.icon;

                    // Check if the icon exists in the library
                    const faIcon = icon({ prefix: 'fas', iconName: iconName.replace(/^fa/, '').toLowerCase() });

                    console.log('icon: ', faIcon)
                    return (
                        <div
                            key={index}
                            className={`flex flex-col items-center p-4 bg-white text-black rounded-md shadow-md w-full sm:w-[48%] md:w-[35%] lg:w-[30%] ${isLoaded ? 'fade-in' : 'opacity-0'}`}
                        >
                            {faIcon ? (
                                <FontAwesomeIcon
                                    icon={['fas', iconName.replace(/^fa/, '').toLowerCase()]}
                                    className="text-blue-500 text-3xl mb-2"
                                />
                            ) : (
                                <p className="text-red-500">Icon not found</p>
                            )}
                            <h2 className="font-bold text-lg mb-2">{tile.tilename}</h2>
                            <p className="text-center text-gray-600">{tile.text}</p>
                        </div>
                    );
                })}
            </div>
        </div>

    );
}
