import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import "./FeaturedProjects.css";

const FeaturedProjects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Part Of Their World LLC",
      description:
        "Web application for an Ohio-based party planning company that serves both as a client-facing website and an internal management tool for scheduling, booking, and employee management.",
      image: "/assets/projects/christiananddimitra.jpg",
      technologies: ["React", "Firebase", "JavaScript"],
      category: "web",
      link: "https://partoftheirworld.com",
      github: "https://github.com/claviole/partoftheirworld",
    },
    {
      id: 3,
      title: "Wedding Website",
      description:
        "A website I created for my wedding that includes a timeline, gallery, registry, and more.",
      image: "/assets/projects/christiananddimitra.jpg",
      technologies: ["React", "Firebase", "JavaScript"],
      category: "web",
      link: "https://christiananddimitra.com",
      github: "https://github.com/claviole/wedding_site",
    },
  ];

  return (
    <FeaturedSection>
      <SectionHeader data-aos="fade-up">
        <SectionHeading>Featured Projects</SectionHeading>
        <SectionSubheading>
          A selection of my recent work in software engineering and AI
        </SectionSubheading>
      </SectionHeader>

      <ProjectsGrid>
        {featuredProjects.map((project, index) => (
          <ProjectItem
            key={project.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <ProjectImageContainer>
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectCategory>
                {project.category === "ai"
                  ? "AI / Machine Learning"
                  : "Web Development"}
              </ProjectCategory>
            </ProjectImageContainer>

            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>

              <TechStack>
                {project.technologies.map((tech, i) => (
                  <TechTag key={i}>{tech}</TechTag>
                ))}
              </TechStack>

              <ProjectLinks>
                {project.github && (
                  <ProjectLink
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> GitHub
                  </ProjectLink>
                )}
                {project.link && (
                  <ProjectLink
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </ProjectLink>
                )}
              </ProjectLinks>
            </ProjectContent>
          </ProjectItem>
        ))}
      </ProjectsGrid>

      <ViewAllContainer data-aos="fade-up">
        <ViewAllLink to="/projects">
          View All Projects <FaArrowRight style={{ marginLeft: "10px" }} />
        </ViewAllLink>
      </ViewAllContainer>
    </FeaturedSection>
  );
};

// Styled components
const FeaturedSection = styled.section`
  margin: var(--spacing-xl) 0;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-lg);
`;

const SectionHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: var(--spacing-sm);
  color: ${(props) => props.theme.text};

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubheading = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.theme.textSecondary};
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
`;

const ProjectItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
  background: ${(props) => props.theme.cardBackground};
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition:
    transform var(--transition-medium),
    box-shadow var(--transition-medium);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  &:nth-child(even) {
    @media (min-width: 901px) {
      direction: rtl;

      & > div {
        direction: ltr;
      }
    }
  }
`;

const ProjectImageContainer = styled.div`
  position: relative;
  height: 100%;
  min-height: 300px;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-medium);

  ${ProjectItem}:hover & {
    transform: scale(1.05);
  }
`;

const ProjectCategory = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background: ${(props) => props.theme.primary};
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  z-index: 1;
`;

const ProjectContent = styled.div`
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: var(--spacing-sm);
  color: ${(props) => props.theme.text};
`;

const ProjectDescription = styled.p`
  color: ${(props) => props.theme.textSecondary};
  margin-bottom: var(--spacing-sm);
  line-height: 1.6;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: var(--spacing-sm) 0;
`;

const TechTag = styled.span`
  background: ${(props) => props.theme.backgroundLight};
  color: ${(props) => props.theme.textSecondary};
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: var(--spacing-sm);
  margin-top: auto;
  padding-top: var(--spacing-sm);
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.primary};
  font-weight: 500;
  transition: color var(--transition-fast);

  &:hover {
    color: ${(props) => props.theme.secondary};
  }
`;

const ViewAllContainer = styled.div`
  text-align: center;
  margin-top: var(--spacing-lg);
`;

const ViewAllLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: ${(props) => props.theme.primary};
  font-weight: 600;
  font-size: 1.1rem;
  transition: color var(--transition-fast);

  &:hover {
    color: ${(props) => props.theme.secondary};
  }
`;

export default FeaturedProjects;
