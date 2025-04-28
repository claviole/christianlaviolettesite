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

// Styled components
// ... styled components definitions

export default Skills;
