import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import ProjectsComponent from "../components/Projects/Projects";
import "./Projects.css";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ProjectsContainer className="container">
        <PageHeader data-aos="fade-up">
          <Heading>My Projects</Heading>
          <Subheading>
            Showcasing my work in software engineering, web development, and
            artificial intelligence
          </Subheading>
        </PageHeader>

        <ProjectsComponent />
      </ProjectsContainer>
    </motion.div>
  );
};

// Styled components
const ProjectsContainer = styled.div`
  padding: var(--spacing-xl) 0;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-xl);
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: var(--spacing-sm);
  color: ${(props) => props.theme.text};
`;

const Subheading = styled.p`
  font-size: 1.25rem;
  color: ${(props) => props.theme.textSecondary};
  max-width: 800px;
  margin: 0 auto;
`;

export default Projects;
