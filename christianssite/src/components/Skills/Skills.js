import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import SkillCategory from "./SkillCategory";
import "./Skills.css";

const Skills = () => {
  const skillsData = {
    languages: [
      { name: "Python", level: 95, icon: "python.svg" },
      { name: "JavaScript", level: 90, icon: "javascript.svg" },
      { name: "PHP", level: 85, icon: "php.svg" },
      { name: "C++", level: 80, icon: "cpp.svg" },
      { name: "Java", level: 75, icon: "java.svg" },
      { name: "C#", level: 75, icon: "csharp.svg" },
      { name: "TypeScript", level: 85, icon: "typescript.svg" },
      { name: "C", level: 70, icon: "c.svg" },
    ],
    frameworks: [
      { name: "React", level: 90, icon: "react.svg" },
      { name: "TensorFlow", level: 85, icon: "tensorflow.svg" },
      { name: "PyTorch", level: 80, icon: "pytorch.svg" },
      { name: "FastAI", level: 75, icon: "fastai.svg" },
    ],
    other: [
      { name: "HTML/CSS", level: 95, icon: "html-css.svg" },
      { name: "MySQL", level: 85, icon: "mysql.svg" },
      { name: "NoSQL", level: 80, icon: "nosql.svg" },
      { name: "Linux", level: 80, icon: "linux.svg" },
      { name: "Firebase", level: 85, icon: "firebase.svg" },
    ],
  };

  return (
    <SkillsSection>
      <SectionHeading>Technical Skills</SectionHeading>

      <SkillsContainer>
        <SkillCategory
          title="Programming Languages"
          skills={skillsData.languages}
        />
        <SkillCategory
          title="Frameworks & Libraries"
          skills={skillsData.frameworks}
        />
        <SkillCategory title="Technologies & Tools" skills={skillsData.other} />
      </SkillsContainer>

      <SkillsVisualization>
        {/* Interactive 3D visualization of skills */}
      </SkillsVisualization>
    </SkillsSection>
  );
};

const SkillsSection = styled.section`
  padding: var(--spacing-xl) 0;
`;

const SectionHeading = styled.h2`
  font-size: 2.2rem;
  margin-bottom: var(--spacing-xl);
  text-align: center;
  color: ${(props) => props.theme.text};
`;

const SkillsContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const SkillsVisualization = styled.div`
  margin-top: var(--spacing-xl);
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Skills;
