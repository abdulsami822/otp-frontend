import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HeaderContainer, Image, Navbar } from "./styledComponents";

export class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <Link>
          <Image src="/logo192.png" alt="logo" />
        </Link>
        <Navbar>
          <Link>Send OTP</Link>
          <Link>View OTP</Link>
        </Navbar>
      </HeaderContainer>
    );
  }
}

export default Header;
