// components/Hero.tsx
import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  text-align: center;
  background: ${(props) => props.theme.colors.secondary};
`;

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <div>
        <h1>Building Brands in the Digital Age</h1>
        <p>We help brands grow with powerful digital solutions.</p>
        <button>Get Started</button>
      </div>
    </HeroSection>
  );
};

export default Hero;
