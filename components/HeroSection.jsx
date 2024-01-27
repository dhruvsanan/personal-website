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
                I am a full stack web developer with a passion for creating
                interactive and responsive web applications. I studied B.S. in Data Science and Programming at Indian Institute of Technology. 
                I was a Project Mentor/TA and Viva Examiner for Application Development Project (BSCS2006P) and 
                Machine Learning Practice Project (BSCS2008P) at IIT Madras.
                I am a quick learner and I am always
                looking to expand my knowledge and skill set. I am a team player and
                I am excited to work with others to create amazing applications.
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
                <Image
                  src="/photo.jpg"
                  alt="my image"
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  width={300}
                  height={300}
                />
              </div>
        </motion.div>
    </section>
  );
};


export default HeroSection;