import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavContainer
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Logo to="/">
        <span className="highlight">C</span>hristian{" "}
        <span className="highlight">L</span>aviolette
      </Logo>

      <NavLinks>
        <NavItem to="/" exact>
          Home
        </NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/projects">Projects</NavItem>
        <NavItem to="/experience">Experience</NavItem>
        <NavItem to="/skills">Skills</NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </NavLinks>

      <ThemeToggle>{/* Theme toggle icon */}</ThemeToggle>
    </NavContainer>
  );
};

// Styled components definitions
const NavContainer = styled(motion.nav)`
  // ... styling here
`;

// ... other styled components

export default Navbar;
