import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import {
  FaCode,
  FaServer,
  FaBrain,
  FaTools,
  FaUsers,
  FaLaptopCode,
} from "react-icons/fa";
import "./Skills.css";

const Skills = () => {
  const skillsData = {
    technicalDomains: [
      {
        name: "Machine Learning & AI",
        icon: <FaBrain />,
        description:
          "Design, development and deployment of intelligent systems",
        skills: [
          { name: "Neural Networks", expertise: "Advanced" },
          { name: "Computer Vision", expertise: "Advanced" },
          { name: "Natural Language Processing", expertise: "Advanced" },
          { name: "TensorFlow", expertise: "Advanced" },
          { name: "PyTorch", expertise: "Advanced" },
          { name: "FastAI", expertise: "Advanced" },
          { name: "Model Deployment", expertise: "Advanced" },
        ],
      },
      {
        name: "Web Development",
        icon: <FaLaptopCode />,
        description: "Creating responsive and dynamic web applications",
        skills: [
          { name: "React", expertise: "Expert" },
          { name: "JavaScript", expertise: "Expert" },
          { name: "TypeScript", expertise: "Expert" },
          { name: "HTML/CSS", expertise: "Expert" },
          { name: "Node.js", expertise: "Expert" },
          { name: "Firebase", expertise: "Expert" },
        ],
      },
      {
        name: "Backend & Infrastructure",
        icon: <FaServer />,
        description: "Building robust server-side applications and systems",
        skills: [
          { name: "Python", expertise: "Expert" },
          { name: "PHP", expertise: "Expert" },
          { name: "C++", expertise: "Advanced" },
          { name: "MySQL", expertise: "Expert" },
          { name: "NoSQL", expertise: "Expert" },
          { name: "Linux", expertise: "Advanced" },
          { name: "API Development", expertise: "Advanced" },
        ],
      },
    ],
    leadershipSkills: [
      {
        name: "Leadership & Management",
        icon: <FaUsers />,
        description: "Leading teams and managing complex projects",
        skills: [
          { name: "Team Leadership", expertise: "Expert" },
          { name: "Strategic Planning", expertise: "Advanced" },
          { name: "Project Management", expertise: "Expert" },
          { name: "Agile Methodologies", expertise: "Advanced" },
          { name: "Cross-functional Collaboration", expertise: "Expert" },
          { name: "Stakeholder Communication", expertise: "Advanced" },
        ],
      },
      {
        name: "Software Engineering Practices",
        icon: <FaTools />,
        description: "Applying industry best practices to development",
        skills: [
          { name: "CI/CD", expertise: "Advanced" },
          { name: "Test-Driven Development", expertise: "Advanced" },
          { name: "Code Review", expertise: "Expert" },
          { name: "Software Architecture", expertise: "Advanced" },
          { name: "Performance Optimization", expertise: "Advanced" },
          { name: "Security Best Practices", expertise: "Intermediate" },
        ],
      },
      {
        name: "Programming Languages",
        icon: <FaCode />,
        description: "Versatile experience across multiple languages",
        skills: [
          { name: "Python", expertise: "Expert" },
          { name: "JavaScript", expertise: "Expert" },
          { name: "PHP", expertise: "Expert" },
          { name: "C++", expertise: "Expert" },
          { name: "Java", expertise: "Expert" },
          { name: "C#", expertise: "Intermediate" },
          { name: "TypeScript", expertise: "Advanced" },
          { name: "C", expertise: "Advanced" },
        ],
      },
    ],
  };

  return (
    <SkillsSection>
      <SectionHeading>Technical Expertise</SectionHeading>
      <SectionSubheading>
        A comprehensive overview of my capabilities across different domains
      </SectionSubheading>

      <SkillsContainer>
        <SkillsHeading data-aos="fade-up">Technical Domains</SkillsHeading>
        <DomainsGrid>
          {skillsData.technicalDomains.map((domain, index) => (
            <DomainCard
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <DomainHeader>
                <DomainIcon>{domain.icon}</DomainIcon>
                <DomainName>{domain.name}</DomainName>
              </DomainHeader>
              <DomainDescription>{domain.description}</DomainDescription>

              <SkillsList>
                {domain.skills.map((skill, i) => (
                  <SkillItem key={i}>
                    <SkillName>{skill.name}</SkillName>
                    <ExpertiseBadge expertise={skill.expertise}>
                      {skill.expertise}
                    </ExpertiseBadge>
                  </SkillItem>
                ))}
              </SkillsList>
            </DomainCard>
          ))}
        </DomainsGrid>

        <SkillsHeading data-aos="fade-up">
          Leadership & Engineering Excellence
        </SkillsHeading>
        <DomainsGrid>
          {skillsData.leadershipSkills.map((domain, index) => (
            <DomainCard
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <DomainHeader>
                <DomainIcon>{domain.icon}</DomainIcon>
                <DomainName>{domain.name}</DomainName>
              </DomainHeader>
              <DomainDescription>{domain.description}</DomainDescription>

              <SkillsList>
                {domain.skills.map((skill, i) => (
                  <SkillItem key={i}>
                    <SkillName>{skill.name}</SkillName>
                    <ExpertiseBadge expertise={skill.expertise}>
                      {skill.expertise}
                    </ExpertiseBadge>
                  </SkillItem>
                ))}
              </SkillsList>
            </DomainCard>
          ))}
        </DomainsGrid>
      </SkillsContainer>

      <SkillsNote>
        <p>
          <strong>My approach to technology:</strong> I believe in choosing the
          right tool for each specific challenge. My diverse skill set allows me
          to adapt quickly to new technologies and deliver optimal solutions.
        </p>
      </SkillsNote>
    </SkillsSection>
  );
};

