import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <NavContainer
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavInner>
        <Logo to="/">
          <span className="highlight">C</span>hristian{" "}
          <span className="highlight">L</span>aviolette
        </Logo>

        <NavLinks className={mobileMenuOpen ? "active" : ""}>
          <NavItem to="/" $active={location.pathname === "/"}>
            Home
          </NavItem>
          <NavItem to="/about" $active={location.pathname === "/about"}>
            About
          </NavItem>
          <NavItem to="/projects" $active={location.pathname === "/projects"}>
            Projects
          </NavItem>
          <NavItem
            to="/experience"
            $active={location.pathname === "/experience"}
          >
            Experience
          </NavItem>
          <NavItem to="/skills" $active={location.pathname === "/skills"}>
            Skills
          </NavItem>
          <NavItem to="/contact" $active={location.pathname === "/contact"}>
            Contact
          </NavItem>
        </NavLinks>

        <NavRight>
          <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </MobileMenuButton>
        </NavRight>
      </NavInner>
    </NavContainer>
  );
};

// Styled components
const NavContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 var(--spacing-md);
  z-index: var(--z-header);
  transition:
    background-color var(--transition-medium),
    box-shadow var(--transition-medium);

  &.scrolled {
    background-color: ${(props) => props.theme.backgroundSecondary};
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
  }
`;

const NavInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: var(--max-width);
`;

const Logo = styled(NavLink)`
  font-family: var(--font-heading);
  font-size: 1.75rem;
  font-weight: 700;
  color: ${(props) => props.theme.text};
  transition: color var(--transition-fast);

  &:hover {
    color: ${(props) => props.theme.primary};
  }

  .highlight {
    color: ${(props) => props.theme.accent};
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);

  @media (max-width: 768px) {
    position: fixed;
    top: var(--header-height);
    right: -100%;
    width: 70%;
    max-width: 300px;
    height: calc(100vh - var(--header-height));
    flex-direction: column;
    background: ${(props) => props.theme.backgroundSecondary};
    padding: var(--spacing-lg);
    transition: right var(--transition-medium);
    box-shadow: -5px 0 20px rgba(0, 0, 0, 0.1);

    &.active {
      right: 0;
    }
  }
`;

const NavItem = styled(NavLink)`
  position: relative;
  color: ${(props) =>
    props.$active ? props.theme.primary : props.theme.textSecondary};
  font-weight: 500;
  padding: 0.5rem;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${(props) => (props.$active ? "100%" : "0")};
    height: 2px;
    background-color: ${(props) => props.theme.primary};
    transition: width var(--transition-medium);
  }

  &:hover {
    color: ${(props) => props.theme.primary};

    &::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: var(--spacing-sm);

    &::after {
      bottom: 5px;
    }
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
`;

const ThemeToggle = styled.button`
  background: transparent;
  border: none;
  color: ${(props) => props.theme.textSecondary};
  font-size: 1.25rem;
  cursor: pointer;
  transition:
    color var(--transition-fast),
    transform var(--transition-fast);

  &:hover {
    color: ${(props) => props.theme.primary};
    transform: rotate(15deg);
  }

  .icon {
    transition: transform var(--transition-medium);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: ${(props) => props.theme.textSecondary};
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export default Navbar;
