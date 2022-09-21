import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  background-color: #fff;
  width: 100%;
  min-height: 30px;
  max-height: 10%;
  padding: 20px 40px;
  box-shadow: 0 0px 5px #888;
  display: flex;
  justify-content: space-between;
`;

export const Image = styled.img`
  max-height: 70px;
`;

export const Navbar = styled.nav`
  min-width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const NavbarLink = styled(Link)`
  font-family: "Inter", sans-serif;
  text-decoration: none;
  color: var(--primary-color);
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`;
