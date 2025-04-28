import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";

const SkillsShowcase = () => {
  const categories = [
    {
      name: "",
      icon: "/assets/icons/AIMLIcon.png",
      imageContainsText: true,
      skills: [
        "Neural Networks",
        "Computer Vision",
        "Natural Language Processing",
        "Model Deployment",
      ],
    },
    {
      name: "Web Development",
      icon: "/assets/icons/WebDevIcon.png",
      imageContainsText: true,
      skills: [
        "React",
        "JavaScript",
        "Node.js",
        "Firebase",
        "Responsive Design",
      ],
    },
    {
      name: "Backend Development",
      icon: "/assets/icons/BackendIcon.png",
      imageContainsText: true,
      skills: ["Python", "PHP", "MySQL", "NoSQL", "API Development"],
    },
  ];

  return (
    <SkillsSection>
      <SectionHeader data-aos="fade-up">
        <SectionHeading>Professional Skills</SectionHeading>
        <SectionSubheading>
          A blend of technical expertise in software engineering and artificial
          intelligence
        </SectionSubheading>
      </SectionHeader>

      <CategoriesGrid>
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <CategoryIcon
              src={category.icon}
              alt={category.name || "AI & Machine Learning"}
              style={
                category.imageContainsText
                  ? { width: "160px", height: "auto" }
                  : {}
              }
            />
            {!category.imageContainsText && (
              <CategoryName>{category.name}</CategoryName>
            )}
            <SkillsList>
              {category.skills.map((skill, i) => (
                <SkillItem key={i}>
                  <SkillBullet />
                  {skill}
                </SkillItem>
              ))}
            </SkillsList>
          </CategoryCard>
        ))}
      </CategoriesGrid>

      <ViewAllContainer data-aos="fade-up">
        <ViewAllLink to="/skills">
          View All Skills <FaArrowRight style={{ marginLeft: "10px" }} />
        </ViewAllLink>
      </ViewAllContainer>
    </SkillsSection>
  );
};

// Styled components
const SkillsSection = styled.section`
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

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
`;

const CategoryCard = styled.div`
  background: ${(props) => props.theme.cardBackground};
  border-radius: var(--border-radius);
  padding: var(--spacing-lg);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition:
    transform var(--transition-medium),
    box-shadow var(--transition-medium);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`;

const CategoryIcon = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: var(--spacing-sm);
`;

const CategoryName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: var(--spacing-md);
  color: ${(props) => props.theme.text};
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
  width: 100%;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  color: ${(props) => props.theme.textSecondary};
`;

const SkillBullet = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${(props) => props.theme.primary};
  margin-right: 10px;
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

export default SkillsShowcase;
