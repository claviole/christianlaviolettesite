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
      image: "/assets/projects/potw.jpg",
      technologies: ["React", "Firebase", "JavaScript"],
      category: "web",
      link: "https://partoftheirworld.com",
    },
    {
      id: 2,
      title: "Wedding Website",
      description:
        "A website I created for my wedding that includes a timeline, gallery, registry, and more.",
      image: "/assets/projects/christiananddimitra.jpg",
      technologies: ["React", "Firebase", "JavaScript"],
      category: "web",
      github: "https://github.com/claviole/wedding_site",
    },
    {
      id: 5,
      title: "Inventory Filter",
      description:
        "This is a python program written for TMB that accepts a company specific inventory sheet and then filters and calculates total inventory based upon the age of the inventory . This program was designed to help manage aged inventory and prevent the use of Out of Date inventory.",
      image: "/assets/projects/automation.png",
      technologies: ["Python", "Automation", "Data Processing", "Excel"],
      category: "automation",
      github: "https://github.com/claviole/InventoryFilter",
    },
    {
      id: 7,
      title: "PPH Calculator",
      description:
        "This is a python program written for TMB to accept a .txt file produced by MIS and scan through to grab pieces reported in the file and sort them by month to generate an excel document which list Parts Per Hour by month as well as provide a total.",
      image: "/assets/projects/automation.png",
      technologies: ["Python", "Automation", "Data Processing"],
      category: "automation",
      github: "https://github.com/claviole/PPHCalculator",
    },
    {
      id: 3,
      title: "Target Metal Sync",
      description:
        "A web based ERP application built for TMB to help manage all aspects of the company's operations from production reporting up to HR functionalities also containing built in AI assistants",
      image: "/assets/projects/targetmetalsync.png",
      technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "API"],
      category: "web",
    },
    {
      id: 6,
      title: "MISAI",
      description:
        "A desktop application built for TMB using OpenAI's assistant API and trained on custom made MIS training data to help assist both new and existing employees with any questions they may have about a rather complex ERP system called MIS.",
      image: "/assets/projects/misai.png",
      technologies: ["OpenAI", "API", "Tauri", "MySQL", "JavaScript", "Java"],
      category: "ai",
    },
    {
      id: 4,
      title: "TMB Company Website",
      description:
        "A website I created for my current employer that provides services within the steel service center industry.",
      image: "/assets/projects/tmb-site.png",
      technologies: ["React", "Firebase", "JavaScript"],
      category: "web",
      link: "https://tmb-site.web.app",
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
        <FilterButton
          className={filter === "automation" ? "active" : ""}
          onClick={() => setFilter("automation")}
        >
          Automation
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
