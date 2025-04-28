import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FaDownload, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AboutContainer className="container">
        <AboutHeader data-aos="fade-up">
          <SectionHeading>About Me</SectionHeading>
          <Subheading>
            Software Engineer & AI Specialist based in Merrillville, Indiana
          </Subheading>
        </AboutHeader>

        <AboutGrid>
          <AboutContent data-aos="fade-up" data-aos-delay="200">
            <p>
              I'm Christian Laviolette, a passionate Software Engineer with a
              strong focus on artificial intelligence and machine learning
              technologies. With a background in computer science and currently
              pursuing a Master's in AI at Purdue University, I bridge the gap
              between theoretical knowledge and practical implementation.
            </p>
            <p>
              My journey in technology has been driven by a fascination with how
              intelligent systems can solve complex problems and improve
              people's lives. Whether it's developing web applications, training
              machine learning models, or automating business processes, I'm
              committed to creating solutions that are both innovative and
              practical.
            </p>
            <p>
              Currently, I work as a Software Engineer at Target Metal Blanking,
              where I've had the opportunity to implement AI-driven automation
              tools and custom web-based ERP systems. My previous experience in
              management has given me valuable insights into business operations
              and the importance of clear communication when delivering
              technical solutions.
            </p>
            <p>
              When I'm not coding, I enjoy staying up-to-date with the latest
              developments in AI research, exploring new technologies, and
              contributing to open-source projects.
            </p>

            <ResumeButton
              href="/assets/Christian_Laviolette_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload style={{ marginRight: "10px" }} /> Download Resume
            </ResumeButton>
          </AboutContent>

          <AboutImageSection data-aos="fade-up" data-aos-delay="400">
            <AboutImage src="/assets/profile.jpg" alt="Christian Laviolette" />
            <AboutStats>
              <StatItem>
                <StatIcon>
                  <FaGraduationCap />
                </StatIcon>
                <StatContent>
                  <StatTitle>Education</StatTitle>
                  <StatValue>MS in AI (in progress)</StatValue>
                  <StatValue>BS in Computer Science</StatValue>
                </StatContent>
              </StatItem>

              <StatItem>
                <StatIcon>
                  <FaBriefcase />
                </StatIcon>
                <StatContent>
                  <StatTitle>Experience</StatTitle>
                  <StatValue>Software Engineer</StatValue>
                  <StatValue>Sr. General Manager</StatValue>
                </StatContent>
              </StatItem>
            </AboutStats>
          </AboutImageSection>
        </AboutGrid>

        <AboutQuote data-aos="fade-up">
          <QuoteText>
            "The science of today is the technology of tomorrow. I strive to be
            at that intersection."
          </QuoteText>
          <QuoteAuthor>— My Professional Philosophy</QuoteAuthor>
        </AboutQuote>
      </AboutContainer>
    </motion.div>
  );
};

// Styled components
const AboutContainer = styled.section`
  padding: var(--spacing-xl) 0;
`;

const AboutHeader = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-xl);
`;

const SectionHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: var(--spacing-sm);
  color: ${(props) => props.theme.text};
`;

const Subheading = styled.p`
  font-size: 1.25rem;
  color: ${(props) => props.theme.textSecondary};
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: var(--spacing-xl);

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const AboutContent = styled.div`
  p {
    margin-bottom: var(--spacing-md);
    line-height: 1.8;
    color: ${(props) => props.theme.textSecondary};
    font-size: 1.1rem;
  }
`;

const ResumeButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background: ${(props) => props.theme.primary};
  color: white;
  border-radius: var(--border-radius);
  font-weight: 500;
  margin-top: var(--spacing-md);
  text-decoration: none;
  transition: background var(--transition-fast);

  &:hover {
    background: ${(props) => props.theme.secondary};
  }
`;

const AboutImageSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

const AboutImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: var(--border-radius);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const AboutStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

const StatItem = styled.div`
  display: flex;
  align-items: flex-start;
  background: ${(props) => props.theme.backgroundSecondary};
  border-radius: var(--border-radius);
  padding: var(--spacing-md);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const StatIcon = styled.div`
  margin-right: var(--spacing-md);
  font-size: 1.5rem;
  color: ${(props) => props.theme.primary};
  min-width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StatContent = styled.div`
  flex: 1;
`;

const StatTitle = styled.h4`
  font-size: 1.1rem;
  margin-bottom: var(--spacing-xs);
  color: ${(props) => props.theme.text};
`;

const StatValue = styled.p`
  color: ${(props) => props.theme.textSecondary};
  font-size: 0.95rem;
  line-height: 1.6;
`;

const AboutQuote = styled.div`
  margin-top: var(--spacing-xl);
  text-align: center;
  padding: var(--spacing-lg);
  background: ${(props) => props.theme.backgroundSecondary};
  border-radius: var(--border-radius);
  border-left: 5px solid ${(props) => props.theme.primary};
`;

const QuoteText = styled.p`
  font-size: 1.5rem;
  font-style: italic;
  color: ${(props) => props.theme.text};
  margin-bottom: var(--spacing-sm);
  line-height: 1.6;
`;

const QuoteAuthor = styled.p`
  color: ${(props) => props.theme.textTertiary};
  font-size: 1rem;
`;

export default About;
