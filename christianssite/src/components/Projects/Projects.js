import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Part Of Their World LLC",
      description:
        "Web application for an Ohio-based party planning company that serves both as a client-facing website and an internal management tool.",
      image: "/assets/projects/partoftheirworld.jpg",
      technologies: ["React", "Firebase", "JavaScript"],
      category: "web",
      link: "https://partoftheirworld.com",
      github: "https://github.com/yourusername/partoftheirworld",
    },
    {
      id: 2,
      title: "Campus Map Design Project",
      description:
        "Led a team of 12 students in developing an interactive campus map for the university.",
      image: "/assets/projects/campusmap.jpg",
      technologies: ["React", "Firebase", "JavaScript", "Google Maps API"],
      category: "web",
      github: "https://github.com/yourusername/campus-map",
    },
    {
      id: 3,
      title: "Music Genre Identification",
      description:
        "Trained a model to predict music genres based on artist images with 87% accuracy using a dataset of 20,000 images.",
      image: "/assets/projects/musicgenre.jpg",
      technologies: ["PyTorch", "FastAI", "Python", "Machine Learning"],
      category: "ai",
      github: "https://github.com/yourusername/music-genre-id",
    },
    {
      id: 4,
      title: "Image Generation with CGANs",
      description:
        "Developed and trained a CGAN from scratch to generate high-quality 720x720 images of various environments.",
      image: "/assets/projects/imagegen.jpg",
      technologies: ["PyTorch", "TensorFlow", "CGANs", "Python"],
      category: "ai",
      github: "https://github.com/yourusername/image-generation",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <ProjectsSection>
      <SectionHeading>My Projects</SectionHeading>

      <FilterContainer>
        <FilterButton
          active={filter === "all"}
          onClick={() => setFilter("all")}
        >
          All
        </FilterButton>
        <FilterButton
          active={filter === "web"}
          onClick={() => setFilter("web")}
        >
          Web Development
        </FilterButton>
        <FilterButton active={filter === "ai"} onClick={() => setFilter("ai")}>
          AI/Machine Learning
        </FilterButton>
      </FilterContainer>

      <ProjectsGrid>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

// Styled components
// ... styled components definitions

export default Projects;
