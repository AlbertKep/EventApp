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

import { AuthContext } from "../../context/AuthContext";

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// services
import { logout } from "../../firebase/api.service";

function Navigation() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    logout();
    dispatch({ type: "LOGOUT" });
    setMenuIsOpen(false);
    navigate("/");
  };

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

        {user && (
          <>
            <MenuItem onClick={() => setMenuIsOpen((prev) => !prev)}>
              <StyledLink to="/profile">My Profile</StyledLink>
            </MenuItem>

            <MenuItem onClick={() => setMenuIsOpen((prev) => !prev)}>
              <StyledLink to="/addevent">Add Event</StyledLink>
            </MenuItem>
          </>
        )}

        {!user && (
          <>
            <MenuItem onClick={() => setMenuIsOpen((prev) => !prev)}>
              <StyledLink to="/signin">Sign In</StyledLink>
            </MenuItem>

            <MenuItem onClick={() => setMenuIsOpen((prev) => !prev)}>
              <StyledLink to="/signup">Sign Up</StyledLink>
            </MenuItem>
          </>
        )}

        {user && (
          <MenuItem>
            <Button onClick={() => handleClick()}>Logout</Button>
          </MenuItem>
        )}
      </Menu>
    </Navbar>
  );
}

export default Navigation;
