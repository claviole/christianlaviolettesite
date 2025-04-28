import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";

const CallToAction = ({ heading, subheading, buttonText, buttonLink }) => {
  return (
    <CTAContainer data-aos="fade-up">
      <CTAContent>
        <CTAHeading>{heading}</CTAHeading>
        <CTASubheading>{subheading}</CTASubheading>

        <CTAButton
          to={buttonLink}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {buttonText} <FaArrowRight style={{ marginLeft: "10px" }} />
        </CTAButton>
      </CTAContent>
    </CTAContainer>
  );
};

// Styled components
const CTAContainer = styled.section`
  margin: var(--spacing-xl) 0;
  padding: var(--spacing-xl) var(--spacing-md);
  background: ${(props) => props.theme.gradientPrimary};
  border-radius: var(--border-radius);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("/assets/patterns/circuit-pattern.svg") no-repeat;
    background-size: cover;
    opacity: 0.1;
    z-index: 0;
  }
`;

const CTAContent = styled.div`
  text-align: center;
  position: relative;
  z-index: 1;
`;

const CTAHeading = styled.h2`
  font-size: 2.5rem;
  color: white;
  margin-bottom: var(--spacing-sm);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CTASubheading = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 800px;
  margin: 0 auto var(--spacing-lg);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CTAButton = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: white;
  color: var(--primary-color);
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  font-weight: 600;
  transition:
    background var(--transition-fast),
    transform var(--transition-fast);

  &:hover {
    background: rgba(255, 255, 255, 0.9);
    color: var(--primary-color);
  }
`;

export default CallToAction;
