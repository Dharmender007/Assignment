// components/Services.tsx
import React from "react";
import styled from "styled-components";

const ServicesContainer = styled.section`
  padding: 50px;
  text-align: center;
`;

const Services: React.FC = () => {
  return (
    <ServicesContainer>
      <h2>Explore Our Services</h2>
      <p>We offer Web Development, Branding, and SEO Optimization</p>
    </ServicesContainer>
  );
};

export default Services;
