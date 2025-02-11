"use client";

import Image from 'next/image';
import { ContainerScroll } from "./components/ui/container-scroll-animation";

const About = ({ content }) => {
  // use
  return (
    <ContainerScroll
      className="bg-gradient-to-r from-blue-500 to-blue-700"
      titleComponent={
        <div className="text-center z-10 relative text-3xl text-white font-bold md:mb-10">
          {content.title}
        </div>
      }
    >
      <section className="relative text-white px-6 md:px-24 border-1">
        {/* Tilted Background */}
        <div className="absolute inset-0 transform "></div>

        {/* Content */}
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Image Section */}
          <div className="flex-shrink-0">
            <div className="aspect-w-4 aspect-h-3 relative w-64 h-64 md:w-80 md:h-80 rounded-md overflow-hidden">
              <Image
                src={content.imagePath} // Replace with your image path
                alt="About Image"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-center md:text-left z-20">
            <p className="text-md leading-relaxed">
              {content.description}
            </p>
          </div>
        </div>
      </section>
    </ContainerScroll>
  );
};

export default About;
