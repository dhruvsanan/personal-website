"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 my-4">
      <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start">
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
          <h1 className="text-white max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold">
            <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I am{" "}
            </span>{" "}
            <br></br>
            <TypeAnimation
              sequence={[
                "Dhruv Sanan",
                1000,
                "AI Engineer",
                1000,
                "Data Scientist",
                1000,
                "Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
            <p className="text-[#ADB7BE] mb-6 textl-lg lg:text-xl">
            I bridge the gap between AI and reality. As a full-stack Generative AI developer, 
            I bring both front-end and back-end expertise to building innovative applications 
            powered by Generative AI. I thrive on turning complex concepts into user-friendly 
            interfaces allowing AI to unleash its full potential. 
            I am a quick learner and I am always looking to expand my knowledge and skill set. 
            I am a team player and I am excited to work with others to create amazing applications.
            </p>
            <div>
              <Link href="/#contact" passHref>
              <button className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white px-6 py-3 rounded-full mr-4">
                Contact Me
              </button>
              </Link>
              <Link href="https://docs.google.com/document/d/1MF1AjpZU8X3oD_8OSvpdcxt8-mtGiLyYz5FDjbxBZPU/edit?usp=sharing" passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
              <button className="m-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-1 py-1  text-white rounded-full">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Download CV
                </span>
              </button>
              </a>
              </Link>
            </div>
            </motion.div>
      </div>
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <svg id="sw-js-blob-svg" viewBox="10 7 80 80" xmlns="http://www.w3.org/2000/svg">
              <defs>                         
                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">                            
                <stop id="stop1" stop-color="rgba(248, 117, 55, 1)" offset="0%"></stop>                            
                <stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop>                        
                </linearGradient>                    
                </defs>    
                <mask id="mask1" mask-type="alpha">
                <path fill="url(#sw-gradient)" d="M18.5,-28.2C24.9,-24.6,31.7,-21.1,35.4,-15.4C39.2,-9.7,40,-1.9,37.2,4.1C34.5,10.2,28.1,14.5,23.2,19.9C18.2,25.3,14.7,31.8,9.5,34C4.3,36.2,-2.5,34.2,-9.4,32.1C-16.3,30.1,-23.1,28,-26.8,23.4C-30.6,18.8,-31.3,11.7,-30.7,5.4C-30.1,-1,-28.3,-6.6,-27.3,-14C-26.3,-21.5,-26,-30.8,-21.6,-35.3C-17.2,-39.8,-8.6,-39.5,-1.3,-37.5C6,-35.5,12.1,-31.8,18.5,-28.2Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" stroke="url(#sw-gradient)">
                </path>
                </mask>
                <g mask="url(#mask1)">          
                <path fill="url(#sw-gradient)" d="M18.5,-28.2C24.9,-24.6,31.7,-21.1,35.4,-15.4C39.2,-9.7,40,-1.9,37.2,4.1C34.5,10.2,28.1,14.5,23.2,19.9C18.2,25.3,14.7,31.8,9.5,34C4.3,36.2,-2.5,34.2,-9.4,32.1C-16.3,30.1,-23.1,28,-26.8,23.4C-30.6,18.8,-31.3,11.7,-30.7,5.4C-30.1,-1,-28.3,-6.6,-27.3,-14C-26.3,-21.5,-26,-30.8,-21.6,-35.3C-17.2,-39.8,-8.6,-39.5,-1.3,-37.5C6,-35.5,12.1,-31.8,18.5,-28.2Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" stroke="url(#sw-gradient)">
                </path>
                <image
                  href="/my-photo.jpg"
                  alt="my image"
                  width={80}
                  x={10}
                  y={11}
                />
                </g>  
            </svg>
                
              </div>
        </motion.div>
    </section>
  );
};


export default HeroSection;