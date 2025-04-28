import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FaHome, FaSearch } from "react-icons/fa";
import "./NotFound.css";

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NotFoundContainer className="container">
        <NotFoundContent>
          <ErrorCode>404</ErrorCode>
          <ErrorTitle>Page Not Found</ErrorTitle>
          <ErrorMessage>
            Oops! The page you're looking for doesn't exist or has been moved.
          </ErrorMessage>

          <ButtonContainer>
            <HomeButton
              to="/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaHome style={{ marginRight: "10px" }} /> Back to Home
            </HomeButton>

            <ProjectsButton
              to="/projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaSearch style={{ marginRight: "10px" }} /> Browse Projects
            </ProjectsButton>
          </ButtonContainer>
        </NotFoundContent>
      </NotFoundContainer>
    </motion.div>
  );
};

// Styled components
const NotFoundContainer = styled.div`
  height: calc(100vh - var(--header-height) - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const NotFoundContent = styled.div`
  max-width: 600px;
  padding: var(--spacing-xl);
`;

const ErrorCode = styled.h1`
  font-size: 8rem;
  font-weight: 800;
  background: ${(props) => props.theme.gradientPrimary};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: var(--spacing-sm);
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 6rem;
  }
`;

const ErrorTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: var(--spacing-md);
  color: ${(props) => props.theme.text};

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ErrorMessage = styled.p`
  font-size: 1.25rem;
  color: ${(props) => props.theme.textSecondary};
  margin-bottom: var(--spacing-lg);

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

const HomeButton = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background: ${(props) => props.theme.primary};
  color: white;
  border-radius: var(--border-radius);
  font-weight: 500;
  transition: background var(--transition-fast);

  &:hover {
    background: ${(props) => props.theme.secondary};
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const ProjectsButton = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background: transparent;
  color: ${(props) => props.theme.primary};
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: var(--border-radius);
  font-weight: 500;
  transition:
    background var(--transition-fast),
    color var(--transition-fast);

  &:hover {
    background: ${(props) => props.theme.primary};
    color: white;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export default NotFound;
