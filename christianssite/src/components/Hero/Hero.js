import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import {
  Text3D,
  OrbitControls,
  MeshDistortMaterial,
  Sphere,
} from "@react-three/drei";
import styled from "styled-components";
import "./Hero.css";

const Hero = () => {
  const canvasRef = useRef(null);

  // Mouse movement effect for parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!canvasRef.current) return;

      const x = (window.innerWidth / 2 - e.clientX) / 25;
      const y = (window.innerHeight / 2 - e.clientY) / 25;

      canvasRef.current.style.transform = `translateX(${x}px) translateY(${y}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <HeroContainer>
      <HeroContent>
        <TextContent>
          <Greeting>Hello, I'm</Greeting>

          <motion.h1
            className="name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Christian Laviolette
          </motion.h1>

          <motion.h2
            className="title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="highlight">Software Engineer</span> &{" "}
            <span className="highlight">AI Specialist</span>
          </motion.h2>

          <motion.p
            className="description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Building intelligent solutions at the intersection of software
            engineering and artificial intelligence. Currently pursuing a
            Master's in AI at Purdue University with a focus on AI policy,
            governance, and strategic management.
          </motion.p>

          <ButtonGroup>
            <PrimaryButton
              to="/projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </PrimaryButton>

            <SecondaryButton
              to="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </SecondaryButton>
          </ButtonGroup>
        </TextContent>

        <VisualContent ref={canvasRef}>
          <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Sphere args={[1, 100, 200]} scale={1.8}>
              <MeshDistortMaterial
                color="#6e57e0"
                attach="material"
                distort={0.4}
                speed={2}
                roughness={0.5}
              />
            </Sphere>
            <OrbitControls
              enableZoom={false}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Canvas>
        </VisualContent>
      </HeroContent>

      <ScrollIndicator>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </ScrollIndicator>
    </HeroContainer>
  );
};

// Styled components
const HeroContainer = styled.section`
  position: relative;
  height: 100vh;
  min-height: 700px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0 var(--spacing-md);
`;

const HeroContent = styled.div`
  max-width: var(--max-width);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;

const TextContent = styled.div`
  flex: 1;
  max-width: 600px;
  z-index: 1;

  @media (max-width: 1024px) {
    margin-bottom: var(--spacing-xl);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Greeting = styled.div`
  font-size: 1.25rem;
  color: ${(props) => props.theme.primary};
  margin-bottom: var(--spacing-xs);
  font-weight: 500;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);

  @media (max-width: 480px) {
    flex-direction: column;
    gap: var(--spacing-sm);
    width: 100%;
  }
`;

const PrimaryButton = styled(motion(Link))`
  background: ${(props) => props.theme.primary};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  font-weight: 500;
  display: inline-block;
  transition: background var(--transition-fast);

  &:hover {
    background: ${(props) => props.theme.secondary};
    color: white;
  }

  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
  }
`;

const SecondaryButton = styled(motion(Link))`
  background: transparent;
  color: ${(props) => props.theme.primary};
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  font-weight: 500;
  border: 1px solid ${(props) => props.theme.primary};
  display: inline-block;
  transition:
    background var(--transition-fast),
    color var(--transition-fast);

  &:hover {
    background: ${(props) => props.theme.primary};
    color: white;
  }

  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
  }
`;

const VisualContent = styled.div`
  flex: 1;
  height: 500px;
  z-index: 0;

  canvas {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1024px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    z-index: -1;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default Hero;
