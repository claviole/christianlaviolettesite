import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Timeline, TimelineItem } from "./Timeline";
import "./Experience.css";

const Experience = () => {
  return (
    <ExperienceSection>
      <SectionHeading>Experience & Education</SectionHeading>

      <Timeline>
        <TimelineItem
          year="2023-Present"
          title="Software Engineer"
          company="Target Metal Blanking"
          location="Sauk Village, IL"
          description={[
            "Designed and implemented AI-driven assistants and automation tools",
            "Promoted AI literacy through training materials and workshops",
            "Built and maintained a custom web-based ERP system",
            "Developed data analytics solutions to enhance communication",
            "Automated reporting and data processing with Python",
          ]}
        />

        <TimelineItem
          year="2016-2023"
          title="Sr. General Manager"
          company="Pizza Hut"
          location="South Holland, IL"
          description={[
            "Managed multimillion-dollar operation with consistent profit growth of 30-35%",
            "Oversaw customer-focused environment across two locations",
            "Led inventory management and staff training initiatives",
          ]}
        />

        <TimelineItem
          year="Currently Enrolled"
          title="M.S. in Artificial Intelligence"
          company="Purdue University"
          location="West Lafayette, IN"
          isEducation={true}
        />

        <TimelineItem
          year="Completed"
          title="B.S. in Computer Science"
          company="Purdue University Northwest"
          location="Hammond, IN"
          isEducation={true}
        />
      </Timeline>
    </ExperienceSection>
  );
};

const ExperienceSection = styled.section`
  padding: var(--spacing-xl) 0;
`;

const SectionHeading = styled.h2`
  font-size: 2.2rem;
  margin-bottom: var(--spacing-xl);
  text-align: center;
  color: ${(props) => props.theme.text};
`;

export default Experience;
