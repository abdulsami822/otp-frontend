import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  background-color: #fff;
  box-shadow: 0 0px 5px #888;
  display: flex;
  justify-content: space-between;
  max-height: 10%;
  max-width: 100%;
  min-height: 30px;
  padding: 20px 40px;
`;

export const Navbar = styled.nav`
  min-width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 600px) {
    min-width: 150px;
  }
`;

export const NavbarLink = styled(Link)`
  font-family: "Inter", sans-serif;
  text-decoration: none;
  color: var(--primary-color);
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    font-size: 13px;
  }
`;

export const Image = styled.img`
  max-height: 50px;
  @media (max-height: 600px) {
    max-height: 30px;
  }
`;
