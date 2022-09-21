import { HeaderContainer, Image, Navbar, NavbarLink } from "./styledComponents";

export const Header = () => (
  <HeaderContainer>
    <NavbarLink to="/">
      <Image src="/logo.png" alt="logo" />
    </NavbarLink>
    <Navbar>
      <NavbarLink to="/">Send OTP</NavbarLink>
      <NavbarLink to="/view-otp">View OTP</NavbarLink>
    </Navbar>
  </HeaderContainer>
);

export default Header;
