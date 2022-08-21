// components
import {
  Navbar,
  Logo,
  HamburgerMenu,
  Menu,
  MenuItem,
  StyledLink,
} from "./Navigation.styled";
import { Button } from "../button/Button.styled";

// menu icons
import hamburger from "../../assets/hamburger/icon-hamburger.svg";
import closeMenu from "../../assets/hamburger/icon-close.svg";

import { useState } from "react";

function Navigation() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <Navbar>
      <Logo>
        <StyledLink to="/">EventApp</StyledLink>
      </Logo>

      <HamburgerMenu onClick={() => setMenuIsOpen((prev) => !prev)}>
        <img src={menuIsOpen ? closeMenu : hamburger} alt="menu icon" />
      </HamburgerMenu>

      <Menu menuPosition={menuIsOpen ? "0" : "-100%"}>
        <MenuItem onClick={() => setMenuIsOpen((prev) => !prev)}>
          <StyledLink to="/">Home</StyledLink>
        </MenuItem>
        <MenuItem onClick={() => setMenuIsOpen((prev) => !prev)}>
          <StyledLink to="/events">Events</StyledLink>
        </MenuItem>
        <MenuItem onClick={() => setMenuIsOpen((prev) => !prev)}>
          <StyledLink to="/signin">Sign In</StyledLink>
        </MenuItem>
        <MenuItem onClick={() => setMenuIsOpen((prev) => !prev)}>
          <StyledLink to="/signup">Sign Up</StyledLink>
        </MenuItem>

        <MenuItem>
          <Button>Logout</Button>
        </MenuItem>
      </Menu>
    </Navbar>
  );
}

export default Navigation;
