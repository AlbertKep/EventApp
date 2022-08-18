import {
  Navbar,
  Logo,
  HamburgerMenu,
  Menu,
  MenuItem,
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
        <a href="#">EventApp</a>
      </Logo>

      <HamburgerMenu onClick={() => setMenuIsOpen((prev) => !prev)}>
        <img src={menuIsOpen ? closeMenu : hamburger} alt="menu icon" />
      </HamburgerMenu>

      <Menu menuPosition={menuIsOpen ? "0" : "-100%"}>
        <MenuItem>Home</MenuItem>
        <MenuItem>Events</MenuItem>
        <MenuItem>Sign In</MenuItem>
        <MenuItem>Sign Up</MenuItem>

        <MenuItem>
          <Button>Logout</Button>
        </MenuItem>
      </Menu>
    </Navbar>
  );
}

export default Navigation;
