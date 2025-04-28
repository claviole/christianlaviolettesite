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
      github: "https://github.com/claviole/partoftheirworld",
    },
    {
      id: 2,
      title: "Campus Map Design Project",
      description:
        "Led a team of 12 students in developing an interactive campus map for the university.",
      image: "/assets/projects/campusmap.jpg",
      technologies: ["React", "Firebase", "JavaScript", "Google Maps API"],
      category: "web",
      github: "https://github.com/claviole/campus-map",
    },
    {
      id: 3,
      title: "Music Genre Identification",
      description:
        "Trained a model to predict music genres based on artist images with 87% accuracy using a dataset of 20,000 images.",
      image: "/assets/projects/musicgenre.jpg",
      technologies: ["PyTorch", "FastAI", "Python", "Machine Learning"],
      category: "ai",
      github: "https://github.com/claviole/music-genre-id",
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
      <SectionHeading>Projects & Work</SectionHeading>

      <FilterContainer>
        <FilterButton
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All Projects
        </FilterButton>
        <FilterButton
          className={filter === "web" ? "active" : ""}
          onClick={() => setFilter("web")}
        >
          Web Development
        </FilterButton>
        <FilterButton
          className={filter === "ai" ? "active" : ""}
          onClick={() => setFilter("ai")}
        >
          AI & Machine Learning
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

const ProjectsSection = styled.section`
  padding: var(--spacing-xl) 0;
`;

const SectionHeading = styled.h2`
  font-size: 2.2rem;
  margin-bottom: var(--spacing-lg);
  text-align: center;
  color: ${(props) => props.theme.text};
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: var(--spacing-xl);
  flex-wrap: wrap;
  gap: 1rem;
`;

const FilterButton = styled.button`
  background: transparent;
  border: none;
  color: ${(props) => props.theme.textSecondary};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem 1rem;

  &.active {
    color: ${(props) => props.theme.primary};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--spacing-lg);
`;

export default Projects;
