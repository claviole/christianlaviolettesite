import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterTop>
          <FooterBrand>
            <BrandName>Christian Laviolette</BrandName>
            <BrandTagline>Software Engineer & AI Specialist</BrandTagline>
          </FooterBrand>

          <FooterLinks>
            <LinkColumn>
              <ColumnTitle>Navigation</ColumnTitle>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/about">About</StyledLink>
              <StyledLink to="/projects">Projects</StyledLink>
            </LinkColumn>

            <LinkColumn>
              <ColumnTitle>More</ColumnTitle>
              <StyledLink to="/experience">Experience</StyledLink>
              <StyledLink to="/skills">Skills</StyledLink>
              <StyledLink to="/contact">Contact</StyledLink>
            </LinkColumn>

            <LinkColumn>
              <ColumnTitle>Connect</ColumnTitle>
              <SocialLinks>
                <SocialLink
                  href="https://github.com/claviole"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={20} />
                </SocialLink>
                <SocialLink
                  href="https://linkedin.com/in/christianlaviolette"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={20} />
                </SocialLink>
                <SocialLink href="mailto:christianlaviolette@outlook.com">
                  <FaEnvelope size={20} />
                </SocialLink>
              </SocialLinks>
            </LinkColumn>
          </FooterLinks>
        </FooterTop>

        <FooterBottom>
          <Copyright>
            © {currentYear} Christian Laviolette. All rights reserved.
          </Copyright>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

// Styled components
const FooterContainer = styled.footer`
  background: ${(props) => props.theme.backgroundSecondary};
  padding: var(--spacing-lg) var(--spacing-md);
  color: ${(props) => props.theme.textSecondary};
`;

const FooterContent = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--spacing-lg);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--spacing-lg);
  }
`;

const FooterBrand = styled.div`
  max-width: 300px;
`;

const BrandName = styled.h3`
  color: ${(props) => props.theme.text};
  margin-bottom: var(--spacing-sm);
`;

const BrandTagline = styled.p`
  color: ${(props) => props.theme.textTertiary};
  line-height: 1.5;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: var(--spacing-xl);

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: var(--spacing-lg);
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: var(--spacing-md);
  }
`;

const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 120px;
`;

const ColumnTitle = styled.h4`
  color: ${(props) => props.theme.primary};
  margin-bottom: var(--spacing-sm);
  font-size: 1.1rem;
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.textSecondary};
  margin-bottom: 0.5rem;
  transition: color var(--transition-fast);

  &:hover {
    color: ${(props) => props.theme.primary};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const SocialLink = styled.a`
  color: ${(props) => props.theme.textSecondary};
  transition:
    color var(--transition-fast),
    transform var(--transition-fast);

  &:hover {
    color: ${(props) => props.theme.primary};
    transform: translateY(-3px);
  }
`;

const FooterBottom = styled.div`
  padding-top: var(--spacing-md);
  border-top: 1px solid ${(props) => props.theme.backgroundLight};
`;

const Copyright = styled.p`
  text-align: center;
  color: ${(props) => props.theme.textTertiary};
  font-size: 0.9rem;
`;

export default Footer;
