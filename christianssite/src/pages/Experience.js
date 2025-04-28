import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import ExperienceComponent from "../components/Experience/Experience";
import "./Experience.css";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ExperienceContainer className="container">
        <PageHeader data-aos="fade-up">
          <Heading>Experience & Education</Heading>
          <Subheading>
            My professional journey and academic background
          </Subheading>
        </PageHeader>

        <ExperienceComponent />
      </ExperienceContainer>
    </motion.div>
  );
};

// Styled components
const ExperienceContainer = styled.div`
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

export default Experience;
