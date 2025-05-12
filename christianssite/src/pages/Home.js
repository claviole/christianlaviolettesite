import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Hero from "../components/Hero/Hero";
import FeaturedProjects from "../components/Projects/FeaturedProjects";
import SkillsShowcase from "../components/Skills/SkillsShowcase";
import CallToAction from "../components/UI/CallToAction";
import "./Home.css";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />

      <HomeContainer>
        <AboutSection>
          <SectionHeading data-aos="fade-up">
            AI & Software Engineering
          </SectionHeading>

          <AboutContent data-aos="fade-up" data-aos-delay="200">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              I'm a versatile Software Engineer with expertise in full-stack
              development, machine learning, and AI-driven solutions. Currently
              pursuing a Master's in Artificial Intelligence, I focus on
              building scalable applications and deploying machine learning
              models to solve complex problems.
            </motion.p>

            <Highlights>
              <HighlightItem data-aos="fade-up" data-aos-delay="300">
                <HighlightValue>7+</HighlightValue>
                <HighlightLabel>Locations</HighlightLabel>
                <HighlightDesc>Deployed AI solutions</HighlightDesc>
              </HighlightItem>

              <HighlightItem data-aos="fade-up" data-aos-delay="400">
                <HighlightValue>50%</HighlightValue>
                <HighlightLabel>Efficiency</HighlightLabel>
                <HighlightDesc>Gained through automation</HighlightDesc>
              </HighlightItem>
            </Highlights>
          </AboutContent>
        </AboutSection>

        <FeaturedProjects />

        <SkillsShowcase />

        <CallToAction
          heading="Interested in working together?"
          subheading="Let's discuss how my expertise in AI and software engineering can help your next project."
          buttonText="Get in Touch"
          buttonLink="/contact"
        />
      </HomeContainer>
    </motion.div>
  );
};

// Styled components
const HomeContainer = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-md);
`;

const AboutSection = styled.section`
  padding: var(--spacing-xl) 0;
`;

const SectionHeading = styled.h2`
  position: relative;
  margin-bottom: var(--spacing-md);
  color: ${(props) => props.theme.primary};

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 80px;
    height: 4px;
    background: ${(props) => props.theme.primary};
    border-radius: 4px;
  }
`;

const AboutContent = styled.div`
  margin-top: var(--spacing-md);
  font-size: 1.2rem;
  color: ${(props) => props.theme.textSecondary};
  max-width: 800px;
`;

const Highlights = styled.div`
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
`;

const HighlightItem = styled.div`
  background: ${(props) => props.theme.backgroundSecondary};
  border-radius: var(--border-radius);
  padding: var(--spacing-md);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  flex: 1;
  text-align: center;
  transition: transform var(--transition-medium);

  &:hover {
    transform: translateY(-5px);
  }
`;

const HighlightValue = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.accent};
  margin-bottom: 0.5rem;
`;

const HighlightLabel = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${(props) => props.theme.primary};
  margin-bottom: 0.5rem;
`;

const HighlightDesc = styled.div`
  font-size: 0.9rem;
  color: ${(props) => props.theme.textTertiary};
`;

export default Home;
