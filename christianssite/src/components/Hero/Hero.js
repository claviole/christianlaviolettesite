import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text3D, Center } from "@react-three/drei";
import styled from "styled-components";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import "./Hero.css";

const Hero = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <HeroContainer>
      <ParticlesBackground
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          particles: {
            // Particle configuration for a tech/AI look
          },
        }}
      />

      <ContentWrapper>
        <TextContent>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Christian Laviolette
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Software Engineer & AI Specialist
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Building intelligent solutions at the intersection of software
            engineering and artificial intelligence
          </motion.p>

          <ButtonGroup>
            <PrimaryButton to="/projects">View My Work</PrimaryButton>
            <SecondaryButton to="/contact">Get In Touch</SecondaryButton>
          </ButtonGroup>
        </TextContent>

        <ModelContainer>
          <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Center>{/* 3D model or text */}</Center>
            <OrbitControls enableZoom={false} autoRotate />
          </Canvas>
        </ModelContainer>
      </ContentWrapper>
    </HeroContainer>
  );
};

// Styled components
const HeroContainer = styled.div`
  // ... styling
`;

// ... other styled components

export default Hero;
