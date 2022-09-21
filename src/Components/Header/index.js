import { HeaderContainer, Image, Navbar, NavbarLink } from "./styledComponents";

export const Header = () => (
  <HeaderContainer>
    <NavbarLink to="/">
      <Image src="/logo.png" alt="logo" />
    </NavbarLink>
    <Navbar>
      <NavbarLink to="/">Contacts</NavbarLink>
      <NavbarLink to="/otps">OTPs</NavbarLink>
    </Navbar>
  </HeaderContainer>
);

export default Header;
