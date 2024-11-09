"use client";
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, icon } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas); // Add all solid icons to the library

export default function Home() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    async function fetchContent() {
      const res = await fetch('/api/content'); // Fetch from API route
      const data = await res.json();
      console.log(data);
      setContent(data.home); // Load the "home" section from YAML content
    }
    fetchContent();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 p-4 w-4/5 mx-auto">
      {content && content.slice(0, 3).map((tile, index) => {
        const iconName = tile.icon;

        // Check if the icon exists in the library
        const faIcon = icon({ prefix: 'fas', iconName: iconName.replace(/^fa/, '').toLowerCase() });

        return (
          <div
            key={index}
            className="flex flex-col items-center justify-start p-4 bg-white text-black rounded-md shadow-md w-full sm:w-[48%] md:w-[30%] lg:w-[23%]"
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
  );
}
