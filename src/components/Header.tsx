// components/Header.tsx
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <h2>Digital Agency</h2>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/contact">Contact</Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
