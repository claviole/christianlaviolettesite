import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const SkillCategory = ({ title, skills }) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <CategoryContainer data-aos="fade-up">
      <CategoryHeader>
        <CategoryTitle>{title}</CategoryTitle>
      </CategoryHeader>

      <SkillsList>
        {skills.map((skill, index) => (
          <SkillItem key={index}>
            <SkillDetails>
              <SkillIcon>
                <img
                  src={`/assets/icons/${skill.icon}`}
                  alt={skill.name}
                  onError={(e) => {
                    e.target.src = "/assets/icons/default.svg";
                  }}
                />
              </SkillIcon>
              <SkillInfo>
                <SkillName>{skill.name}</SkillName>
                <SkillLevel className={animated ? "animate" : ""}>
                  {skill.level}%
                </SkillLevel>
              </SkillInfo>
            </SkillDetails>

            <SkillBarContainer>
              <SkillBar>
                <SkillProgress
                  style={{
                    width: animated ? `${skill.level}%` : "0%",
                  }}
                />
              </SkillBar>
            </SkillBarContainer>
          </SkillItem>
        ))}
      </SkillsList>
    </CategoryContainer>
  );
};

const CategoryContainer = styled.div`
  background: ${(props) => props.theme.backgroundSecondary};
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const CategoryHeader = styled.div`
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.backgroundLight};
  padding-bottom: 1rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.4rem;
  color: ${(props) => props.theme.text};
  margin: 0;
`;

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const SkillItem = styled.div``;

const SkillDetails = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const SkillIcon = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const SkillInfo = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SkillName = styled.span`
  font-weight: 500;
  color: ${(props) => props.theme.text};
`;

const SkillLevel = styled.span`
  color: ${(props) => props.theme.textSecondary};
  font-size: 0.9rem;
`;

const SkillBarContainer = styled.div`
  width: 100%;
`;

const SkillBar = styled.div`
  height: 8px;
  background: ${(props) => props.theme.backgroundLight};
  border-radius: 4px;
  overflow: hidden;
`;

const SkillProgress = styled.div`
  height: 100%;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
  border-radius: 4px;
  transition: width 1s ease-in-out;
`;

export default SkillCategory;
