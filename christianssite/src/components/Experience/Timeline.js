import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Timeline = ({ children }) => {
  return <TimelineContainer>{children}</TimelineContainer>;
};

export const TimelineItem = ({
  year,
  title,
  company,
  location,
  description,
  isEducation = false,
}) => {
  return (
    <TimelineItemContainer data-aos="fade-up">
      <YearMarker className={isEducation ? "education-marker" : "work-marker"}>
        {year}
      </YearMarker>
      <TimelineContent>
        <TimelineHeader>
          <TimelineTitle>{title}</TimelineTitle>
          <CompanyTag className={isEducation ? "education" : "work"}>
            {company}
          </CompanyTag>
        </TimelineHeader>
        <TimelineLocation>{location}</TimelineLocation>
        {description && (
          <DescriptionList>
            {Array.isArray(description) ? (
              description.map((item, index) => (
                <DescriptionItem key={index}>{item}</DescriptionItem>
              ))
            ) : (
              <DescriptionItem>{description}</DescriptionItem>
            )}
          </DescriptionList>
        )}
      </TimelineContent>
    </TimelineItemContainer>
  );
};

const TimelineContainer = styled.div`
  position: relative;
  padding: 2rem 0;
  margin: 2rem 0;

  &::before {
    content: "";
    position: absolute;
    left: 18px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${(props) => props.theme.backgroundLight};

    @media (min-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const TimelineItemContainer = styled.div`
  position: relative;
  margin-bottom: 3rem;
  padding-left: 45px;

  @media (min-width: 768px) {
    padding-left: 0;
    width: 50%;
    margin-left: 50%;
    padding-left: 2rem;

    &:nth-child(even) {
      margin-left: 0;
      padding-left: 0;
      padding-right: 2rem;
      text-align: right;
    }
  }
`;

const YearMarker = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${(props) => props.theme.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.75rem;
  z-index: 2;

  &.education-marker {
    background: ${(props) => props.theme.secondary};
  }

  @media (min-width: 768px) {
    left: -18px;

    ${TimelineItemContainer}:nth-child(even) & {
      left: auto;
      right: -18px;
    }
  }
`;

const TimelineContent = styled.div`
  background: ${(props) => props.theme.backgroundSecondary};
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const TimelineHeader = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
  gap: 0.5rem;
`;

const TimelineTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0;
  color: ${(props) => props.theme.text};
`;

const CompanyTag = styled.span`
  display: inline-block;
  padding: 0.2rem 0.5rem;
  border-radius: 30px;
  font-size: 0.8rem;
  font-weight: 500;
  background: ${(props) => props.theme.primary};
  color: white;

  &.education {
    background: ${(props) => props.theme.secondary};
  }
`;

const TimelineLocation = styled.p`
  color: ${(props) => props.theme.textSecondary};
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const DescriptionList = styled.ul`
  padding-left: 1.2rem;
  margin-bottom: 0;
`;

const DescriptionItem = styled.li`
  color: ${(props) => props.theme.textSecondary};
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  line-height: 1.5;

  &:last-child {
    margin-bottom: 0;
  }
`;
