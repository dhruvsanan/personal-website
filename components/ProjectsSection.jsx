"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "AI Lead Convert",
    description: "LeadConvert helps creators turn regular content into interactive AI experiences.",
    image: "/project8.png",
    tag: ["All", "Full Stack", "AI"],
    gitUrl: "https://github.com/dhruvsanan/ai-lead-convert",
    previewUrl: "https://ai-lead-convert.vercel.app",
  },
  {
    id: 2,
    title: "Panda Store",
    description: "Your marketplace for high-quality digital assets.",
    image: "/project7.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/dhruvsanan/panda-store",
    previewUrl: "https://panda-store.up.railway.app",
  },
  {
    id: 3,
    title: "JobFit Analyzer",
    description: "This Application helps you improve your Resume Review with help of GEMINI AI [LLM]",
    image: "/project1.png",
    tag: ["All", "AI"],
    gitUrl: "https://github.com/dhruvsanan/Google-Gemini-App/tree/master/Resume_Improver",
    previewUrl: "https://resume-improver.streamlit.app",
  },
  {
    id: 4,
    title: "Video Analyser",
    description: "A unique and personalized AI model to analyze your videos and answer questions about your videos",
    image: "/project2.png",
    tag: ["All", "AI"],
    gitUrl: "https://github.com/dhruvsanan/Google-Gemini-App/tree/master/Train_Using_Video",
    previewUrl: "https://video-analyser.streamlit.app",
  },
  {
    id: 5,
    title: "Resume Shortlister",
    description: "Shortlist a bunch of resumes for a job description using AI",
    image: "/project3.png",
    tag: ["All", "AI"],
    gitUrl: "https://github.com/dhruvsanan/Google-Gemini-App/tree/master/Resume_Shortlister",
    previewUrl: "https://resume-shortlister.streamlit.app",
  },
  {
    id: 6,
    title: "Blog Website",
    description: "allows users to easily create, manage, and publish blog posts online",
    image: "/project4.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/dhruvsanan/blog-site",
    previewUrl: "https://github.com/dhruvsanan/blog-site",
  },
  {
    id: 7,
    title: "Car Price Prediction",
    description: "Estimating the fair market value of a car based on its features, condition, and market data",
    image: "/project5.png",
    tag: ["All", "Data Science"],
    gitUrl: "https://github.com/dhruvsanan/car-price-prediction/tree/main",
    previewUrl: "https://github.com/dhruvsanan/car-price-prediction/tree/main",
  },
  {
    id: 8,
    title: "Movie Recomendation System",
    description: "Predicting user preferences for movies using Machine Learning Models",
    image: "/project6.png",
    tag: ["All", "Data Science"],
    gitUrl: "https://github.com/dhruvsanan/movie-recommendation-system",
    previewUrl: "https://github.com/dhruvsanan/movie-recommendation-system",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI"
          isSelected={tag === "AI"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Data Science"
          isSelected={tag === "Data Science"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Full Stack"
          isSelected={tag === "Full Stack"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;