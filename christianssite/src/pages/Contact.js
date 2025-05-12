import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        success: false,
        message: "Please fill out all required fields.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const docRef = await addDoc(collection(db, "contacts"), {
        ...formData,
        timestamp: serverTimestamp(),
        processed: false,
      });

      setSubmitStatus({
        success: true,
        message: "Message sent successfully!",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      // Log more details about the error
      console.error("Error code:", error.code);
      console.error("Error message:", error.message);
      console.error("Error details:", error.details);

      setSubmitStatus({
        success: false,
        message: `Error sending message: ${error.message}. Please try again later.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ContactContainer className="container">
        <PageHeader data-aos="fade-up">
          <Heading>Contact Me</Heading>
          <Subheading>
            Let's connect and discuss how we can work together
          </Subheading>
        </PageHeader>

        <ContactContent>
          <ContactInfo data-aos="fade-up" data-aos-delay="200">
            <InfoTitle>Get In Touch</InfoTitle>
            <InfoText>
              Feel free to reach out if you're looking for a developer, have a
              question, or just want to connect.
            </InfoText>

            <ContactMethods>
              <ContactMethod>
                <ContactIcon>
                  <FaEnvelope />
                </ContactIcon>
                <ContactMethodInfo>
                  <ContactMethodTitle>Email</ContactMethodTitle>
                  <ContactMethodValue>
                    <a href="mailto:christianlaviolette@outlook.com">
                      christianlaviolette@outlook.com
                    </a>
                  </ContactMethodValue>
                </ContactMethodInfo>
              </ContactMethod>

              <ContactMethod>
                <ContactIcon>
                  <FaLinkedin />
                </ContactIcon>
                <ContactMethodInfo>
                  <ContactMethodTitle>LinkedIn</ContactMethodTitle>
                  <ContactMethodValue>
                    <a
                      href="https://linkedin.com/in/christianlaviolette"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      linkedin.com/in/christianlaviolette
                    </a>
                  </ContactMethodValue>
                </ContactMethodInfo>
              </ContactMethod>

              <ContactMethod>
                <ContactIcon>
                  <FaGithub />
                </ContactIcon>
                <ContactMethodInfo>
                  <ContactMethodTitle>GitHub</ContactMethodTitle>
                  <ContactMethodValue>
                    <a
                      href="https://github.com/claviole"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github.com/claviole
                    </a>
                  </ContactMethodValue>
                </ContactMethodInfo>
              </ContactMethod>
            </ContactMethods>
          </ContactInfo>

          <ContactForm data-aos="fade-up" data-aos-delay="400">
            <form onSubmit={handleSubmit}>
              {submitStatus && (
                <StatusMessage success={submitStatus.success}>
                  {submitStatus.message}
                </StatusMessage>
              )}

              <FormGroup>
                <FormLabel htmlFor="name">Name *</FormLabel>
                <FormInput
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="email">Email *</FormLabel>
                <FormInput
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="subject">Subject</FormLabel>
                <FormInput
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="message">Message *</FormLabel>
                <FormTextarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <SubmitButton
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <FaPaperPlane style={{ marginLeft: "10px" }} />
              </SubmitButton>
            </form>
          </ContactForm>
        </ContactContent>
      </ContactContainer>
    </motion.div>
  );
};

// Styled components
const ContactContainer = styled.div`
  padding: var(--spacing-xl) 0;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-xl);
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: var(--spacing-sm);
  color: ${(props) => props.theme.text};
`;

const Subheading = styled.p`
  font-size: 1.25rem;
  color: ${(props) => props.theme.textSecondary};
  max-width: 800px;
  margin: 0 auto;
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  background: ${(props) => props.theme.backgroundSecondary};
  border-radius: var(--border-radius);
  padding: var(--spacing-lg);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: var(--spacing-md);
  color: ${(props) => props.theme.text};
`;

const InfoText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${(props) => props.theme.textSecondary};
  margin-bottom: var(--spacing-md);
`;

const ContactMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
`;

const ContactMethod = styled.div`
  display: flex;
  align-items: flex-start;
`;

const ContactIcon = styled.div`
  margin-right: var(--spacing-md);
  font-size: 1.5rem;
  color: ${(props) => props.theme.primary};
  min-width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactMethodInfo = styled.div`
  flex: 1;
`;

const ContactMethodTitle = styled.h4`
  font-size: 1.1rem;
  margin-bottom: var(--spacing-xs);
  color: ${(props) => props.theme.text};
`;

const ContactMethodValue = styled.p`
  color: ${(props) => props.theme.textSecondary};
  font-size: 0.95rem;
  word-break: break-word;

  a {
    color: ${(props) => props.theme.textSecondary};
    text-decoration: none;
    transition: color var(--transition-fast);

    &:hover {
      color: ${(props) => props.theme.primary};
    }
  }
`;

const ContactForm = styled.div`
  background: ${(props) => props.theme.backgroundSecondary};
  border-radius: var(--border-radius);
  padding: var(--spacing-lg);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const FormGroup = styled.div`
  margin-bottom: var(--spacing-md);
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: var(--spacing-xs);
  color: ${(props) => props.theme.text};
  font-weight: 500;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid ${(props) => props.theme.backgroundLight};
  border-radius: var(--border-radius-sm);
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  font-size: 1rem;
  transition: border-color var(--transition-fast);

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.primary};
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid ${(props) => props.theme.backgroundLight};
  border-radius: var(--border-radius-sm);
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  transition: border-color var(--transition-fast);

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.primary};
  }
`;

const SubmitButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background: ${(props) => props.theme.primary};
  color: white;
  border: none;
  border-radius: var(--border-radius);
  font-weight: 500;
  cursor: pointer;
  transition: background var(--transition-fast);

  &:hover {
    background: ${(props) => props.theme.secondary};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const StatusMessage = styled.div`
  padding: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
  border-radius: var(--border-radius-sm);
  background: ${(props) =>
    props.success ? "rgba(100, 255, 218, 0.1)" : "rgba(239, 71, 111, 0.1)"};
  color: ${(props) =>
    props.success ? props.theme.success : props.theme.error};
  border-left: 3px solid
    ${(props) => (props.success ? props.theme.success : props.theme.error)};
`;

export default Contact;