const SkillsSection = styled.section`
  padding: var(--spacing-xl) 0;
`;

const SectionHeading = styled.h2`
  font-size: 2.2rem;
  margin-bottom: var(--spacing-sm);
  text-align: center;
  color: ${(props) => props.theme.text};
`;

const SectionSubheading = styled.p`
  font-size: 1.2rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto var(--spacing-xl);
  color: ${(props) => props.theme.textSecondary};
`;

const SkillsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SkillsHeading = styled.h3`
  font-size: 1.8rem;
  margin: var(--spacing-xl) 0 var(--spacing-md);
  color: ${(props) => props.theme.text};
  position: relative;
  padding-bottom: 10px;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background: ${(props) => props.theme.primary};
    border-radius: 3px;
  }
`;

const DomainsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
`;

const DomainCard = styled.div`
  background: ${(props) => props.theme.backgroundSecondary};
  border-radius: var(--border-radius);
  padding: var(--spacing-lg);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const DomainHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-sm);
`;

const DomainIcon = styled.div`
  font-size: 1.8rem;
  color: ${(props) => props.theme.primary};
  margin-right: var(--spacing-sm);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DomainName = styled.h4`
  font-size: 1.3rem;
  color: ${(props) => props.theme.text};
  margin: 0;
`;

const DomainDescription = styled.p`
  font-size: 0.95rem;
  color: ${(props) => props.theme.textSecondary};
  margin-bottom: var(--spacing-md);
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-xs) 0;
  border-bottom: 1px solid ${(props) => props.theme.backgroundLight};

  &:last-child {
    border-bottom: none;
  }
`;

const SkillName = styled.span`
  font-weight: 500;
  color: ${(props) => props.theme.text};
`;

const ExpertiseBadge = styled.span`
  font-size: 0.8rem;
  padding: 0.2rem 0.5rem;
  border-radius: 20px;
  background: ${(props) => {
    switch (props.expertise) {
      case "Expert":
        return props.theme.expertBackground || "rgba(16, 185, 129, 0.1)";
      case "Advanced":
        return props.theme.advancedBackground || "rgba(59, 130, 246, 0.1)";
      case "Intermediate":
        return props.theme.intermediateBackground || "rgba(249, 168, 37, 0.1)";
      default:
        return props.theme.backgroundLight;
    }
  }};
  color: ${(props) => {
    switch (props.expertise) {
      case "Expert":
        return props.theme.expertColor || "#10b981";
      case "Advanced":
        return props.theme.advancedColor || "#3b82f6";
      case "Intermediate":
        return props.theme.intermediateColor || "#f9a825";
      default:
        return props.theme.textSecondary;
    }
  }};
`;

const SkillsNote = styled.div`
  background: ${(props) => props.theme.backgroundLight};
  border-left: 4px solid ${(props) => props.theme.primary};
  padding: var(--spacing-md);
  border-radius: var(--border-radius);
  margin-top: var(--spacing-xl);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  p {
    margin: 0;
    color: ${(props) => props.theme.textSecondary};
    line-height: 1.6;
  }

  strong {
    color: ${(props) => props.theme.text};
  }
`;

export default Skills;
