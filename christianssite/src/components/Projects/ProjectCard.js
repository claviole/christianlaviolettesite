import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const { title, description, image, technologies, category, link, github } =
    project;
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  const expandImage = () => {
    setIsImageExpanded(true);
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeExpandedImage = () => {
    setIsImageExpanded(false);
    // Restore scrolling
    document.body.style.overflow = "auto";
  };

  // Close on escape key press
  React.useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        closeExpandedImage();
      }
    };

    if (isImageExpanded) {
      window.addEventListener("keydown", handleEscKey);
    }

    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [isImageExpanded]);

  return (
    <>
      <Card
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        data-aos="fade-up"
        data-category={category}
      >
        <ImageContainer>
          <ProjectImage
            src={image}
            alt={title}
            style={
              category === "automation"
                ? { maxWidth: "65%", margin: "0 auto" }
                : {}
            }
            onClick={expandImage}
            className="clickable-image"
          />
          <ImageOverlay className="project-image-overlay" />
        </ImageContainer>

        <CardContent>
          <ProjectTitle>{title}</ProjectTitle>
          <ProjectDescription>{description}</ProjectDescription>

          <TechStack>
            {technologies.map((tech, index) => (
              <TechTag key={index}>{tech}</TechTag>
            ))}
          </TechStack>

          <LinksContainer>
            {github && (
              <ProjectLink
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} code on GitHub`}
              >
                <FaGithub /> Code
              </ProjectLink>
            )}
            {link && (
              <ProjectLink
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo of ${title}`}
              >
                <FaExternalLinkAlt /> Live
              </ProjectLink>
            )}
          </LinksContainer>
        </CardContent>
      </Card>

      {/* Image Modal for expanded view */}
      {isImageExpanded && (
        <ImageModal onClick={closeExpandedImage}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeExpandedImage}>
              <FaTimes />
            </CloseButton>
            <ExpandedImage src={image} alt={title} />
            <ImageCaption>{title}</ImageCaption>
          </ModalContent>
        </ImageModal>
      )}
    </>
  );
};

const Card = styled(motion.div)`
  background: ${(props) => props.theme.backgroundSecondary};
  border-radius: var(--border-radius);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  height: 100%;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-medium);
  cursor: pointer; /* Indicate the image is clickable */

  &:hover {
    transform: scale(1.05);
  }

  &.clickable-image:hover {
    box-shadow: 0 0 0 3px ${(props) => props.theme.primary}40;
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.6)
  );
  opacity: 0;
  transition: opacity var(--transition-medium);

  ${Card}:hover & {
    opacity: 1;
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: ${(props) => props.theme.text};
`;

const ProjectDescription = styled.p`
  color: ${(props) => props.theme.textSecondary};
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.25rem;
  flex-grow: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
`;

const TechTag = styled.span`
  background: ${(props) => props.theme.backgroundLight};
  color: ${(props) => props.theme.textSecondary};
  padding: 0.25rem 0.75rem;
  border-radius: 30px;
  font-size: 0.8rem;
  font-weight: 500;
  transition:
    background var(--transition-fast),
    color var(--transition-fast);

  &:hover {
    background: ${(props) => props.theme.primary};
    color: white;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.primary};
  font-weight: 500;
  transition: color var(--transition-fast);

  &:hover {
    color: ${(props) => props.theme.secondary};
  }
`;

// New styled components for the modal
const ImageModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ExpandedImage = styled.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 4px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.25);
`;

const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: transparent;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const ImageCaption = styled.div`
  margin-top: 1rem;
  color: white;
  font-size: 1.2rem;
  text-align: center;
`;

export default ProjectCard;
