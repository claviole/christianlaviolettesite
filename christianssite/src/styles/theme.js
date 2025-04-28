import { createGlobalStyle } from "styled-components";

// Dark theme color palette (AI-oriented)
export const darkTheme = {
  background: "#0a192f",
  backgroundSecondary: "#112240",
  backgroundLight: "#1d3557",
  text: "#e6f1ff",
  textSecondary: "#a8b2d1",
  textTertiary: "#8892b0",
  primary: "#6e57e0",
  secondary: "#00d9ff",
  accent: "#ff7b5c",
  success: "#64ffda",
  warning: "#ffd166",
  error: "#ef476f",
  shadow: "rgba(0, 0, 0, 0.3)",
  gradientPrimary: "linear-gradient(135deg, #6e57e0, #00d9ff)",
  cardBackground: "rgba(17, 34, 64, 0.7)",
};

// Light theme color palette (professional, clean)
export const lightTheme = {
  background: "#f5f9ff",
  backgroundSecondary: "#e6f1ff",
  backgroundLight: "#ffffff",
  text: "#1d3557",
  textSecondary: "#3d5a80",
  textTertiary: "#607b96",
  primary: "#3a86ff",
  secondary: "#1976d2",
  accent: "#f26419",
  success: "#06d6a0",
  warning: "#ffd166",
  error: "#ef476f",
  shadow: "rgba(0, 0, 0, 0.1)",
  gradientPrimary: "linear-gradient(135deg, #3a86ff, #1976d2)",
  cardBackground: "rgba(255, 255, 255, 0.7)",
};

// Global styled components that respond to theme
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    transition: all 0.3s ease;
  }
  
  .app-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  .main-content {
    flex: 1;
  }
  
  a {
    color: ${(props) => props.theme.primary};
  }
  
  a:hover {
    color: ${(props) => props.theme.secondary};
  }
  
  .card {
    background: ${(props) => props.theme.cardBackground};
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 30px ${(props) => props.theme.shadow};
  }
  
  .btn-primary {
    background: ${(props) => props.theme.primary};
    color: ${(props) =>
      props.theme === lightTheme ? "#ffffff" : props.theme.text};
  }
  
  .btn-secondary {
    background: transparent;
    border: 1px solid ${(props) => props.theme.primary};
    color: ${(props) => props.theme.primary};
  }
  
  .section-heading {
    color: ${(props) => props.theme.primary};
  }
  
  .highlight {
    color: ${(props) => props.theme.accent};
  }
  
  ::selection {
    background: ${(props) => props.theme.primary};
    color: #ffffff;
  }
`;

export default { darkTheme, lightTheme, GlobalStyles };
