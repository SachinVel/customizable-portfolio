"use client";
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, icon } from '@fortawesome/fontawesome-svg-core';
import { fas, fa0 } from '@fortawesome/free-solid-svg-icons';

import { faGraduationCap, faBriefcase, faCode, faTools } from '@fortawesome/free-solid-svg-icons';
import BorderHighlight from './components/border-highlight';

library.add(fas); // Add all solid icons to the library
library.add(fa0);
library.add(faGraduationCap, faBriefcase, faCode, faTools);


export default function Home({ content }) {

    return (
        <div className='relative min-h-[100dvh] pt-32'>
            <div className="text-center text-3xl text-white font-bold my-[3%]">
                {content.title}
            </div>

            <div className="flex flex-wrap gap-10 justify-around items-stretch items-center p-4 w-4/5 mx-auto">

                {content.tiles && content.tiles.map((tile, index) => {
                    const iconName = tile.icon.toLowerCase();

                    // Check if the icon exists in the library
                    const faIcon = icon({ prefix: 'fas', iconName: iconName });

                    return (
                        // <BorderHighlight>
                        <div
                            key={index}
                            className={`flex flex-col items-center p-4 bg-white text-black rounded-md shadow-md w-full sm:w-[48%] md:w-[35%] lg:w-[30%] fade-in`}
                        >
                            {faIcon ? (
                                <FontAwesomeIcon
                                    icon={['fas', iconName]}
                                    className="text-blue-500 text-3xl mb-2"
                                />
                            ) : (
                                <p className="text-red-500">Icon not found</p>
                            )}
                            <h2 className="font-bold text-lg mb-2">{tile.tilename}</h2>
                            <div className="text-center text-gray-600" dangerouslySetInnerHTML={{ __html: tile.text }} />
                        </div>
                        // </BorderHighlight>

                    );
                })}
            </div>
        </div>
    );
}
