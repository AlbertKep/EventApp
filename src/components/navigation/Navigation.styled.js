import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.nav`
  background-color: #2127c8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25em;
`;
export const Logo = styled.div`
  font-size: 1.3rem;

  a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
  }

  @media screen and (min-width: 768px) {
    font-size: 1.75rem;
  }
`;
export const HamburgerMenu = styled.div`
  z-index: 888;
  cursor: pointer;

  @media screen and (min-width: 576px) {
    display: none;
  }
`;

export const Menu = styled.ul`
  position: absolute;
  top: 0;
  left: ${({ menuPosition }) => menuPosition};
  height: 100vh;
  width: 100%;
  z-index: 99;
  background: #2127c8;
  font-size: 1.5rem;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;

  @media screen and (min-width: 576px) {
    position: static;
    height: auto;
    flex-direction: row;
    justify-content: flex-end;
    font-size: 1.2rem;
  }
`;

export const MenuItem = styled.li`
  padding: 0.35em;
  cursor: pointer;
  font-weight: 600;
  overflow-y: hidden;
  padding: 0.2em 0.4em;

  @media screen and (min-width: 768px) {
    padding-right: 1.5em;
  }
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: #fff;
  border: 3px solid transparent;
  padding: 0.3em 0;
`;
