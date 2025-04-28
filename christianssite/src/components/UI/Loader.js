import React from "react";
import styled, { keyframes } from "styled-components";

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderContent>
        <SpinnerContainer>
          <Spinner>
            <DoubleBounce1 />
            <DoubleBounce2 />
          </Spinner>
        </SpinnerContainer>
        <LoadingText>Loading amazing content...</LoadingText>
      </LoaderContent>
    </LoaderContainer>
  );
};

// Animations
const bounce = keyframes`
  0%, 100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled components
const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.background};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const LoaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 0.5s ease;
`;

const SpinnerContainer = styled.div`
  margin-bottom: 20px;
`;

const Spinner = styled.div`
  width: 60px;
  height: 60px;
  position: relative;
`;

const DoubleBounce1 = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${(props) => props.theme.primary};
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${bounce} 2s infinite ease-in-out;
`;

const DoubleBounce2 = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${(props) => props.theme.secondary};
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${bounce} 2s infinite ease-in-out;
  animation-delay: -1s;
`;

const LoadingText = styled.p`
  color: ${(props) => props.theme.textSecondary};
  font-size: 1.2rem;
  font-weight: 500;
`;

export default Loader;
