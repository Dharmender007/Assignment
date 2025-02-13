// components/Testimonial.tsx
import React from "react";
import styled from "styled-components";

const TestimonialSection = styled.section`
  padding: 40px;
  background: ${(props) => props.theme.colors.white};
  text-align: center;
`;

const Testimonial: React.FC = () => {
  return (
    <TestimonialSection>
      <blockquote>
        "This team has been amazing! They helped my business grow online."
      </blockquote>
      <p>- John Doe, CEO of XYZ</p>
    </TestimonialSection>
  );
};

export default Testimonial;
